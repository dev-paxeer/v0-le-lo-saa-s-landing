"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Evaluation-10k",
    price: "$0",
    period: "",
    description: "Start your trading journey",
    accountSize: "$10,000",
    profitTarget: "$2,000 (20%)",
    dailyDrawdown: "$1,000 (10%)",
    totalDrawdown: "$2,000 (20%)",
    minDays: "5",
    network: "OpenNet EVM",
    publicLedger: "Yes",
    popular: false,
  },
  {
    name: "Evaluation-25k",
    price: "$0",
    period: "",
    description: "Start your trading journey",
    accountSize: "$25,000",
    profitTarget: "$5,000 (20%)",
    dailyDrawdown: "$2,500 (10%)",
    totalDrawdown: "$5,000 (20%)",
    minDays: "5",
    network: "OpenNet EVM",
    publicLedger: "Yes",
    popular: false,
  },
  {
    name: "Evaluation-50k",
    price: "$0",
    period: "",
    description: "Start your trading journey",
    accountSize: "$50,000",
    profitTarget: "$10,000 (20%)",
    dailyDrawdown: "$5,000 (10%)",
    totalDrawdown: "$10,000 (20%)",
    minDays: "5",
    network: "OpenNet EVM",
    publicLedger: "Yes",
    popular: true,
  },
  {
    name: "Evaluation-100k",
    price: "$0",
    period: "",
    description: "Start your trading journey",
    accountSize: "$100,000",
    profitTarget: "$20,000 (20%)",
    dailyDrawdown: "$10,000 (10%)",
    totalDrawdown: "$20,000 (20%)",
    minDays: "5",
    network: "OpenNet EVM",
    publicLedger: "Yes",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Zero Cost. Maximum Opportunity.
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose your challenge size. All evaluations are completely free on our OpenNet blockchain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}

              <svg className="svg-container">
                <defs>
                  <filter id={`turbulent-displace-${index}`} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                    <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                      <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                    <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                      <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
                    <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                      <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
                    <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                      <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                    <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                    <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="combinedNoise"
                      scale="30"
                      xChannelSelector="R"
                      yChannelSelector="B"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="card-container">
                <div className="inner-container">
                  <div className="border-outer">
                    <div className="main-card" style={{ filter: `url(#turbulent-displace-${index})` }}></div>
                  </div>
                  <div className="glow-layer-1"></div>
                  <div className="glow-layer-2"></div>
                </div>

                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="background-glow"></div>

                <div className="content-container">
                  <div className="content-top">
                    <div className="scrollbar-glass">{plan.name}</div>
                    <p className="title">{plan.price}</p>
                  </div>

                  <hr className="divider" />

                  <div className="content-bottom">
                    <ul className="space-y-3 mb-8 text-sm">
                      <li className="flex flex-col text-gray-300">
                        <span className="text-gray-400 text-xs">Account Size</span>
                        <span className="font-medium">{plan.accountSize}</span>
                      </li>
                      <li className="flex flex-col text-gray-300">
                        <span className="text-gray-400 text-xs">Profit target</span>
                        <span className="font-medium">{plan.profitTarget}</span>
                      </li>
                      <li className="flex flex-col text-gray-300">
                        <span className="text-gray-400 text-xs">Daily drawdown</span>
                        <span className="font-medium">{plan.dailyDrawdown}</span>
                      </li>
                      <li className="flex flex-col text-gray-300">
                        <span className="text-gray-400 text-xs">Total drawdown</span>
                        <span className="font-medium">{plan.totalDrawdown}</span>
                      </li>
                      <li className="flex flex-col text-gray-300">
                        <span className="text-gray-400 text-xs">Min days</span>
                        <span className="font-medium">{plan.minDays}</span>
                      </li>
                    </ul>

                    <Button
                      className="w-full bg-white text-black hover:bg-white/90 group"
                      size="lg"
                      asChild
                    >
                      <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                        Start Challenge
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            All challenges are 100% free • No hidden costs • Get funded and trade on Paxeer mainnet
          </p>
          <p className="text-sm text-gray-500">
            Questions about scaling?{" "}
            <a href="#" className="text-white hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
