import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { CoversSection } from "@/components/sections/CoversSection";
import { Principles } from "@/components/sections/Principles";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <WhatIsSection />
    <CoversSection />
    <Principles />
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
