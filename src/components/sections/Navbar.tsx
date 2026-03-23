import momentoIcon from "@/assets/momentoscope-icon.png";
import { ExternalLink } from "lucide-react";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <img src={momentoIcon} alt="MomentoScope" className="h-10 w-10" />
        <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Revue Std', serif" }}>
          MomentoScope
        </span>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <span className="hidden sm:inline">Available exclusively on</span>
        <a
          href="https://www.quantfy.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary/80"
        >
          QuanTfy <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <span className="ml-1 hidden md:inline text-muted-foreground">— A web app for stock analysis at ease</span>
      </div>
    </div>
  </nav>
);
