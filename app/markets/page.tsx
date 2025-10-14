"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, TrendingDown } from "lucide-react"
import Image from "next/image"

interface MarketData {
  symbol: string
  price: number
  previousPrice?: number
  change?: number
  changePercent?: number
}

export default function MarketsPage() {
  const [markets, setMarkets] = useState<Map<string, MarketData>>(new Map())
  const [searchQuery, setSearchQuery] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Connect to WebSocket
    const ws = new WebSocket("wss://cex.paxeer.app/ws/market")
    wsRef.current = ws

    ws.onopen = () => {
      console.log("[v0] WebSocket connected")
      setIsConnected(true)
    }

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)

        if (message.type === "welcome") {
          console.log("[v0] Received welcome message")
        } else if (message.type === "snapshot" && Array.isArray(message.data)) {
          console.log("[v0] Received snapshot with", message.data.length, "markets")
          const newMarkets = new Map<string, MarketData>()
          message.data.forEach((item: { symbol: string; price: number }) => {
            newMarkets.set(item.symbol, {
              symbol: item.symbol,
              price: item.price,
            })
          })
          setMarkets(newMarkets)
        } else if (message.type === "update" && Array.isArray(message.data)) {
          // Handle real-time updates
          setMarkets((prevMarkets) => {
            const updatedMarkets = new Map(prevMarkets)
            message.data.forEach((item: { symbol: string; price: number }) => {
              const existing = updatedMarkets.get(item.symbol)
              const previousPrice = existing?.price
              const change = previousPrice ? item.price - previousPrice : 0
              const changePercent = previousPrice ? (change / previousPrice) * 100 : 0

              updatedMarkets.set(item.symbol, {
                symbol: item.symbol,
                price: item.price,
                previousPrice,
                change,
                changePercent,
              })
            })
            return updatedMarkets
          })
        }
      } catch (error) {
        console.error("[v0] Error parsing WebSocket message:", error)
      }
    }

    ws.onerror = (error) => {
      console.error("[v0] WebSocket error:", error)
      setIsConnected(false)
    }

    ws.onclose = () => {
      console.log("[v0] WebSocket disconnected")
      setIsConnected(false)
    }

    return () => {
      ws.close()
    }
  }, [])

  const filteredMarkets = Array.from(markets.values()).filter((market) =>
    market.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedMarkets = filteredMarkets.sort((a, b) => a.symbol.localeCompare(b.symbol))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Live Markets</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Real-time price data for all tradable instruments on ChainFlow
            </p>

            {/* Connection Status */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`} />
              <span className="text-sm text-muted-foreground">{isConnected ? "Connected" : "Disconnected"}</span>
              <span className="text-sm text-muted-foreground">• {markets.size} markets</span>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search markets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedMarkets.map((market) => {
              const isPositive = (market.change ?? 0) >= 0
              const hasChange = market.change !== undefined

              return (
                <div
                  key={market.symbol}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://dashboard.paxeer.app/img/crypto/${market.symbol.toLowerCase()}.webp`}
                        alt={market.symbol}
                        width={32}
                        height={32}
                        className="rounded-full"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          e.currentTarget.style.display = "none"
                        }}
                      />
                      <h3 className="font-semibold text-lg">{market.symbol}</h3>
                      {hasChange && (
                        <div className={`${isPositive ? "text-green-500" : "text-red-500"}`}>
                          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-bold">
                      $
                      {market.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 8,
                      })}
                    </div>

                    {hasChange && (
                      <div className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
                        {isPositive ? "+" : ""}
                        {market.change?.toFixed(8)} ({isPositive ? "+" : ""}
                        {market.changePercent?.toFixed(2)}%)
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {filteredMarkets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No markets found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
