import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, Lock, Eye, Bell, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Relief Point Therapy",
  description: "Relief Point Therapy Privacy Policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-bold uppercase tracking-wider mb-6">
              <Shield className="w-4 h-4" />
              <span>Relief Point Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Privacy <span className="text-teal-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              We are committed to protecting your privacy and being transparent about how we handle your data.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
               <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  Last updated: January 2026
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <div className="prose prose-slate prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-slate-600">
                Relief Point Therapy (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or interact with our services.
              </p>
              <p className="text-slate-600">
                By using this website, you agree to the practices described in this policy.
              </p>
            </div>

            <div className="space-y-20">
              
              {/* Section 1 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
                </div>
                <div className="pl-16 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Personal Information You Provide Voluntarily</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Full Name",
                        "Email address",
                        "Phone number",
                        "Form Submissions (Contact, Benefit, Provider)",
                        "Lead Magnet downloads"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Automatically Collected Information</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• IP address and browser type</li>
                      <li>• Device information and operating system</li>
                      <li>• Pages visited and time spent on the site</li>
                    </ul>
                    <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                      This data helps us understand how visitors use our website and improve performance and usability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
                </div>
                <div className="pl-16">
                  <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                    <ul className="space-y-4">
                      {[
                        "Respond to inquiries and contact requests",
                        "Verify insurance benefits when requested",
                        "Deliver educational materials and resources",
                        "Communicate about services, updates, or relevant information",
                        "Improve website functionality and user experience"
                      ].map((use) => (
                        <li key={use} className="flex items-start gap-3 text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-[10px] font-bold text-blue-600">✓</span>
                          </div>
                          {use}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 pt-6 border-t border-slate-200 text-slate-900 font-bold italic">
                      We do not sell or rent your personal information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">3. Healthcare & HIPAA Considerations</h2>
                </div>
                <div className="pl-16 space-y-4 text-slate-600 leading-relaxed">
                  <p>Relief Point Therapy is a nurse-led healthcare service.</p>
                  <p>
                    Any health-related information you voluntarily submit is treated with confidentiality and used only for care coordination, eligibility verification, or communication purposes.
                  </p>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-900 text-sm">
                    <strong>Please note:</strong> This website itself is not intended to replace a clinical consultation. Submitting information through the website does not establish a provider-patient relationship.
                  </div>
                </div>
              </div>

              {/* Section 4 & 5 */}
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">4. Email Communications</h2>
                  </div>
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <p>You may receive educational emails or resources you requested and occasional updates related to our services.</p>
                    <p className="font-medium text-slate-900">You can unsubscribe at any time using the link provided in our emails.</p>
                    <p>Email communications are managed through trusted third-party platforms such as MailerLite.</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">5. Third-Party Services</h2>
                  </div>
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    <p>We use third-party tools for email marketing, analytics, and hosting.</p>
                    <p>These services only receive information necessary to perform their functions and are required to protect your data.</p>
                  </div>
                </div>
              </div>

              {/* Section 6 & 7 */}
               <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">6. Cookies & Analytics</h2>
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    <p>Our website may use cookies to improve site performance, analyze visitor behavior, and enhance user experience. You can disable cookies through your browser settings if you prefer.</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">7. Data Security</h2>
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    <p>We take reasonable administrative and technical measures to protect your information. However, no internet transmission is 100% secure.</p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">8. Your Rights</h2>
                </div>
                <div className="pl-16">
                   <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { title: "Access", desc: "Request access to your personal information" },
                        { title: "Correction", desc: "Request correction or deletion of your information" },
                        { title: "Opt-out", desc: "Opt out of email communications at any time" }
                      ].map((right) => (
                        <div key={right.title} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{right.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{right.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="rounded-3xl bg-slate-900 p-10 md:p-14 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Contact Information</h2>
                    <p className="text-slate-400 max-w-sm">
                      If you have questions about this Privacy Policy or how your information is handled, please reach out.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email</p>
                        <a href="mailto:info@reliefpointtherapy.com" className="text-lg hover:text-teal-400 transition-colors">info@reliefpointtherapy.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                         {/* Replacing Phone if I had it, but using placeholder or similar */}
                         <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Phone</p>
                        <a href="tel:9255153710" className="text-lg hover:text-blue-400 transition-colors">(925) 515-3710</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb/Back link */}
      <div className="container mx-auto px-4 md:px-6 py-12 border-t border-slate-100 flex justify-center">
        <Link href="/" className="text-sm font-bold text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2">
           Return to Home
        </Link>
      </div>
    </div>
  );
}
