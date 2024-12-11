import { MemberCard } from "@/components/MemberCard";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { AboutSection } from "@/components/sections/About";
import { FAQSection } from "@/components/sections/FAQS";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/Hero";
import { TeamsSection } from "@/components/sections/TeamsSection";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      
      <HeroSection />
      <AboutSection/>
      <TeamsSection/>
     <FAQSection/>
   

      <ScrollToTopButton/>
    </div>
  );
}
