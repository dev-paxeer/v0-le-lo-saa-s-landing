import { ArrowRight, Eye, Trophy, Terminal, DollarSign, Zap, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Eye,
      title: "Public Trading Settlement",
      description:
        "Every trade is settled on-chain with complete transparency. View all trading activity on our public ledgers - OpenNet for evaluations and Paxscan for funded accounts. No hidden trades, no manipulation.",
      link: "https://opennet.paxeer.app",
      linkText: "View OpenNet Explorer",
    },
    {
      icon: Trophy,
      title: "Public Leaderboards & Liquidity Pools",
      description:
        "Community-driven trading pools on both networks. The community can provide liquidity to trader-specific pools, allowing top traders to manage more capital and earn higher profits while liquidity providers earn from trader performance.",
      highlight: "Earn together",
    },
    {
      icon: Terminal,
      title: "Professional Trading Terminal",
      description:
        "Custom-built trading terminal modeled after Bloomberg Terminal. Access institutional-grade tools, advanced charting, real-time data feeds, and lightning-fast execution - all designed for serious traders who demand the best.",
      highlight: "Bloomberg-inspired",
    },
    {
      icon: DollarSign,
      title: "Zero Cost Evaluations",
      description:
        "Start your trading journey with absolutely no upfront costs. All evaluation challenges are completely free, and funded traders enjoy an industry-leading 80/20 profit split in their favor.",
      highlight: "80/20 split",
    },
    {
      icon: Zap,
      title: "Instant On-Chain Payouts",
      description:
        "Get paid instantly when you request a withdrawal. All payouts are processed on-chain to Paxeer or any EVM-compatible chain of your choice. No waiting periods, no payment processors, just pure blockchain efficiency.",
      highlight: "Instant settlement",
    },
    {
      icon: Network,
      title: "Dual Network Architecture",
      description:
        "OpenNet handles all evaluation accounts with full transparency, while Paxeer mainnet powers funded trader accounts. Both networks provide public ledgers, ensuring complete accountability at every stage.",
      link: "https://paxscan.paxeer.app",
      linkText: "View Paxscan Explorer",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Built for Traders, By Traders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ChainFlow combines cutting-edge blockchain technology with professional trading tools to create the most
              transparent and trader-friendly prop firm in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {feature.highlight && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                        {feature.highlight}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                    {feature.link && (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group/link"
                      >
                        {feature.linkText}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Trade with Full Transparency?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join ChainFlow and experience prop trading the way it should be - fair, transparent, and built for your
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                Start Free Evaluation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl bg-transparent" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
