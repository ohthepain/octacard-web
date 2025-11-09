import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container max-w-4xl py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
              <p className="text-foreground">
                By downloading, installing, or using Octacard, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">License</h2>
              <p className="text-foreground">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use Octacard for your personal or commercial use on macOS devices.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Use of the Application</h2>
              <p className="text-foreground">
                You agree to use Octacard only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Use the application in any way that violates any applicable law or regulation</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the application</li>
                <li>Remove, alter, or obscure any proprietary notices on the application</li>
                <li>Use the application to process files you do not have the legal right to use</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-foreground">
                Octacard and all related materials are protected by copyright, trademark, and other intellectual property laws. You acknowledge that all ownership rights in the application remain with us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p className="text-foreground">
                THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APPLICATION WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Backup</h2>
              <p className="text-foreground">
                You are solely responsible for backing up your sample files and data. We recommend maintaining backups of all important files before using conversion software.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Octatrack Compatibility</h2>
              <p className="text-foreground">
                While Octacard is designed to produce audio files compatible with the Elektron Octatrack, we do not guarantee compatibility with all Octatrack models or firmware versions. Octacard is not affiliated with, endorsed by, or sponsored by Elektron.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Updates and Modifications</h2>
              <p className="text-foreground">
                We reserve the right to modify, suspend, or discontinue the application at any time without notice. We may also update these Terms from time to time, and your continued use of the application constitutes acceptance of any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="text-foreground">
                We may terminate or suspend your access to the application immediately, without prior notice, for any reason, including if you breach these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p className="text-foreground">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p className="text-foreground">
                If you have any questions about these Terms, please contact us at:
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

export default Terms;
