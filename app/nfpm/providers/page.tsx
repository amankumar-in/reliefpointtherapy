import type { Metadata } from "next";
import { ProvidersHero } from "@/components/nfpm-providers/providers-hero";
import { PartnerRelationships } from "@/components/nfpm-providers/partner-relationships";
import { ClinicalOverview } from "@/components/nfpm-providers/clinical-overview";
import { TechnologyDistinction } from "@/components/nfpm-providers/technology-distinction";
import { ClinicalEvidence } from "@/components/nfpm-providers/clinical-evidence";
import { ProviderResource } from "@/components/nfpm-providers/provider-resource";
import { ReferralWorkflow } from "@/components/nfpm-providers/referral-workflow";
import { InsuranceInfo } from "@/components/nfpm-providers/insurance-info";
import { ProvidersContact } from "@/components/nfpm-providers/providers-contact";

export const metadata: Metadata = {
  title: "Partner with Relief Point Therapy | NFPM Provider Resources",
  description: "Clinical resource for healthcare providers. Learn about Neurofunctional Pain Management (NFPM), patient eligibility, and how to refer patients for in-home chronic pain treatment.",
  keywords: [
    "NFPM provider resources",
    "neurofunctional pain management",
    "physician referrals",
    "chronic pain partnership",
    "electroanalgesia therapy",
    "Relief Point Therapy providers",
    "pain management referral",
  ],
  openGraph: {
    title: "Partner with Relief Point Therapy | NFPM Provider Resources",
    description: "Clinical resource for healthcare providers. Learn about Neurofunctional Pain Management (NFPM) and how to refer patients.",
    url: "/nfpm/providers",
    images: ["/assets/images/rpt-logo.png"],
  },
};

export default function ProvidersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProvidersHero />
      <PartnerRelationships />
      <ClinicalOverview />
      <TechnologyDistinction />
      <ClinicalEvidence />
      <ProviderResource />
      <ReferralWorkflow />
      <InsuranceInfo />
      <ProvidersContact />
    </div>
  );
}
