import fullLogo from "@/assets/momentoscope-full-logo.png";
import { ExternalLink } from "lucide-react";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img src={fullLogo} alt="MomentoScope" className="h-12 sm:h-14" />
      </div>
      <div className="flex items-center text-sm font-bold text-foreground">
        <span className="hidden sm:inline">Available exclusively on</span>
        <a
          href="https://quantfy.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-1 font-extrabold text-primary transition-colors hover:text-primary/80"
        >
          QuanTfy <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <span className="ml-1 hidden md:inline">— A web app for stock analysis at ease !</span>
      </div>
    </div>
  </nav>
);
