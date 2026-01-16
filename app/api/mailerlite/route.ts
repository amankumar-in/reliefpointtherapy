import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, lastName, phone, supportWith, productsInterested, tags } = body

    console.log(`[MailerLite POST] Processing submission for: ${email}`, {
      timestamp: new Date().toISOString(),
      body: { ...body, email: "[REDACTED]" } // Redact email for privacy in logs if needed, but the user asked for detailed logging to verify data, so maybe keep it. Let's keep it but be mindful. 
    })

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Get MailerLite API token from environment variable
    const apiToken = process.env.MAILERLITE_API_TOKEN

    if (!apiToken) {
      console.error("MAILERLITE_API_TOKEN is not set")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // MailerLite uses groups (which act as tags) and requires group IDs
    // We'll find or create groups by name
    let groupIds: string[] = []

    // Helper function to get or create a custom field and return its key
    const getOrCreateFieldKey = async (fieldKey: string, fieldTitle: string, fieldType: string = "text") => {
      try {
        // Get existing fields
        const fieldsResponse = await fetch(
          "https://connect.mailerlite.com/api/fields",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiToken}`,
              Accept: "application/json",
            },
          }
        )

        if (fieldsResponse.ok) {
          const fieldsData = await fieldsResponse.json()
          const fields = fieldsData.data || []
          console.log(`[MailerLite] Successfully fetched ${fields.length} fields`)
          
          // Find existing field by key or name (case-insensitive)
          let field = fields.find((f: { key: string; name: string }) => {
            const fKey = f.key?.toLowerCase()
            const fName = f.name?.toLowerCase()
            return fKey === fieldKey.toLowerCase() || fName === fieldTitle.toLowerCase()
          })
          
          // If field doesn't exist, create it
          if (!field) {
            const createFieldResponse = await fetch(
              "https://connect.mailerlite.com/api/fields",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiToken}`,
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name: fieldTitle,
                  key: fieldKey,
                  type: fieldType,
                }),
              }
            )
            
            if (createFieldResponse.ok) {
              const newField = await createFieldResponse.json()
              field = newField.data
              console.log(`[MailerLite] Created new field: ${fieldTitle} (key: ${field.key})`)
            } else {
              const errorText = await createFieldResponse.text()
              console.error(`[MailerLite] Failed to create field "${fieldTitle}":`, errorText)
            }
          }
          
          // Return the field key (MailerLite uses key for custom fields)
          // Log for debugging
          if (field) {
            console.log(`Found field: ${fieldTitle}, key: ${field.key}, id: ${field.id}`)
          }
          return field?.key || fieldKey
        }
      } catch (error) {
        console.error(`[MailerLite] Error in getOrCreateFieldKey for "${fieldKey}":`, error)
      }
      return fieldKey
    }

    // Get or create custom field keys
    let supportWithFieldKey = "support_with"
    let productsInterestedFieldKey = "products_interested"
    
    if (supportWith || productsInterested) {
      supportWithFieldKey = await getOrCreateFieldKey("support_with", "What you want support with", "text")
      productsInterestedFieldKey = await getOrCreateFieldKey("products_interested", "Products you are interested in", "text")
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      try {
        // First, try to get existing groups
        const groupsResponse = await fetch(
          "https://connect.mailerlite.com/api/groups",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiToken}`,
              Accept: "application/json",
            },
          }
        )

        if (groupsResponse.ok) {
          const groupsData = await groupsResponse.json()
          const groups = groupsData.data || []

          // Find or create groups for each tag
          for (const tag of tags) {
            let group = groups.find(
              (g: { name: string }) =>
                g.name.toLowerCase() === tag.toLowerCase()
            )

            // If group doesn't exist, create it
            if (!group) {
              try {
                const createGroupResponse = await fetch(
                  "https://connect.mailerlite.com/api/groups",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${apiToken}`,
                      Accept: "application/json",
                    },
                    body: JSON.stringify({
                      name: tag,
                    }),
                  }
                )

                if (createGroupResponse.ok) {
                  const newGroup = await createGroupResponse.json()
                  group = newGroup.data
                }
              } catch (createError) {
                console.warn(`Could not create group "${tag}":`, createError)
              }
            }

            // Add group ID if we found or created the group
            if (group && group.id) {
              groupIds.push(group.id.toString())
            }
          }
        } else {
          const errorText = await groupsResponse.text()
          console.error("[MailerLite] Failed to fetch groups:", errorText)
        }
      } catch (groupError) {
        console.error("[MailerLite] Error fetching/creating groups:", groupError)
      }
    }

    // Prepare subscriber data for MailerLite API
    const subscriberData: {
      email: string
      name?: string
      status: "active" | "unsubscribed" | "bounced" | "junk"
      groups?: string[]
      fields?: Record<string, string>
    } = {
      email,
      status: "active",
    }

    // Add name and custom fields
    const fields: Record<string, string> = {}
    
    if (firstName) {
      subscriberData.name = firstName
      fields.name = firstName
    }
    
    if (lastName) {
      fields.last_name = lastName
    }
    
    if (phone) {
      fields.phone = phone
    }
    
    if (supportWith) {
      fields[supportWithFieldKey] = supportWith
    }
    
    if (productsInterested) {
      fields[productsInterestedFieldKey] = productsInterested
    }
    
    // Log fields for debugging
    console.log("Fields being sent:", fields)
    console.log("Support with field key:", supportWithFieldKey)
    console.log("Products interested field key:", productsInterestedFieldKey)
    
    if (Object.keys(fields).length > 0) {
      subscriberData.fields = fields
    }
    
    // Log full subscriber data for debugging
    console.log("Subscriber data being sent:", JSON.stringify(subscriberData, null, 2))

    // Add group IDs if we have them
    if (groupIds.length > 0) {
      subscriberData.groups = groupIds
    }

    // MailerLite API v2 endpoint
    const mailerliteUrl = "https://connect.mailerlite.com/api/subscribers"

    console.log("[MailerLite] Final subscriber payload:", JSON.stringify(subscriberData, null, 2))

    // Create or update the subscriber with groups (tags)
    const subscriberResponse = await fetch(mailerliteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
        Accept: "application/json",
      },
      body: JSON.stringify(subscriberData),
    })

    if (!subscriberResponse.ok) {
      const errorData = await subscriberResponse.text()
      console.error(`[MailerLite] Subscriber API error (${subscriberResponse.status}):`, errorData)
      return NextResponse.json(
        { error: "Failed to add subscriber to MailerLite", details: errorData },
        { status: subscriberResponse.status }
      )
    }

    const subscriber = await subscriberResponse.json()
    console.log("[MailerLite] Subscriber successfully added/updated:", subscriber.data?.id)

    return NextResponse.json(
      {
        success: true,
        message: "Subscriber added successfully",
        subscriber: {
          email: subscriber.data?.email || email,
          groups: groupIds.length > 0 ? groupIds : undefined,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("MailerLite API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
