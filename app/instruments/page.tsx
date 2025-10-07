import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Bitcoin, Building2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const logoMap: Record<string, string> = {
  // Stocks
  AAPL: "https://img.logo.dev/ticker/AAPL?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  MSFT: "https://img.logo.dev/ticker/MSFT?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  GOOGL: "https://img.logo.dev/ticker/GOOGL?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  AMZN: "https://img.logo.dev/ticker/AMZN?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  NVDA: "https://img.logo.dev/ticker/NVDA?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  META: "https://img.logo.dev/ticker/META?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  TSLA: "https://img.logo.dev/ticker/TSLA?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  V: "https://img.logo.dev/ticker/V?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  JPM: "https://img.logo.dev/ticker/JPM?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  MA: "https://img.logo.dev/ticker/MA?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  JNJ: "https://img.logo.dev/ticker/JNJ?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  UNH: "https://img.logo.dev/ticker/UNH?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  // Futures (using ETF equivalents)
  CL: "https://img.logo.dev/ticker/USO?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  NG: "https://img.logo.dev/ticker/UNG?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  GC: "https://img.logo.dev/ticker/GLD?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  SI: "https://img.logo.dev/ticker/SLV?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  ZC: "https://img.logo.dev/ticker/CORN?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  ZS: "https://img.logo.dev/ticker/SOYB?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  ES: "https://img.logo.dev/ticker/SPY?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
  NQ: "https://img.logo.dev/ticker/QQQ?token=pk_MvXTj0WhRQexPrFlRjv8lA&size=120&format=png&retina=true",
}

const instrumentsData = {
  crypto: [
    {
      name: "Bitcoin",
      symbol: "BTC",
      address: "0xb4820AF5089694690411F269eD7c99654E21710d",
      logo: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0xA3c44f53Ae15b713daE71cAE6842b4aCAc3D5dbD",
      logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    },
    {
      name: "XRP",
      symbol: "XRP",
      address: "0xe8E0f122AA4fA0e7d99FB7E8fF0aCCbc88d01640",
      logo: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    },
    {
      name: "BNB",
      symbol: "BNB",
      address: "0x416Bc86290A15aF9bA5b8EE25A1d6C18487EF368",
      logo: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696512369",
    },
    {
      name: "Solana",
      symbol: "SOL",
      address: "0x2C4147951F0Fa062b7B9bA40205f22C8A7621Aad",
      logo: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      address: "0x72dAB119677a771064c974FcfAc0814891805f75",
      logo: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      address: "0xcAd19a7c07357f7D091662F89cB09B19273CBa91",
      logo: "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      address: "0x24F24D77102103B56B038BE5e1791F8964f45Ccd",
      logo: "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
    },
  ],
  stocks: [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      address: "0xaD99f349F2f8d2425ea8b2995C61bE221A8AB2a6",
      category: "Technology",
    },
    {
      name: "Microsoft Corporation",
      symbol: "MSFT",
      address: "0x8C4B9f246fEC14879E76b5ba7c52e71a89Fb25d0",
      category: "Technology",
    },
    {
      name: "Alphabet Inc. Class A",
      symbol: "GOOGL",
      address: "0x011479D7cE21E262662f04646cF80aB9F08d9fE1",
      category: "Technology",
    },
    {
      name: "Amazon.com Inc.",
      symbol: "AMZN",
      address: "0xeeD46BEa1dC18Bf8953713D2D0c70caEb4944E0e",
      category: "Technology",
    },
    {
      name: "NVIDIA Corporation",
      symbol: "NVDA",
      address: "0xc57c7C95c91DCB9A018b834E824246b9bDCE6357",
      category: "Technology",
    },
    {
      name: "Meta Platforms Inc.",
      symbol: "META",
      address: "0xcECDF71Fab63Aa46C9c16A919891cC4eFc3Fb1aA",
      category: "Technology",
    },
    {
      name: "Tesla Inc.",
      symbol: "TSLA",
      address: "0x76290528ccf3B4766268834CDA2F11a3774c1531",
      category: "Automotive",
    },
    { name: "Visa Inc.", symbol: "V", address: "0xFB55eEEC5f10a8C89cc0C8f3ff3426F1Ae4D6db7", category: "Financial" },
    {
      name: "JPMorgan Chase & Co.",
      symbol: "JPM",
      address: "0x95B39CBf5a647874cb704a4b519a1C5b260f3b07",
      category: "Financial",
    },
    {
      name: "Mastercard Inc.",
      symbol: "MA",
      address: "0x8aEC4D4C4236413aAD184E6a9c379d39e3c0C83e",
      category: "Financial",
    },
    {
      name: "Johnson & Johnson",
      symbol: "JNJ",
      address: "0xB9f2fFE1AB39a9359Bd4Eac358245198058De242",
      category: "Healthcare",
    },
    {
      name: "UnitedHealth Group Inc.",
      symbol: "UNH",
      address: "0xd32C7C97C55b385De30121d1343bdC12c2334b64",
      category: "Healthcare",
    },
  ],
  futures: [
    {
      name: "Crude Oil WTI",
      symbol: "CL",
      address: "0xb6928B7EF9e3e54858e377009a02Aa6643F14eDc",
      unit: "1,000 barrels",
      category: "Energy",
    },
    {
      name: "Natural Gas",
      symbol: "NG",
      address: "0xc9A8cC6E7b8479da2063Cd5d24F5E83040EEe17D",
      unit: "10,000 MMBtu",
      category: "Energy",
    },
    {
      name: "Gold",
      symbol: "GC",
      address: "0x67C98D468f046aa1a84f185956c75a8Fa890930a",
      unit: "100 troy oz",
      category: "Metals",
    },
    {
      name: "Silver",
      symbol: "SI",
      address: "0x909beA705156Fb538294a0A8da222a50EddDa50c",
      unit: "5,000 troy oz",
      category: "Metals",
    },
    {
      name: "Corn",
      symbol: "ZC",
      address: "0xe56c03ea1C45382a1C56b8e63cC1eB393d0Ba5bd",
      unit: "5,000 bushels",
      category: "Agriculture",
    },
    {
      name: "Soybeans",
      symbol: "ZS",
      address: "0xA9F52D85148B41cd6582cba7e6bAD605ee89607A",
      unit: "5,000 bushels",
      category: "Agriculture",
    },
    {
      name: "E-mini S&P 500",
      symbol: "ES",
      address: "0xA239Ee09d7c46b3afcA386763CE8e33ea9309f51",
      unit: "$50 x Index",
      category: "Index",
    },
    {
      name: "E-mini Nasdaq 100",
      symbol: "NQ",
      address: "0x1cA3c16462d64720fB742665843DB546940393c9",
      unit: "$20 x Index",
      category: "Index",
    },
  ],
}

export default function InstrumentsPage() {
  const instrumentCategories = [
    {
      title: "Cryptocurrencies",
      description: "Major digital assets with on-chain settlement",
      icon: Bitcoin,
      color: "text-orange-500",
      instruments: instrumentsData.crypto.map((i) => ({
        ...i,
        type: "Crypto",
        exchange: "OpenNet/Paxeer",
      })),
    },
    {
      title: "Technology & Financial Stocks",
      description: "Leading tech and financial companies",
      icon: Building2,
      color: "text-blue-500",
      instruments: instrumentsData.stocks.map((i) => ({
        ...i,
        logo: logoMap[i.symbol],
        type: i.category,
        exchange: "NASDAQ/NYSE",
      })),
    },
    {
      title: "Futures Contracts",
      description: "Energy, metals, agriculture, and index futures",
      icon: TrendingUp,
      color: "text-green-500",
      instruments: instrumentsData.futures.map((i) => ({
        ...i,
        logo: logoMap[i.symbol],
        type: i.category,
        exchange: "CME/NYMEX/CBOT",
      })),
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-popover-foreground">
                Trading Instruments
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Trade 100+ instruments across cryptocurrencies, stocks, and futures with full on-chain transparency and
                zero evaluation costs
              </p>
            </div>

            {/* Instruments Grid */}
            <div className="space-y-6 md:space-y-8">
              {instrumentCategories.map((category, idx) => {
                const Icon = category.icon
                return (
                  <Card
                    key={idx}
                    className="border-border/50 hover:border-primary/50 transition-all duration-300 bg-black"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-background ${category.color}`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{category.title}</CardTitle>
                          <CardDescription className="text-sm md:text-base">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {category.instruments.map((instrument, instrumentIdx) => (
                          <a
                            key={instrumentIdx}
                            href={`https://opennet.paxeer.app/address/${instrument.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group block"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                {instrument.logo && (
                                  <div className="relative w-8 h-8 flex-shrink-0">
                                    <Image
                                      src={instrument.logo || "/placeholder.svg"}
                                      alt={`${instrument.name} logo`}
                                      width={32}
                                      height={32}
                                      className="rounded-full"
                                    />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                      {instrument.symbol}
                                    </h3>
                                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs md:text-sm text-muted-foreground truncate">{instrument.name}</p>
                                </div>
                              </div>
                              <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                                {instrument.type}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                              <span className="truncate">{instrument.exchange}</span>
                              {instrument.unit && <span className="text-xs ml-2 flex-shrink-0">{instrument.unit}</span>}
                            </div>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-xl bg-accent/30 border border-border/50">
              <p className="text-center text-sm md:text-base text-muted-foreground">
                All instruments are available on both{" "}
                <a
                  href="https://opennet.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  OpenNet
                </a>{" "}
                (evaluation) and{" "}
                <a
                  href="https://paxscan.paxeer.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Paxeer
                </a>{" "}
                (live trading) networks with full transparency and on-chain settlement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
