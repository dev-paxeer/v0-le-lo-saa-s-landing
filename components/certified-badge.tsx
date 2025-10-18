import { Shield } from "lucide-react"

export function CertifiedBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00D9FF]/20 to-[#7B3FF2]/20 border border-[#00D9FF]/30">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#7B3FF2] flex items-center justify-center">
        <Shield className="w-4 h-4 text-black" />
      </div>
      <div className="text-xs font-semibold text-white">BLOCKCHAIN VERIFIED</div>
    </div>
  )
}
