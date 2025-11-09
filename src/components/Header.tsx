import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-foreground">Octacard</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <a 
            href="https://support.octacard.live" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Support
          </a>
          <a 
            href="https://github.com/ohthepain/octacard/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Report Issue
          </a>
          <Button asChild>
            <a href="#download">Download</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
