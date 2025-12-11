import HeroSection from "../components/HomeComponents/HeroSection";
import PrayerTimesSection from "../components/HomeComponents/PrayerTimesSection";
import AboutAndGallerySection from "../components/HomeComponents/AboutAndGallerySection";
import HistorySection from "../components/HomeComponents/HistorySection";
import ProgramsSection from "../components/HomeComponents/ProgramsSection";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f5efe4",
        minHeight: "calc(100vh - 96px)",
      }}
    >
      <HeroSection />
      <PrayerTimesSection />
      <AboutAndGallerySection />
      <HistorySection />
      <ProgramsSection />
    </main>
  );
}