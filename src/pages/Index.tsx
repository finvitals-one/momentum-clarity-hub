import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { CoversSection } from "@/components/sections/CoversSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <WhatIsSection />
    <CoversSection />
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
