import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Relief Point Therapy",
  description: "Terms of Service for Relief Point Therapy. Please read these terms carefully before using our website.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 mb-10 italic">Last updated: January 2026</p>
          
          <div className="prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-hr:my-12 prose-hr:border-slate-100">
            <p>
              Welcome to Relief Point Therapy. By accessing or using this website, you agree to the following Terms of Service. Please read them carefully.
            </p>
            <p>
              If you do not agree with these terms, please do not use this website.
            </p>

            <hr />

            <h2>1. Website Purpose</h2>
            <p>This website is provided for:</p>
            <ul>
              <li>General informational and educational purposes</li>
              <li>Describing services offered by Relief Point Therapy</li>
              <li>Allowing users to request contact, insurance verification, or educational resources</li>
            </ul>
            <p>This website does not provide medical advice, diagnosis, or treatment.</p>

            <hr />

            <h2>2. No Medical Advice</h2>
            <p>Information on this website is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <ul>
              <li>Always seek the advice of a qualified healthcare provider regarding any medical condition.</li>
              <li>Do not disregard medical advice or delay seeking care because of information found on this website.</li>
            </ul>
            <p>Submitting information through this website does not establish a provider–patient relationship.</p>

            <hr />

            <h2>3. Use of Forms & Submissions</h2>
            <p>When you submit information through forms on this website, you agree that:</p>
            <ul>
              <li>Information provided is accurate to the best of your knowledge</li>
              <li>You are submitting information voluntarily</li>
              <li>Relief Point Therapy may contact you using the information provided for the purpose requested (e.g., follow-up, education, eligibility review)</li>
            </ul>

            <hr />

            <h2>4. Insurance & Coverage Information</h2>
            <p>Insurance coverage information presented on this website is general in nature.</p>
            <ul>
              <li>Coverage is subject to eligibility, verification, and payer requirements</li>
              <li>Submission of an insurance verification request does not guarantee coverage or approval</li>
              <li>Final determination is made by the insurance provider</li>
            </ul>

            <hr />

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, graphics, logos, videos, and downloadable materials — is the property of Relief Point Therapy or its partners unless otherwise stated.
            </p>
            <p>You may not reproduce, distribute, or modify any content without prior written consent.</p>

            <hr />

            <h2>6. Third-Party Content & Links</h2>
            <p>This website may include:</p>
            <ul>
              <li>Third-party educational materials</li>
              <li>External links to partner or informational websites</li>
            </ul>
            <p>Relief Point Therapy is not responsible for the content, accuracy, or privacy practices of third-party websites.</p>

            <hr />

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Relief Point Therapy shall not be liable for:</p>
            <ul>
              <li>Any direct or indirect damages arising from use of this website</li>
              <li>Reliance on information presented on the site</li>
              <li>Inability to access or use the website</li>
            </ul>
            <p>Use of this website is at your own risk.</p>

            <hr />

            <h2>8. Changes to Services or Content</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify or update website content at any time</li>
              <li>Add or remove services without prior notice</li>
              <li>Update these Terms of Service as needed</li>
            </ul>
            <p>Changes will be effective immediately upon posting.</p>

            <hr />

            <h2>9. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the state in which Relief Point Therapy operates, without regard to conflict-of-law principles.
            </p>

            <hr />

            <h2>10. Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact:</p>
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
