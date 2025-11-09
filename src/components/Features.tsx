import { Card } from "@/components/ui/card";
import { Music, Usb, FileAudio } from "lucide-react";

const features = [
  {
    icon: FileAudio,
    title: "Automatic Conversion",
    description: "Converts any sample file to 44.1 kHz WAV, stereo 16-bit format - exactly what your Octatrack needs."
  },
  {
    icon: Music,
    title: "Drag & Drop",
    description: "Simple drag and drop interface. Just drop your converted samples directly onto your Octatrack."
  },
  {
    icon: Usb,
    title: "USB Drive Mode",
    description: "Works seamlessly when your Octatrack is in USB Drive mode. No complicated setup required."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple. Fast. Reliable.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get your samples ready for the Octatrack
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 space-y-4 bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
