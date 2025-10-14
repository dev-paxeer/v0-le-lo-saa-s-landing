import Image from "next/image"

export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative w-8 h-8">
        <Image
          src="/images/design-mode/OPENNET_ICON.PNG.png"
          alt="ChainFlow Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />
      </div>
      <span className="text-xl font-bold text-foreground">ChainFlow</span>
    </div>
  )
}
