import { ArrowRight, Shield, Users, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Built by Traders, for Traders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ChainFlow was created by professional traders who witnessed the sketchy, self-serving prop firm industry
              and decided to build something better—a fair, transparent firm that actually helps traders succeed.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The prop firm industry has long been plagued by hidden fees, opaque practices, and firms that profit
                  from trader failures. We saw this firsthand and knew there had to be a better way.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ChainFlow is the first fully on-chain prop firm, leveraging blockchain technology to create complete
                  transparency, eliminate evaluation costs, and ensure every trade is publicly verifiable. We're not
                  just another prop firm—we're reimagining what prop trading should be.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">100% Transparent</h3>
                  <p className="text-sm text-muted-foreground">Every trade on public ledgers</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Zero Cost Evals</h3>
                  <p className="text-sm text-muted-foreground">No upfront fees ever</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Trader First</h3>
                  <p className="text-sm text-muted-foreground">Built by traders who get it</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Fair Profit Splits</h3>
                  <p className="text-sm text-muted-foreground">Up to 90% to traders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Built on Paxeer Technology</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                ChainFlow is powered by the Paxeer Network, a revolutionary blockchain infrastructure designed to create
                a fairer, more accessible, and more efficient global economy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">OpenNet</h3>
                <p className="text-muted-foreground mb-4">
                  Our custom EVM-compatible chain for evaluation accounts. Every evaluation trade is recorded on
                  OpenNet, providing complete transparency during your challenge phase.
                </p>
                <a
                  href="https://opennet.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View OpenNet Explorer <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Paxeer Mainnet</h3>
                <p className="text-muted-foreground mb-4">
                  The live mainnet for fully funded traders. Once you pass your evaluation, your live trading happens on
                  Paxeer's production network with full blockchain verification.
                </p>
                <a
                  href="https://paxscan.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Paxscan Explorer <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-lg font-semibold text-primary">Q4 2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-1.5" />
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Conception</h3>
                  <p className="text-muted-foreground">
                    The Paxeer concept is born out of the need for a high-performance, low-cost derivatives platform.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-lg font-semibold text-primary">Q1 2025</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-1.5" />
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Testnet Launch</h3>
                  <p className="text-muted-foreground">
                    The first public testnet goes live, showcasing the core technology stack and Paxeer VM.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-lg font-semibold text-primary">Q3 2025</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-1.5" />
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Mainnet Launch</h3>
                  <p className="text-muted-foreground">
                    The Paxeer Network mainnet is launched, opening the gates for unrestricted decentralized trading.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-lg font-semibold text-primary">Q4 2025</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-1.5" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">DAO Formation</h3>
                  <p className="text-muted-foreground">
                    The Paxeer DAO is established, handing over governance of the protocol to the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Paxeer Foundation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Paxeer Foundation is an independent, non-profit organization dedicated to fostering the growth and
              decentralization of the Paxeer Network. The Foundation supports the ecosystem by issuing grants, funding
              public goods, and spearheading research and development efforts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This commitment to decentralization and community governance ensures that ChainFlow remains transparent,
              fair, and aligned with trader interests—not corporate profits.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Trade with Transparency?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the first fully on-chain prop firm and experience trading the way it should be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                  Start Free Evaluation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
