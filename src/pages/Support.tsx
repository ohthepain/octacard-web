import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Support</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Get Help</h2>
              <p className="text-foreground">
                Need help with Octacard? We're here to assist you. The best way to get support is through our GitHub Issues page where you can report bugs, request features, or ask questions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Report Issues</h2>
              <p className="text-foreground">
                If you've encountered a bug or have a feature request, please visit our GitHub Issues page:
              </p>
              <div className="pt-4">
                <Button asChild>
                  <a 
                    href="https://github.com/ohthepain/octacard/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Issues on GitHub
                  </a>
                </Button>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-foreground">
                For other inquiries, you can reach us at:
              </p>
              <p className="text-foreground">
                Email: <a href="mailto:support@dserv.io" className="text-primary hover:underline">support@dserv.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;

