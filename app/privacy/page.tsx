import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Relief Point Therapy",
  description: "Relief Point Therapy Privacy Policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-10 italic">Last updated: January 2026</p>
          
          <div className="prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-hr:my-12 prose-hr:border-slate-100">
            <p>
              Relief Point Therapy (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or interact with our services.
            </p>
            <p>
              By using this website, you agree to the practices described in this policy.
            </p>

            <hr />

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            
            <h3>Personal Information You Provide Voluntarily</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Information submitted through contact forms, benefit verification forms, provider referral forms, or lead magnet downloads</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on the site</li>
            </ul>
            <p>This data helps us understand how visitors use our website and improve performance and usability.</p>

            <hr />

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to inquiries and contact requests</li>
              <li>Verify insurance benefits when requested</li>
              <li>Deliver educational materials and resources</li>
              <li>Communicate about services, updates, or relevant information</li>
              <li>Improve website functionality and user experience</li>
            </ul>
            <p>We do not sell or rent your personal information.</p>

            <hr />

            <h2>3. Healthcare & HIPAA Considerations</h2>
            <p>Relief Point Therapy is a nurse-led healthcare service.</p>
            <p>
              Any health-related information you voluntarily submit is treated with confidentiality and used only for care coordination, eligibility verification, or communication purposes.
            </p>
            <p>Please note:</p>
            <ul>
              <li>This website itself is not intended to replace a clinical consultation.</li>
              <li>Submitting information through the website does not establish a provider-patient relationship.</li>
            </ul>

            <hr />

            <h2>4. Email Communications</h2>
            <p>If you provide your email address:</p>
            <ul>
              <li>You may receive educational emails or resources you requested</li>
              <li>You may receive occasional updates related to our services</li>
            </ul>
            <p>You can unsubscribe at any time using the link provided in our emails.</p>
            <p>Email communications are managed through trusted third-party platforms such as MailerLite.</p>

            <hr />

            <h2>5. Third-Party Services</h2>
            <p>We may use third-party tools and services to operate our website and communications, including:</p>
            <ul>
              <li>Email marketing platforms</li>
              <li>Analytics tools</li>
              <li>Hosting and infrastructure providers</li>
            </ul>
            <p>These services only receive the information necessary to perform their functions and are required to protect your data.</p>

            <hr />

            <h2>6. Cookies & Analytics</h2>
            <p>Our website may use cookies or similar technologies to:</p>
            <ul>
              <li>Improve site performance</li>
              <li>Analyze visitor behavior</li>
              <li>Enhance user experience</li>
            </ul>
            <p>You can disable cookies through your browser settings if you prefer.</p>

            <hr />

            <h2>7. Data Security</h2>
            <p>
              We take reasonable administrative and technical measures to protect your information from unauthorized access, disclosure, or misuse. However, no internet transmission is 100% secure.
            </p>

            <hr />

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of email communications</li>
            </ul>
            <p>To make a request, please contact us using the information below.</p>

            <hr />

            <h2>9. External Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites.
            </p>

            <hr />

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
            </p>

            <hr />

            <h2>11. Contact Information</h2>
            <p>If you have questions about this Privacy Policy or how your information is handled, please contact:</p>
            <p>
              <strong>Relief Point Therapy</strong><br />
              Email: info@reliefpointtherapy.com<br />
              Phone: (925) 515-3710
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
