import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight, Trophy, Gift, Users } from "lucide-react"

export function PromotionsSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Competition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            ChainFlow's First Trading Competition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our inaugural trading competition and compete for massive prizes. Show your trading skills on the
            transparent network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChainFlow%20%281%29-7AgM8aNqdiP1zO9g4KyvgtMrS9afeW.png"
              alt="ChainFlow Trading Competition - $5,000 USDT and $10,000 WETH in prizes"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="p-3 rounded-lg bg-primary/10">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">$5,000 USDT Prize Pool</h3>
                <p className="text-sm text-muted-foreground">
                  Top traders will share $5,000 in USDT rewards based on performance and consistency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Trophy className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">$10,000 WETH Airdrops</h3>
                <p className="text-sm text-muted-foreground">
                  All qualified participants will be eligible for WETH airdrops distributed throughout the competition.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Fully Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  All trades are recorded on-chain on OpenNet. View the public leaderboard and verify every trade.
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button size="lg" className="flex-1" asChild>
                <Link href="/promotions">
                  View Full Rules
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                  Enter Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
