import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Convert Samples for Your Octatrack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Octacard automatically converts your sample files to the perfect Octatrack format (44.1 kHz WAV, stereo 16-bit) and lets you drag them directly onto your device.
          </p>
          
          <div id="download" className="flex flex-col items-center space-y-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              <Download className="mr-2 h-5 w-5" />
              Download on the Mac App Store
            </Button>
            <p className="text-sm text-muted-foreground">
              macOS 12.0 or later required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
