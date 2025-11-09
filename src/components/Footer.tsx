import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Octacard</h3>
            <p className="text-sm text-muted-foreground">
              Convert samples to Octatrack format with ease.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://support.octacard.live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@dserv.io"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@dserv.io
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ohthepain/octacard/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#download"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ohthepain/octacard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Octacard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
