import { LeLoLogo } from "@/components/lelo-logo"
import Link from "next/link"
import { TrendingDown, Zap, Shield, Award, Coins } from "lucide-react"

export default function TradingFeesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors">
          <LeLoLogo className="h-6" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trading Fees & Limits
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Transparent and competitive fee structure with volume-based discounts. The more you trade, the less you
              pay.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <TrendingDown className="h-8 w-8 text-blue-400" />
              Spot Trading Fees
            </h2>
            <p className="text-white/70 mb-6">Fees based on your 30-day trading volume (USD equivalent)</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="text-left p-4 font-semibold">Tier</th>
                    <th className="text-left p-4 font-semibold">30-Day Volume</th>
                    <th className="text-left p-4 font-semibold">Maker Fee</th>
                    <th className="text-left p-4 font-semibold">Taker Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "VIP 0", volume: "< $50,000", maker: "0.075%", taker: "0.075%" },
                    { tier: "VIP 1", volume: "≥ $50,000", maker: "0.065%", taker: "0.075%" },
                    { tier: "VIP 2", volume: "≥ $200,000", maker: "0.055%", taker: "0.065%" },
                    { tier: "VIP 3", volume: "≥ $500,000", maker: "0.045%", taker: "0.055%" },
                    { tier: "VIP 4", volume: "≥ $1,000,000", maker: "0.035%", taker: "0.045%" },
                    { tier: "VIP 5", volume: "≥ $2,500,000", maker: "0.025%", taker: "0.035%" },
                    { tier: "VIP 6", volume: "≥ $5,000,000", maker: "0.015%", taker: "0.025%" },
                    { tier: "VIP 7", volume: "≥ $10,000,000", maker: "0.010%", taker: "0.020%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{row.tier}</td>
                      <td className="p-4 text-white/70">{row.volume}</td>
                      <td className="p-4 text-green-400">{row.maker}</td>
                      <td className="p-4 text-blue-400">{row.taker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-8 w-8 text-blue-400" />
              Futures Trading Fees
            </h2>
            <p className="text-white/70 mb-6">Competitive futures trading fees with leverage up to 125x</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="text-left p-4 font-semibold">Tier</th>
                    <th className="text-left p-4 font-semibold">Maker Fee</th>
                    <th className="text-left p-4 font-semibold">Taker Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "Regular", maker: "0.020%", taker: "0.050%" },
                    { tier: "VIP 1", maker: "0.018%", taker: "0.045%" },
                    { tier: "VIP 2", maker: "0.016%", taker: "0.040%" },
                    { tier: "VIP 3", maker: "0.014%", taker: "0.035%" },
                    { tier: "VIP 4", maker: "0.012%", taker: "0.030%" },
                    { tier: "VIP 5", maker: "0.010%", taker: "0.025%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{row.tier}</td>
                      <td className="p-4 text-green-400">{row.maker}</td>
                      <td className="p-4 text-blue-400">{row.taker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Coins className="h-8 w-8 text-blue-400" />
              Withdrawal Fees
            </h2>
            <p className="text-white/70 mb-6">Network fees for cryptocurrency withdrawals (deposits are free)</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="text-left p-4 font-semibold">Coin</th>
                    <th className="text-left p-4 font-semibold">Network</th>
                    <th className="text-left p-4 font-semibold">Withdrawal Fee</th>
                    <th className="text-left p-4 font-semibold">Minimum Withdrawal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { coin: "BTC", network: "Bitcoin", fee: "0.0005 BTC", min: "0.001 BTC" },
                    { coin: "ETH", network: "Ethereum", fee: "0.005 ETH", min: "0.01 ETH" },
                    { coin: "USDT", network: "Ethereum (ERC20)", fee: "15 USDT", min: "20 USDT" },
                    { coin: "USDT", network: "TRON (TRC20)", fee: "1 USDT", min: "10 USDT" },
                    { coin: "USDT", network: "BSC (BEP20)", fee: "1 USDT", min: "10 USDT" },
                    { coin: "USDC", network: "Ethereum (ERC20)", fee: "15 USDC", min: "20 USDC" },
                    { coin: "BNB", network: "BSC (BEP20)", fee: "0.001 BNB", min: "0.01 BNB" },
                    { coin: "ADA", network: "Cardano", fee: "1 ADA", min: "2 ADA" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{row.coin}</td>
                      <td className="p-4 text-white/70">{row.network}</td>
                      <td className="p-4 text-yellow-400">{row.fee}</td>
                      <td className="p-4 text-white/70">{row.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16 bg-white/5 border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Fee Calculation</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Maker fees apply when you add liquidity to the order book</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Taker fees apply when you remove liquidity from the order book</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>VIP tiers are calculated based on 30-day trading volume</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Fees are automatically applied to your trades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Volume includes both buy and sell orders</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-8 w-8 text-yellow-400" />
              VIP Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Reduced trading fees</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Priority customer support</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Exclusive market insights</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Higher withdrawal limits</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Early access to new features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
