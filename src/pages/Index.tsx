import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ScoringZones } from "@/components/sections/ScoringZones";
import { CoversSection } from "@/components/sections/CoversSection";
import { HowToUse } from "@/components/sections/HowToUse";
import { Principles } from "@/components/sections/Principles";
import { WhoIsFor } from "@/components/sections/WhoIsFor";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <WhatIsSection />
    <ScoringZones />
    <CoversSection />
    <HowToUse />
    <Principles />
    <WhoIsFor />
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
