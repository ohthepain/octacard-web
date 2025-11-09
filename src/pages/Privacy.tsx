import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p className="text-foreground">
                Octacard ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle your information when you use our macOS application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Collection</h2>
              <p className="text-foreground">
                Octacard is designed with privacy in mind. The application:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Does not collect any personal information</li>
                <li>Does not track your usage or behavior</li>
                <li>Does not send your sample files or data to any external servers</li>
                <li>Processes all audio conversions locally on your device</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Local Processing</h2>
              <p className="text-foreground">
                All audio file conversions are performed entirely on your local machine. Your sample files never leave your device and are not uploaded to any cloud services or external servers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">File Access</h2>
              <p className="text-foreground">
                Octacard requires access to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Read permissions for the audio files you choose to convert</li>
                <li>Write permissions to save converted files to your chosen location</li>
                <li>Access to your Octatrack when connected in USB Drive mode</li>
              </ul>
              <p className="text-foreground">
                These permissions are only used for the core functionality of the application and are requested through macOS's standard permission system.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="text-foreground">
                Octacard does not integrate with any third-party analytics, advertising, or tracking services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="text-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-foreground">
                If you have any questions about this privacy policy, please contact us at:
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

export default Privacy;
