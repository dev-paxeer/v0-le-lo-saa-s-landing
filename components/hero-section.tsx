import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-x-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-8 md:pt-12 min-h-[40vh] md:min-h-[50vh] px-4 md:px-0">
        <ParticleTextEffect words={["ChainFlow", "ON-CHAIN", "TRADING", "TRANSPARENT"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto">{""}</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <a href="https://waitlist.chainflow.paxeer.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black group w-full sm:w-auto">
                Start Evaluation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent w-full sm:w-auto"
            >
              View Public Ledger
            </Button>
          </div>

          <div className="mt-12 md:mt-16 mb-6 md:mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-3 md:mb-0 w-full md:w-auto">
                  <p className="text-center md:text-end text-sm text-gray-400">Trusted by traders worldwide</p>
                </div>
                <div className="relative py-4 md:py-6 md:w-[calc(100%-11rem)] flex items-center justify-center">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                    First Fully on Chain Prop Firm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
