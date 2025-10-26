"use client"

import { useEffect, useRef } from "react"

export function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "",
        },
        {
          proName: "NASDAQ:TSLA",
          title: "",
        },
        {
          proName: "NASDAQ:AAPL",
          title: "",
        },
        {
          proName: "NASDAQ:NVDA",
          title: "",
        },
        {
          proName: "NASDAQ:NFLX",
          title: "",
        },
        {
          proName: "CRYPTO:SOLUSD",
          title: "",
        },
      ],
      colorTheme: "dark",
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      displayMode: "adaptive",
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div className="w-full bg-black/50 backdrop-blur-sm border-b border-primary/10">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  )
}
