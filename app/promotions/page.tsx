import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Shield, Gift, CheckCircle2, AlertCircle } from "lucide-react"

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Active Competition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              ChainFlow's 1st Trading Competition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compete for $15,000 in prizes on the world's first fully transparent, on-chain prop trading platform.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChainFlow%20%281%29-7AgM8aNqdiP1zO9g4KyvgtMrS9afeW.png"
              alt="ChainFlow Trading Competition"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Prize Pool</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background">
                  <span className="text-muted-foreground">USDT Prizes</span>
                  <span className="text-xl font-bold text-primary">$5,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background">
                  <span className="text-muted-foreground">WETH Airdrops</span>
                  <span className="text-xl font-bold text-blue-500">$10,000</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <span className="font-semibold">Total Prize Pool</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                    $15,000
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Competition Details</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">30 Days</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background">
                  <span className="text-muted-foreground">Network</span>
                  <span className="font-semibold">OpenNet EVM</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background">
                  <span className="text-muted-foreground">Entry Fee</span>
                  <span className="font-semibold text-green-500">FREE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/10">
                  <Shield className="w-6 h-6 text-cyan-500" />
                </div>
                <h2 className="text-2xl font-bold">Competition Rules</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Eligibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to all ChainFlow users who have completed at least one evaluation challenge. Must be 18+ and
                      comply with local regulations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Trading Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      Minimum 20 trades during competition period. Must maintain daily drawdown limits (10%) and total
                      drawdown limits (20%). All trades must be executed on OpenNet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Ranking System</h3>
                    <p className="text-sm text-muted-foreground">
                      Participants ranked by total profit percentage. Ties broken by consistency score (lower volatility
                      wins). Risk-adjusted returns weighted at 60%, total profit at 40%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Prize Distribution</h3>
                    <p className="text-sm text-muted-foreground">
                      Top 10 traders share USDT prize pool: 1st (30%), 2nd (20%), 3rd (15%), 4th-10th (5% each). WETH
                      airdrops distributed to all participants who complete minimum requirements, weighted by
                      performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Transparency & Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      All trades publicly verifiable on OpenNet explorer. Real-time leaderboard updated every 15
                      minutes. Final results audited by smart contract before prize distribution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Prohibited Activities</h3>
                    <p className="text-sm text-muted-foreground">
                      No wash trading, account sharing, or manipulation. No use of exploits or bugs. Violations result
                      in immediate disqualification and potential account suspension.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Payout Timeline</h3>
                    <p className="text-sm text-muted-foreground">
                      Winners announced within 48 hours of competition end. USDT prizes distributed within 7 business
                      days. WETH airdrops distributed within 14 days to eligible wallets on Paxeer mainnet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-amber-500">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    ChainFlow reserves the right to modify competition rules, disqualify participants for violations,
                    and make final decisions on disputes. By participating, you agree to these terms and our standard
                    Terms of Service. Trading involves risk - only trade with capital you can afford to lose.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                <Trophy className="w-5 h-5 mr-2" />
                Enter Competition Now
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              View live leaderboard on{" "}
              <Link
                href="https://opennet.paxeer.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OpenNet Explorer
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
