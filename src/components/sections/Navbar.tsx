import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <TrendingUp className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight">MomentoScope</span>
      </div>
      <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        <a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a>
        <a href="#scoring" className="transition-colors hover:text-foreground">Scoring Zones</a>
        <a href="#coverage" className="transition-colors hover:text-foreground">Coverage</a>
        <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
      </div>
      <Button size="sm" className="rounded-full px-5">Get Started</Button>
    </div>
  </nav>
);
