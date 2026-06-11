import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AssessmentCategories from "@/components/AssessmentCategories";
import WhyElevate from "@/components/WhyElevate";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AssessmentCategories />
        <WhyElevate />
        <Statistics />
      </main>
      <Footer />
    </>
  );
}
