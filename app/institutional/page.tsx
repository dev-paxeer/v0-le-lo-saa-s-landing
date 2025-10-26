import { LeLoLogo } from "@/components/lelo-logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, Shield, TrendingUp, Code, Palette, ArrowRightLeft, CheckCircle2 } from "lucide-react"

export default function InstitutionalPage() {
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
              Institutional Services
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Professional-grade cryptocurrency trading solutions designed for institutions, funds, and high-volume
              traders.
            </p>
            <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
              Contact Sales Team
            </Button>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Comprehensive Institutional Solutions</h2>
            <p className="text-white/70 text-center mb-12">
              Everything you need to trade, custody, and manage digital assets at institutional scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <Building2 className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prime Brokerage</h3>
                <p className="text-white/70">
                  Comprehensive trading solutions with multi-venue access, smart order routing, and institutional-grade
                  execution.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <Shield className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Custody Services</h3>
                <p className="text-white/70">
                  Secure digital asset custody with multi-signature wallets, cold storage, and insurance coverage.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <TrendingUp className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Market Making</h3>
                <p className="text-white/70">
                  Deep liquidity provision and market making services for enhanced trading experience.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <Code className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">API Integration</h3>
                <p className="text-white/70">
                  Robust REST and WebSocket APIs for seamless integration with your trading infrastructure.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <Palette className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">White Label</h3>
                <p className="text-white/70">
                  Complete white-label exchange solutions with customizable features and branding.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <ArrowRightLeft className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">OTC Trading</h3>
                <p className="text-white/70">
                  Over-the-counter trading services for large volume transactions with competitive pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Institutional Platform?</h2>
            <p className="text-white/70 text-center mb-8">
              Built for the unique needs of institutional clients with enterprise-grade security, compliance, and
              performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">24/7 dedicated institutional support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Competitive fee structures</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Advanced risk management tools</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Regulatory compliance assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Custom reporting and analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Multi-currency settlement</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">Cross-margining capabilities</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white/90">High-frequency trading support</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Started Today</h2>
            <form className="max-w-2xl mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <Input placeholder="Enter your company name" className="bg-black border-white/20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input type="email" placeholder="Enter your email" className="bg-black border-white/20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Trading Volume (USD)</label>
                <select className="w-full bg-black border border-white/20 rounded-md px-3 py-2 text-white">
                  <option>$1M - $10M</option>
                  <option>$10M - $50M</option>
                  <option>$50M - $100M</option>
                  <option>$100M+</option>
                </select>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Information</Button>
            </form>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Trading Operations?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join hundreds of institutions already trading on our platform. Contact our sales team to discuss your
              specific requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
