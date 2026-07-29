import EmailLeadForm from "@/components/EmailLeadForm";

export const metadata = {
  title: "Free Pain Rehabilitation Guides — PT Sakkinen",
  description: "Download evidence-based TMJ relief, jaw clenching, and cervicogenic dizziness PDF guides created by OMT physical therapist Janne Sakkinen.",
};

export default function FreeGuidePage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <EmailLeadForm />
    </div>
  );
}
