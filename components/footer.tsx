import { LeLoLogo } from "./lelo-logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <LeLoLogo className="mb-4" />
            <p className="text-white/70 mb-4 max-w-md">
              The first fully on-chain prop firm. Zero cost evaluations, public ledger transparency, and
              blockchain-verified trades on OpenNet and Paxeer.
            </p>
            <p className="text-sm text-white/50 italic">Trade with transparency. Scale with confidence.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <a
                  href="https://opennet.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  OpenNet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://paxscan.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Paxscan (Live Network)
                </a>
              </li>
              <li>
                <Link href="/instruments" className="hover:text-white transition-colors">
                  Instruments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:text-white transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2025 ChainFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
