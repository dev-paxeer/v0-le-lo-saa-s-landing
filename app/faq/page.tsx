import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ChainFlow?",
      answer:
        "ChainFlow is the first fully on-chain proprietary trading firm. We provide traders with funded accounts to trade cryptocurrencies, stocks, and futures, with all trades recorded on blockchain for complete transparency. Our platform operates on two dedicated networks: OpenNet for evaluations and Paxeer for live funded trading.",
    },
    {
      question: "How much does it cost to start an evaluation?",
      answer:
        "All ChainFlow evaluations are completely free - $0 cost. Unlike traditional prop firms that charge hundreds or thousands of dollars for evaluations, we believe in removing financial barriers to entry. You can start trading immediately without any upfront payment.",
    },
    {
      question: "What are the evaluation requirements?",
      answer:
        "To pass an evaluation, you need to: achieve a 20% profit target, maintain a maximum 10% daily drawdown limit, stay within a 20% total drawdown limit, and complete a minimum of 5 trading days. All evaluations are conducted on our OpenNet EVM chain with full transparency.",
    },
    {
      question: "What is the profit split?",
      answer:
        "ChainFlow offers an industry-leading 80/20 profit split, meaning you keep 80% of all profits you generate while trading with our funded accounts. This is one of the most competitive splits in the prop trading industry.",
    },
    {
      question: "Where do the funds for funding traders come from?",
      answer:
        "The funds come from our various partners, primarily Sidiora Markets Inc, which is Paxeer's flagship DEX with over $3 billion in Total Value Locked (TVL). They provide funding through specialized pools created specifically for this purpose, where private and public users provide liquidity for traders in exchange for dynamic trader-dependent yield. Our proprietary risk analysis algorithm determines trader yields and implements safeguards to protect our liquidity providers while enabling traders to access capital.",
    },
    {
      question: "What is OpenNet and Paxeer?",
      answer:
        "OpenNet is our custom EVM-compatible blockchain designed specifically for evaluation accounts and practice trading. Paxeer is the live mainnet used for fully funded traders who have passed their evaluations. Both networks feature public ledgers where all trades are transparently recorded and can be verified by anyone.",
    },
    {
      question: "How do instant payouts work?",
      answer:
        "Once you're a funded trader, you can request payouts instantly on-chain. Withdrawals are processed directly to your wallet on Paxeer or any other EVM-compatible chain. There are no waiting periods or manual approval processes - your earnings are accessible immediately when you request them.",
    },
    {
      question: "What instruments can I trade?",
      answer:
        "ChainFlow offers a comprehensive range of trading instruments including major cryptocurrencies (BTC, ETH, SOL, etc.), US stocks across all sectors (technology, finance, healthcare, etc.), futures contracts (energy, metals, agriculture, indices), and more. All instruments are available with competitive spreads and full on-chain settlement.",
    },
    {
      question: "Can I see other traders' performance?",
      answer:
        "Yes! ChainFlow features public leaderboards on both OpenNet and Paxeer networks. You can view trader performance, and the community can even provide liquidity to trader-specific pools. This allows successful traders to manage more capital while enabling the community to earn from traders' performance through our dynamic yield system.",
    },
    {
      question: "What trading tools do you provide?",
      answer:
        "We provide a dedicated custom-made trading terminal modeled after the Bloomberg terminal, delivering traders the most modern tools and best performance. Our platform includes advanced charting, real-time market data, risk management tools, and seamless integration with our on-chain settlement system.",
    },
    {
      question: "Is my trading data really public?",
      answer:
        "Yes, absolutely. Every trade you make is recorded on the blockchain and can be verified through our public explorers (opennet.paxeer.app for evaluations and paxscan.paxeer.app for live trading). This transparency ensures fairness, prevents manipulation, and builds trust in the prop trading industry.",
    },
    {
      question: "What makes ChainFlow different from other prop firms?",
      answer:
        "ChainFlow is the only fully on-chain prop firm with zero-cost evaluations, public ledger transparency, instant on-chain payouts, and an 80/20 profit split. Traditional prop firms often charge high fees, lack transparency, and have slow payout processes. We've built ChainFlow to address these issues using blockchain technology.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply visit our dashboard at dashboard.paxeer.app, create an account, select your evaluation size (10K, 25K, 50K, or 100K), and start trading immediately. There are no fees, no waiting periods, and no complicated application processes. Your evaluation begins as soon as you're ready.",
    },
    {
      question: "What happens if I fail an evaluation?",
      answer:
        "Since evaluations are completely free, you can retry as many times as you need without any financial loss. We encourage traders to learn from their mistakes, refine their strategies, and try again. There are no limits on the number of evaluation attempts.",
    },
    {
      question: "Can I have multiple funded accounts?",
      answer:
        "Yes, you can pass multiple evaluations and manage multiple funded accounts simultaneously. Many successful traders scale up by managing several accounts, and our public leaderboard system even allows the community to allocate additional capital to top-performing traders.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
            <p className="text-lg text-white/70 text-pretty">
              Everything you need to know about ChainFlow, the first fully on-chain prop firm
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg px-6 bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-white/70 mb-6">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>
            <a
              href="https://dashboard.paxeer.app/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
