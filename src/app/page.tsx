import {
  CyberServicesSection,
  DevelopResourcesSection,
  FinalQATestingSection,
  PricingPlanSection,
  SocialProofSection,
  TeamSection,
  TestimonialsSection,
} from "@/features/landing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <CyberServicesSection />
        <DevelopResourcesSection />
        <FinalQATestingSection />
        <PricingPlanSection />
        <SocialProofSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
