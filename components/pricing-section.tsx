"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "$25K Challenge",
    price: "$0",
    period: "",
    description: "Start your trading journey",
    features: [
      "$25,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
    popular: false,
  },
  {
    name: "$50K Challenge",
    price: "$0",
    period: "",
    description: "Most popular for traders",
    features: [
      "$50,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
    popular: true,
  },
  {
    name: "$100K Challenge",
    price: "$0",
    period: "",
    description: "For serious traders",
    features: [
      "$100,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
    popular: false,
  },
  {
    name: "$250K Challenge",
    price: "$0",
    period: "",
    description: "Advanced trading capital",
    features: [
      "$250,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
    popular: false,
  },
  {
    name: "$500K Challenge",
    price: "$0",
    period: "",
    description: "Professional level trading",
    features: [
      "$500,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
    popular: false,
  },
  {
    name: "$1M Challenge",
    price: "$0",
    period: "",
    description: "Elite trading capital",
    features: [
      "$1,000,000 evaluation account",
      "20% profit target",
      "10% daily drawdown limit",
      "20% total drawdown limit",
      "5 minimum trading days",
      "Trade on OpenNet EVM chain",
      "Public ledger access",
    ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular ? "border-white/30 bg-white/5" : "border-border/20 bg-background/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://waitlist.chainflow.paxeer.app/" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-transparent border border-white/20 text-white hover:bg-white/10"
                  } group`}
                  size="lg"
                >
                  Start Challenge
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
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
