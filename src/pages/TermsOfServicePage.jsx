import { useState } from 'react'
import PageHero from '../components/PageHero'
import { FileText, Printer, CheckCircle2, Shield } from 'lucide-react'

const TermsOfServicePage = () => {
  const [activeToc, setActiveToc] = useState('acceptance')

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'accounts', title: '2. User Accounts & Responsibilities' },
    { id: 'billing', title: '3. Subscription Fees & Billing' },
    { id: 'use', title: '4. Acceptable Use Policy' },
    { id: 'ip', title: '5. Intellectual Property Rights' },
    { id: 'liability', title: '6. Limitation of Liability & SLA' },
    { id: 'termination', title: '7. Termination & Suspension' },
    { id: 'governing', title: '8. Governing Law & Dispute Resolution' },
  ]

  const scrollToSection = (id) => {
    setActiveToc(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Legal Agreement"
        title="OpenMyPro"
        highlight="Terms of Service"
        description="Please review these terms governing your rights and obligations when using the OpenMyPro platform and related services."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Table of Contents Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Sections
                </span>
                <span className="text-[11px] text-gray-400">
                  Effective Sep 2026
                </span>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeToc === sec.id
                        ? 'bg-[#0284c7] text-white font-bold'
                        : 'text-gray-600 hover:bg-gray-200/60'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                <button
                  onClick={() => window.print()}
                  className="text-xs font-semibold text-gray-600 hover:text-gray-900 flex items-center space-x-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Terms</span>
                </button>
              </div>
            </div>
          </div>

          {/* Legal Text Body */}
          <div className="lg:col-span-8 prose prose-slate max-w-none text-gray-700 text-sm leading-relaxed space-y-8">
            <section id="acceptance" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By registering an account, purchasing a subscription, or accessing any service provided by OpenMyPro Inc. ("OpenMyPro", "we", "us"), you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or clinic entity, you affirm you have the legal authority to bind that entity.
              </p>
            </section>

            <section id="accounts" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. User Accounts &amp; Practitioner Responsibilities
              </h2>
              <p>
                You are responsible for safeguarding your login credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete practice verification credentials where required by applicable medical or professional licensing laws.
              </p>
            </section>

            <section id="billing" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Subscription Fees &amp; Billing
              </h2>
              <p>
                Paid tiers are billed in advance on a recurring monthly or annual basis. Fees are non-refundable except as required by law or as explicitly detailed under our 14-day risk-free satisfaction guarantee. You may cancel your subscription renewal at any time via your account portal.
              </p>
            </section>

            <section id="use" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Acceptable Use Policy
              </h2>
              <p>
                You agree not to misuse the OpenMyPro platform. Prohibited actions include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Sending unsolicited bulk commercial messages (spam) or violating telemarketing regulations.</li>
                <li>Attempting to bypass authentication mechanisms, probe system vulnerabilities, or reverse-engineer the API.</li>
                <li>Storing or transmitting unlawful, infringing, or malicious content.</li>
                <li>Impersonating another person, professional license holder, or organization.</li>
              </ul>
            </section>

            <section id="ip" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Intellectual Property Rights
              </h2>
              <p>
                OpenMyPro and its licensors retain all right, title, and interest in and to the platform, including all associated software, trademarks, logos, and patents. You retain complete ownership of all data, client files, and practice records you upload to the platform.
              </p>
            </section>

            <section id="liability" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Limitation of Liability &amp; SLA
              </h2>
              <p>
                To the maximum extent permitted by applicable law, OpenMyPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. For Enterprise plans, our Service Level Agreement guarantees 99.99% monthly uptime, backed by proportional service credits.
              </p>
            </section>

            <section id="termination" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Termination &amp; Suspension
              </h2>
              <p>
                We reserve the right to suspend or terminate your account upon written notice if you materially breach these Terms. You may terminate your account at any time by exporting your data and deleting your account through the settings dashboard.
              </p>
            </section>

            <section id="governing" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any legal claim arising from these Terms will be resolved through confidential binding arbitration in San Francisco, CA.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage
