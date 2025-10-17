import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Sparkles, Users, Shield, TrendingUp, Zap } from "lucide-react"

export default function ChangelogPage() {
  const updates = [
    {
      version: "2.0.0",
      date: "January 2025",
      title: "Social Trading Platform Launch",
      icon: Sparkles,
      changes: [
        {
          category: "Community Features",
          icon: Users,
          items: [
            "Public chatrooms for real-time trader discussions",
            "End-to-end encrypted private direct messaging",
            "Public trader profiles with follow functionality",
            "Performance stats and trading history on profiles",
            "Content posting and social feed for traders",
          ],
        },
        {
          category: "Trading Signals",
          icon: TrendingUp,
          items: [
            "Public and paid trading signal chatrooms",
            "Signal performance tracking and verification",
            "Subscription-based premium signal channels",
          ],
        },
        {
          category: "Marketplace",
          icon: Zap,
          items: [
            "P2P OTC market for large trades without market impact",
            "Trading education content marketplace",
            "Buy and sell trading strategies and signals",
            "Creator monetization tools",
          ],
        },
      ],
    },
    {
      version: "1.5.0",
      date: "December 2024",
      title: "Enhanced Trading Infrastructure",
      icon: Shield,
      changes: [
        {
          category: "Platform Improvements",
          icon: Zap,
          items: [
            "Live market data streaming via WebSocket",
            "Real-time price updates for 500+ instruments",
            "Improved mobile responsiveness across all pages",
            "Enhanced navigation with organized dropdown menus",
          ],
        },
      ],
    },
    {
      version: "1.0.0",
      date: "October 2024",
      title: "ChainFlow Platform Launch",
      icon: Sparkles,
      changes: [
        {
          category: "Core Features",
          icon: Shield,
          items: [
            "First fully on-chain prop firm launched",
            "Zero-cost evaluation challenges (10K, 25K, 50K, 100K)",
            "OpenNet EVM testnet for evaluations",
            "Paxeer mainnet for funded traders",
            "Public ledger for all trades",
            "80/20 profit split model",
            "Instant on-chain payouts",
            "Bloomberg-inspired trading terminal",
          ],
        },
        {
          category: "Instruments",
          icon: TrendingUp,
          items: [
            "500+ tradable instruments",
            "Cryptocurrencies, stocks, futures, and indices",
            "Real-time pricing and market data",
            "Public on-chain settlement",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Product Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Changelog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track all updates, new features, and improvements to the ChainFlow platform
            </p>
          </div>

          <div className="space-y-12">
            {updates.map((update, updateIndex) => {
              const UpdateIcon = update.icon
              return (
                <div key={updateIndex} className="relative">
                  {/* Timeline line */}
                  {updateIndex !== updates.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border" />
                  )}

                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10">
                      <UpdateIcon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                          v{update.version}
                        </span>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-6">{update.title}</h2>

                      <div className="space-y-6">
                        {update.changes.map((change, changeIndex) => {
                          const CategoryIcon = change.icon
                          return (
                            <div key={changeIndex} className="p-6 rounded-xl border border-border bg-card">
                              <div className="flex items-center gap-2 mb-4">
                                <CategoryIcon className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-semibold">{change.category}</h3>
                              </div>
                              <ul className="space-y-2">
                                {change.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2">
                                    <span className="text-primary mt-1.5">•</span>
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 p-8 rounded-xl border border-border bg-card text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Follow our progress and be the first to know about new features
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://dashboard.paxeer.app/en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
