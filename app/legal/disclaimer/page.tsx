import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-10 h-10 text-yellow-500" />
            <h1 className="text-4xl md:text-5xl font-bold">Risk Disclaimer</h1>
          </div>
          <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <p className="text-yellow-200 font-semibold">
              IMPORTANT: Trading involves substantial risk of loss and is not suitable for all investors. Please read
              this disclaimer carefully before using ChainFlow.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. General Risk Warning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trading cryptocurrencies, stocks, futures, and other financial instruments carries a high level of risk
                and may not be suitable for all investors. The high degree of leverage can work against you as well as
                for you. Before deciding to trade, you should carefully consider your investment objectives, level of
                experience, and risk appetite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Possibility of Loss</h2>
              <p className="text-muted-foreground leading-relaxed">
                There is a possibility that you could sustain a loss of some or all of your initial investment.
                Therefore, you should not invest money that you cannot afford to lose. You should be aware of all the
                risks associated with trading and seek advice from an independent financial advisor if you have any
                doubts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. No Guarantee of Profits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Past performance is not indicative of future results. No representation is being made that any account
                will or is likely to achieve profits or losses similar to those shown. ChainFlow does not guarantee
                profits or success in trading.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Blockchain and Technology Risks</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trading on blockchain networks involves additional risks:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Smart contract vulnerabilities and potential exploits</li>
                <li>Network congestion and transaction delays</li>
                <li>Irreversible transactions once confirmed on-chain</li>
                <li>Wallet security and private key management</li>
                <li>Regulatory uncertainty in blockchain and cryptocurrency markets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Market Volatility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Financial markets, especially cryptocurrency markets, can be extremely volatile. Prices can fluctuate
                significantly in short periods, potentially resulting in substantial gains or losses. You should be
                prepared for the possibility of rapid and significant price movements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Evaluation Challenges</h2>
              <p className="text-muted-foreground leading-relaxed">
                While ChainFlow offers zero-cost evaluation challenges, passing an evaluation does not guarantee
                long-term profitability or success. Funded accounts are subject to ongoing performance requirements and
                risk management rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. No Financial Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChainFlow does not provide investment, financial, legal, or tax advice. All content on our platform is
                for informational and educational purposes only. You should consult with qualified professionals before
                making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Regulatory Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cryptocurrency and derivatives trading regulations vary by jurisdiction. It is your responsibility to
                ensure compliance with all applicable laws and regulations in your country of residence. ChainFlow may
                not be available in all jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Platform Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for maximum uptime, ChainFlow cannot guarantee uninterrupted access to the platform.
                Technical issues, maintenance, or blockchain network problems may temporarily affect platform
                availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChainFlow may integrate with third-party services and blockchain networks. We are not responsible for
                the performance, security, or reliability of these external services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Educational Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any educational content, trading strategies, or market analysis provided by ChainFlow is for
                informational purposes only and should not be construed as a recommendation to buy or sell any financial
                instrument.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using ChainFlow, you acknowledge that you have read, understood, and accepted all risks associated
                with trading. You agree that ChainFlow, its affiliates, and team members are not liable for any losses
                you may incur.
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
