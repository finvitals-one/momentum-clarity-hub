import fullLogo from "@/assets/momentoscope-full-logo.png";
import { ExternalLink } from "lucide-react";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <div className="flex flex-col items-start">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-0.5">MomentoScope</span>
        <img src={fullLogo} alt="MomentoScope" className="h-10 sm:h-12" />
      </div>
      <div className="flex items-center text-sm font-bold text-foreground">
        <span className="hidden sm:inline">Available exclusively on</span>
        <a
          href="https://www.quantfy.in"
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
