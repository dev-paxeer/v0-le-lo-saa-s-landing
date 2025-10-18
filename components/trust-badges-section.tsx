import { Shield, Award, TrendingUp, Users } from "lucide-react"

export function TrustBadgesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-[#00D9FF] mb-2">$2.7B+</div>
            <div className="text-sm md:text-base text-gray-400">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-[#00D9FF] mb-2">10,000+</div>
            <div className="text-sm md:text-base text-gray-400">Active Traders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-[#00D9FF] mb-2">24 Hours</div>
            <div className="text-sm md:text-base text-gray-400">To Get Funded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-[#00D9FF] mb-2">100%</div>
            <div className="text-sm md:text-base text-gray-400">On-Chain Verified</div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">WHO'S TALKING ABOUT US?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud to say our outstanding achievements for traders, partners, and employees have been recognized by
            these trusted organizations.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {/* Blockchain Verified Badge */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#7B3FF2] p-1 mb-3">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Shield className="w-10 h-10 md:w-14 md:h-14 text-[#00D9FF]" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-white">BLOCKCHAIN</div>
              <div className="text-xs md:text-sm font-semibold text-white">VERIFIED</div>
              <div className="text-xs text-gray-500 mt-1">2024</div>
            </div>
          </div>

          {/* DeFi Excellence Badge */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#7B3FF2] to-[#00D9FF] p-1 mb-3">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Award className="w-10 h-10 md:w-14 md:h-14 text-[#7B3FF2]" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-white">DeFi</div>
              <div className="text-xs md:text-sm font-semibold text-white">EXCELLENCE</div>
              <div className="text-xs text-gray-500 mt-1">2024</div>
            </div>
          </div>

          {/* Top Innovator Badge */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 mb-3">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-white">TOP</div>
              <div className="text-xs md:text-sm font-semibold text-white">INNOVATOR</div>
              <div className="text-xs text-gray-500 mt-1">2024</div>
            </div>
          </div>

          {/* Community Choice Badge */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1 mb-3">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Users className="w-10 h-10 md:w-14 md:h-14 text-green-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-semibold text-white">COMMUNITY</div>
              <div className="text-xs md:text-sm font-semibold text-white">CHOICE</div>
              <div className="text-xs text-gray-500 mt-1">2024</div>
            </div>
          </div>
        </div>

        {/* Media Logos */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50 hover:opacity-75 transition-opacity">
            <div className="text-2xl md:text-3xl font-bold text-gray-600">CoinDesk</div>
            <div className="text-2xl md:text-3xl font-bold text-gray-600">Decrypt</div>
            <div className="text-2xl md:text-3xl font-bold text-gray-600">CoinTelegraph</div>
            <div className="text-2xl md:text-3xl font-bold text-gray-600">The Block</div>
          </div>
        </div>
      </div>
    </section>
  )
}
