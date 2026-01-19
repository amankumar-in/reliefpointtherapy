import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Info, ClipboardCheck, ShieldAlert, BookOpen, AlertCircle, RefreshCcw, Landmark, Mail, Phone, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Relief Point Therapy",
  description: "Terms of Service for Relief Point Therapy. Please read these terms carefully before using our website.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              <span>Relief Point Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Terms of <span className="text-blue-400">Service</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Please read these terms carefully to understand our shared expectations and responsibilities.
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
                Welcome to Relief Point Therapy. By accessing or using this website, you agree to the following Terms of Service. Please read them carefully.
              </p>
              <p className="font-bold text-slate-900 bg-slate-50 p-4 rounded-xl border-l-4 border-blue-500">
                If you do not agree with these terms, please do not use this website.
              </p>
            </div>

            <div className="grid gap-16 md:gap-24">
              
              {/* Section 1 & 2 */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Info className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">1. Website Purpose</h2>
                   <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <p>This website is provided for informational and educational purposes, describing our services and allowing users to request contact or resources.</p>
                      <p className="font-medium text-slate-900 underline decoration-blue-200">This website does not provide medical advice, diagnosis, or treatment.</p>
                   </div>
                </div>

                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <ShieldAlert className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">2. No Medical Advice</h2>
                   <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                      <p>Information here is not a substitute for professional medical care.</p>
                      <ul className="space-y-2">
                        <li>• Seek advice from qualified providers</li>
                        <li>• Do not disregard medical advice because of this site</li>
                      </ul>
                      <p className="text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">Submitting information does not establish a provider–patient relationship.</p>
                   </div>
                </div>
              </div>

              {/* Section 3 & 4 */}
              <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <ClipboardCheck className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">3. Use of Forms</h2>
                   <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <p>By submitting forms, you agree that provided info is accurate and submitted voluntarily.</p>
                      <p>You agree that we may contact you for the purposes requested (follow-up, education, eligibility review).</p>
                   </div>
                </div>

                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                      <BookOpen className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">4. Insurance Info</h2>
                   <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                      <p>Coverage information presented is general in nature and subject to eligibility and payer requirements.</p>
                      <p className="font-bold text-slate-900 italic">Submission does not guarantee coverage; final determination is made by the provider.</p>
                   </div>
                </div>
              </div>

              {/* Section 5 & 6 */}
              <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                      <ShieldAlert className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">5. Intellectual Property</h2>
                   <div className="text-slate-600 text-sm leading-relaxed">
                      <p>All content — text, images, logos, and videos — is property of Relief Point Therapy. Reproduction without consent is prohibited.</p>
                   </div>
                </div>

                <div className="space-y-6 group">
                   <div className="w-14 h-14 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FileText className="w-7 h-7" />
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900">6. Third-Party Content</h2>
                   <div className="text-slate-600 text-sm leading-relaxed">
                      <p>We are not responsible for the accuracy or practices of third-party websites linked from our site.</p>
                   </div>
                </div>
              </div>

              {/* Section 7, 8, 9 */}
              <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
                 <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                    <AlertCircle className="w-8 h-8 text-slate-400" />
                    <h3 className="font-bold text-slate-900">7. Liability</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">Relief Point Therapy shall not be liable for damages arising from use of this website. Use is at your own risk.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                    <RefreshCcw className="w-8 h-8 text-slate-400" />
                    <h3 className="font-bold text-slate-900">8. Changes</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">We reserve the right to modify content or services at any time. Changes are effective immediately.</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
                    <Landmark className="w-8 h-8 text-slate-400" />
                    <h3 className="font-bold text-slate-900">9. Governing Law</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">These terms are governed by the laws of our operating state, without regard to conflict-of-law principles.</p>
                 </div>
              </div>

              {/* Contact Information */}
              <div className="rounded-3xl bg-slate-900 p-10 md:p-14 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Questions?</h2>
                    <p className="text-slate-400 max-w-sm">
                      If you have questions about these Terms of Service, please reach out to our team.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email</p>
                        <a href="mailto:info@reliefpointtherapy.com" className="text-lg hover:text-blue-400 transition-colors">info@reliefpointtherapy.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Phone</p>
                        <a href="tel:9255153710" className="text-lg hover:text-teal-400 transition-colors">(925) 515-3710</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer link */}
      <div className="container mx-auto px-4 md:px-6 py-12 border-t border-slate-100 flex justify-center">
        <Link href="/" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
           Return to Home
        </Link>
      </div>
    </div>
  );
}
