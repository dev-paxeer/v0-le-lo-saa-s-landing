"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar } from "lucide-react"
import dynamic from "next/dynamic"

const TradingViewEconomicCalendar = dynamic(() => import("@/components/tradingview-economic-calendar"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-20">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-muted-foreground">Loading economic calendar...</p>
    </div>
  ),
})

export default function EconomicCalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Live Economic Data</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Economic Calendar</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Stay informed with real-time economic events and market-moving announcements
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl economic-calendar-widget">
              <TradingViewEconomicCalendar />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .tradingview-widget-copyright {
          display: none !important;
        }
        .economic-calendar-widget {
          background: transparent;
        }
        .tradingview-widget-container {
          background: transparent !important;
        }
      `}</style>
    </div>
  )
}
