import { Header } from "@/components/header"
import { TickerTape } from "@/components/ticker-tape"
import { HeroSection } from "@/components/hero-section"
import { TrustBadgesSection } from "@/components/trust-badges-section"
import { PromotionsSection } from "@/components/promotions-section"
import { AnimatedFeaturesSection } from "@/components/animated-features-section"
import { SocialFeaturesSection } from "@/components/social-features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <TickerTape />
        <HeroSection />
        <TrustBadgesSection />
        <PromotionsSection />
        <AnimatedFeaturesSection />
        <SocialFeaturesSection />
        <PricingSection />
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}
