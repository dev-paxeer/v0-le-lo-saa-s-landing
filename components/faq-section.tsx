"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is ChainFlow and how is it different from other prop firms?",
    answer:
      "ChainFlow is the world's first fully on-chain proprietary trading firm. Unlike traditional prop firms, all our evaluations are completely free ($0 cost), and every trade is recorded on the blockchain for complete transparency. We use OpenNet (our custom EVM chain) for evaluations and Paxeer mainnet for funded traders.",
  },
  {
    question: "Why are evaluations completely free?",
    answer:
      "We believe in removing financial barriers to opportunity. By leveraging blockchain technology and our custom OpenNet EVM chain, we've eliminated the overhead costs that traditional prop firms pass on to traders. This allows us to offer zero-cost evaluations while maintaining the highest standards.",
  },
  {
    question: "What are OpenNet and Paxeer?",
    answer:
      "OpenNet is our custom EVM-compatible blockchain designed specifically for evaluation accounts. It provides a secure, transparent environment for traders to prove their skills. Paxeer is the live mainnet where funded traders operate with real capital. Both networks feature public ledgers (opennet.paxeer.app and paxscan.paxeer.app), ensuring complete transparency of all trading activity.",
  },
  {
    question: "How does the public ledger work?",
    answer:
      "Every trade executed on ChainFlow is recorded on the blockchain, creating an immutable, publicly verifiable record. Anyone can view trading history, performance metrics, and account activity on our block explorers (opennet.paxeer.app for evaluations, paxscan.paxeer.app for live trading). This transparency ensures fairness and builds trust between traders and the firm.",
  },
  {
    question: "What happens after I pass the evaluation?",
    answer:
      "Once you successfully complete your evaluation on OpenNet, you'll be funded and transition to trading on Paxeer, our live mainnet. You'll trade with real capital, earn real profits based on your profit split (80-90% depending on your challenge level), and all trades remain publicly verifiable on the blockchain.",
  },
  {
    question: "Are there any time limits or trading rules?",
    answer:
      "We don't impose artificial time limits on evaluations. Trade at your own pace and prove your consistency. We do have standard risk management rules (daily loss limits, maximum drawdown) to protect capital, but these are clearly outlined and designed to promote sustainable trading practices.",
  },
  {
    question: "How do I withdraw my profits?",
    answer:
      "Profits are paid out on-chain, directly to your wallet. Since we operate on blockchain infrastructure, withdrawals are fast, transparent, and verifiable. You can request withdrawals according to your profit split agreement, with most payouts processed within 24-48 hours.",
  },
  {
    question: "What trading instruments are available?",
    answer:
      "ChainFlow supports a wide range of trading instruments including crypto pairs, forex, commodities, and indices. All instruments are available on both OpenNet (evaluation) and Paxeer (funded) networks, ensuring a seamless transition from evaluation to live trading.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about ChainFlow. Have more questions? Reach out to our support team.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  )
}
