"use client"

import { MessageSquare, Lock, Users, TrendingUp, Handshake, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SocialFeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Public Chatrooms",
      description: "Connect with traders worldwide in real-time community discussions",
    },
    {
      icon: Lock,
      title: "E2EE Private DMs",
      description: "Secure end-to-end encrypted direct messaging for private conversations",
    },
    {
      icon: Users,
      title: "Trader Profiles",
      description: "Build your reputation with public profiles, followers, and performance stats",
    },
    {
      icon: TrendingUp,
      title: "Signal Channels",
      description: "Access public and premium trading signal chatrooms from top performers",
    },
    {
      icon: Handshake,
      title: "P2P OTC Market",
      description: "Execute large trades peer-to-peer without market impact",
    },
    {
      icon: GraduationCap,
      title: "Education Marketplace",
      description: "Buy and sell trading signals, strategies, and educational content",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">New Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Social Trading Platform</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Connect, learn, and grow with a global community of traders. Share insights, follow top performers, and
            access exclusive trading content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/features">
            <Button size="lg" className="gap-2">
              Explore All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
