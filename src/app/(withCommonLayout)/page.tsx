import Banner from "@/src/components/UI/HomePage/Banner/Banner";
import DoctorsSection from "@/src/components/UI/HomePage/DoctorsSection/DoctorsSection";
import EmergencyServices from "@/src/components/UI/HomePage/EmergencyServices/EmergencyServices";
import FeaturesSection from "@/src/components/UI/HomePage/FeaturesSection/FeaturesSection";
import HospitalsSection from "@/src/components/UI/HomePage/HospitalsSection/HospitalsSection";
import ServicesSection from "@/src/components/UI/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ServicesSection />
      <DoctorsSection />
      <FeaturesSection />
      <EmergencyServices />
      <HospitalsSection />
    </>
  );
}
