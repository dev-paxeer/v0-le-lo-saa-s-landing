"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Clock, AlertCircle } from "lucide-react"

interface EconomicEvent {
  title: string
  impact: "holiday" | "low" | "medium" | "high"
  instrument: string
  restriction: boolean
  eventType: string
  date: string
  forecast: string | null
  previous: string | null
  actual: string | null
  youtubeLink: string | null
  articleLink: string | null
}

interface ApiResponse {
  items: EconomicEvent[]
}

export default function EconomicCalendarPage() {
  const [events, setEvents] = useState<EconomicEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImpact, setSelectedImpact] = useState<string>("all")

  useEffect(() => {
    const fetchEconomicData = async () => {
      try {
        setLoading(true)

        // Get current date and 7 days ahead
        const now = new Date()
        const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

        const dateFrom = now.toISOString().split(".")[0] + "-04:00"
        const dateTo = nextWeek.toISOString().split(".")[0] + "-04:00"

        const apiUrl = `https://gw2.ftmo.com/public-api/v1/economic-calendar?dateFrom=${dateFrom}&dateTo=${dateTo}&timezone=America%2FNew_York&forceUnrestricted=true`

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error("Failed to fetch economic calendar data")
        }

        const data: ApiResponse = await response.json()
        setEvents(data.items)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchEconomicData()
  }, [])

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "medium":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      case "low":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "holiday":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const filteredEvents = selectedImpact === "all" ? events : events.filter((event) => event.impact === selectedImpact)

  const groupedEvents = filteredEvents.reduce(
    (acc, event) => {
      const dateKey = formatDate(event.date)
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(event)
      return acc
    },
    {} as Record<string, EconomicEvent[]>,
  )

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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedImpact("all")}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedImpact === "all" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedImpact("high")}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedImpact === "high" ? "bg-red-500 text-white" : "bg-card hover:bg-accent"
              }`}
            >
              High Impact
            </button>
            <button
              onClick={() => setSelectedImpact("medium")}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedImpact === "medium" ? "bg-orange-500 text-white" : "bg-card hover:bg-accent"
              }`}
            >
              Medium Impact
            </button>
            <button
              onClick={() => setSelectedImpact("low")}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedImpact === "low" ? "bg-yellow-500 text-white" : "bg-card hover:bg-accent"
              }`}
            >
              Low Impact
            </button>
            <button
              onClick={() => setSelectedImpact("holiday")}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedImpact === "holiday" ? "bg-blue-500 text-white" : "bg-card hover:bg-accent"
              }`}
            >
              Holidays
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Loading economic events...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="p-8 text-center border-red-500/20 bg-red-500/5">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
              <p className="text-muted-foreground">{error}</p>
            </Card>
          )}

          {/* Events List */}
          {!loading && !error && (
            <div className="space-y-8">
              {Object.entries(groupedEvents).map(([date, dayEvents]) => (
                <div key={date}>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    {date}
                  </h2>
                  <div className="grid gap-4">
                    {dayEvents.map((event, index) => (
                      <Card
                        key={index}
                        className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 border-border/50"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Time and Impact */}
                          <div className="flex items-center gap-3 md:w-48">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">
                                {event.eventType === "all-day" ? "All Day" : formatTime(event.date)}
                              </span>
                            </div>
                            <Badge className={`${getImpactColor(event.impact)} border`}>
                              {event.impact.toUpperCase()}
                            </Badge>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1">
                            <div className="flex items-start gap-3">
                              <Badge variant="outline" className="mt-1">
                                {event.instrument}
                              </Badge>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                                {(event.forecast || event.previous || event.actual) && (
                                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    {event.forecast && (
                                      <div className="flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>Forecast: {event.forecast}</span>
                                      </div>
                                    )}
                                    {event.previous && <div>Previous: {event.previous}</div>}
                                    {event.actual && (
                                      <div className="font-semibold text-foreground">Actual: {event.actual}</div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Links */}
                          {(event.youtubeLink || event.articleLink) && (
                            <div className="flex gap-2">
                              {event.youtubeLink && (
                                <a
                                  href={event.youtubeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-primary hover:underline"
                                >
                                  Video
                                </a>
                              )}
                              {event.articleLink && (
                                <a
                                  href={event.articleLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-primary hover:underline"
                                >
                                  Article
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              {filteredEvents.length === 0 && (
                <Card className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">No Events Found</h3>
                  <p className="text-muted-foreground">No economic events match your selected filter.</p>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
