import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using ChainFlow's platform, you agree to be bound by these Terms of Service. If you do
                not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">To use ChainFlow, you must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be located in a jurisdiction where trading is prohibited</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Evaluation Challenges</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ChainFlow offers zero-cost evaluation challenges on the OpenNet blockchain. By participating, you agree
                to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Follow all trading rules and guidelines for your chosen challenge size</li>
                <li>Accept that all trades are recorded on the public blockchain</li>
                <li>Understand that evaluation results are final and binding</li>
                <li>Not engage in prohibited trading practices including but not limited to account manipulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Funded Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon successful completion of an evaluation, you may be granted access to a funded account on the Paxeer
                mainnet. Funded account terms include profit splits as specified in your challenge tier and adherence to
                ongoing trading rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Blockchain Transparency</h2>
              <p className="text-muted-foreground leading-relaxed">
                All trades on ChainFlow are recorded on public blockchains (OpenNet for evaluations, Paxeer for funded
                accounts). By using our platform, you acknowledge and accept that your trading activity will be publicly
                visible on blockchain explorers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use automated trading systems without prior approval</li>
                <li>Engage in market manipulation or fraudulent trading practices</li>
                <li>Share or sell your account access</li>
                <li>Attempt to exploit platform vulnerabilities</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violation of these terms or
                for any other reason at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChainFlow is not liable for any losses incurred through the use of our platform. Trading involves
                substantial risk, and you should only trade with capital you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these terms at any time. Continued use of the platform after changes constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us through our support channels.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
