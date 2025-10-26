import { LeLoLogo } from "@/components/lelo-logo"
import Link from "next/link"
import { Shield, FileCheck, Eye, AlertTriangle, Users, BookOpen, Phone } from "lucide-react"

export default function AMLPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors">
          <LeLoLogo className="h-6" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anti-Money Laundering (AML) Policy
            </h1>
            <p className="text-xl text-white/70">Maintaining the highest standards of compliance and security</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-400" />
                Policy Overview
              </h2>
              <p className="text-white/70 leading-relaxed">
                ChainFlow is committed to maintaining the highest standards of anti-money laundering (AML) and
                counter-terrorism financing (CTF) compliance. We have implemented robust procedures to detect, prevent,
                and report suspicious activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-blue-400" />
                Know Your Customer (KYC) Requirements
              </h2>
              <p className="text-white/70 mb-4">We implement comprehensive KYC procedures including:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Identity verification for all users</li>
                <li>Address verification</li>
                <li>Source of funds documentation</li>
                <li>Enhanced due diligence for high-risk customers</li>
                <li>Ongoing monitoring of customer activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-400" />
                Customer Due Diligence (CDD)
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Standard CDD Measures:</h3>
                  <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                    <li>Identification and verification of customer identity</li>
                    <li>Understanding the purpose and nature of business relationship</li>
                    <li>Ongoing monitoring of transactions and activities</li>
                    <li>Record keeping of customer information and transactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">Enhanced Due Diligence (EDD):</h3>
                  <p className="text-white/70 mb-2">Applied to higher-risk customers, including:</p>
                  <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                    <li>Politically Exposed Persons (PEPs)</li>
                    <li>Customers from high-risk jurisdictions</li>
                    <li>High-value transaction customers</li>
                    <li>Unusual transaction patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-blue-400" />
                Transaction Monitoring
              </h2>
              <p className="text-white/70 mb-4">We employ automated systems and manual reviews to monitor:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Large or unusual transactions</li>
                <li>Rapid movement of funds</li>
                <li>Transactions involving high-risk jurisdictions</li>
                <li>Structured transactions designed to avoid reporting thresholds</li>
                <li>Transactions inconsistent with customer profile</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-blue-400" />
                Suspicious Activity Reporting
              </h2>
              <p className="text-white/70 mb-4">
                We file Suspicious Activity Reports (SARs) with relevant authorities when we detect transactions or
                activities that may indicate:
              </p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Money laundering</li>
                <li>Terrorist financing</li>
                <li>Tax evasion</li>
                <li>Fraud</li>
                <li>Other illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sanctions Screening</h2>
              <p className="text-white/70 mb-4">We screen all customers and transactions against:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>OFAC Sanctions Lists</li>
                <li>UN Security Council Sanctions Lists</li>
                <li>EU Sanctions Lists</li>
                <li>Other relevant sanctions and watch lists</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Record Keeping</h2>
              <p className="text-white/70 mb-4">We maintain comprehensive records including:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Customer identification documents</li>
                <li>Transaction records</li>
                <li>Correspondence with customers</li>
                <li>Risk assessments</li>
                <li>Training records</li>
              </ul>
              <p className="text-white/70 mt-4">
                Records are retained for a minimum of 5 years as required by applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-400" />
                Training and Awareness
              </h2>
              <p className="text-white/70 mb-4">All employees receive regular AML training covering:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Recognition of suspicious activities</li>
                <li>Reporting procedures</li>
                <li>Regulatory requirements</li>
                <li>Customer due diligence procedures</li>
                <li>Sanctions compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Compliance Officer</h2>
              <p className="text-white/70 mb-4">Our designated AML Compliance Officer is responsible for:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Overseeing AML compliance program</li>
                <li>Filing required reports</li>
                <li>Ensuring staff training</li>
                <li>Maintaining relationships with regulatory authorities</li>
                <li>Regular program reviews and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Customer Responsibilities</h2>
              <p className="text-white/70 mb-4">Customers are required to:</p>
              <ul className="space-y-2 text-white/70 list-disc list-inside ml-4">
                <li>Provide accurate and complete information</li>
                <li>Update information when circumstances change</li>
                <li>Comply with verification requests</li>
                <li>Report any unauthorized account activity</li>
                <li>Ensure compliance with applicable laws in their jurisdiction</li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-6 w-6 text-blue-400" />
                Contact Information
              </h2>
              <p className="text-white/70">
                For AML-related inquiries, please contact our Compliance Team at{" "}
                <a href="mailto:compliance@paxeer.app" className="text-blue-400 hover:text-blue-300 transition-colors">
                  compliance@paxeer.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
