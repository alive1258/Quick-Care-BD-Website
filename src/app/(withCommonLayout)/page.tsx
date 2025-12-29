import Banner from "@/src/components/UI/HomePage/Banner/Banner";
import DoctorsSection from "@/src/components/UI/HomePage/DoctorsSection/DoctorsSection";
import FeaturesSection from "@/src/components/UI/HomePage/FeaturesSection/FeaturesSection";
import ServicesSection from "@/src/components/UI/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ServicesSection />
      <DoctorsSection />
      <FeaturesSection />
    </>
  );
}
