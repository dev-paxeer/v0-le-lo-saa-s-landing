"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Connect to WebSocket
    const ws = new WebSocket("wss://cex.paxeer.app/ws/market")
    wsRef.current = ws

    ws.onopen = () => {
      setIsConnected(true)
    }

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)

        if (message.type === "welcome") {
          console.log("[v0] Received welcome message")
        } else if (message.type === "snapshot" && Array.isArray(message.data)) {
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
      setIsConnected(false)
    }

    return () => {
      ws.close()
    }
  }, [])

  const filterDuplicates = (marketsList: MarketData[]) => {
    const baseSymbols = new Set<string>()
    const usdPairs = new Set<string>()

    // First pass: identify base symbols and USD pairs
    marketsList.forEach((market) => {
      if (market.symbol.endsWith("/USD")) {
        const baseSymbol = market.symbol.replace("/USD", "")
        usdPairs.add(baseSymbol)
      } else if (!market.symbol.includes("/")) {
        baseSymbols.add(market.symbol)
      }
    })

    // Second pass: filter out USD pairs if base symbol exists
    return marketsList.filter((market) => {
      if (market.symbol.endsWith("/USD")) {
        const baseSymbol = market.symbol.replace("/USD", "")
        // Only keep USD pair if base symbol doesn't exist
        return !baseSymbols.has(baseSymbol)
      }
      return true
    })
  }

  const filteredMarkets = filterDuplicates(
    Array.from(markets.values()).filter((market) => market.symbol.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const sortedMarkets = filteredMarkets.sort((a, b) => a.symbol.localeCompare(b.symbol))

  const totalPages = Math.ceil(sortedMarkets.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedMarkets = sortedMarkets.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

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
              <span className="text-sm text-muted-foreground">• {filteredMarkets.length} markets</span>
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
            {paginatedMarkets.map((market) => {
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

          {filteredMarkets.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-10"
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {filteredMarkets.length > 0 && (
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredMarkets.length)} of {filteredMarkets.length} markets
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
