import { useState } from 'react'
import PageHero from '../components/PageHero'
import { ShieldCheck, Lock, Mail, Printer, Clock } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const [activeToc, setActiveToc] = useState('overview')

  const sections = [
    { id: 'overview', title: '1. Overview & Commitment' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Data' },
    { id: 'protection', title: '4. Data Protection & Encryption' },
    { id: 'sharing', title: '5. Third-Party Sharing' },
    { id: 'gdpr', title: '6. Your Rights (GDPR & CCPA)' },
    { id: 'retention', title: '7. Retention & Account Deletion' },
    { id: 'contact', title: '8. Contacting the DPO' },
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
        badge="Legal & Privacy"
        title="OpenMyPro"
        highlight="Privacy Policy"
        description="We believe privacy is a fundamental human right. Discover how we protect your personal and practitioner client records."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Table of Contents Sticky Sidebar (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Contents
                </span>
                <span className="text-[11px] text-gray-400">
                  Updated Sep 2026
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
                  <span>Print Document</span>
                </button>
              </div>
            </div>
          </div>

          {/* Legal Text Body (Cols 8) */}
          <div className="lg:col-span-8 prose prose-slate max-w-none text-gray-700 text-sm leading-relaxed space-y-8">
            <section id="overview" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Overview &amp; Commitment
              </h2>
              <p>
                OpenMyPro Inc. ("OpenMyPro", "we", "us", or "our") is dedicated to safeguarding your personal data and ensuring full transparency regarding how information is handled. This Privacy Policy governs your use of the OpenMyPro platform, client scheduling tools, website, and related services.
              </p>
              <p>
                We never monetize, sell, or rent your personal information or your clients' appointment histories to third-party data brokers or advertising networks.
              </p>
            </section>

            <section id="collection" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Account Identification:</strong> Full name, verified business email, practice specialty, phone number, and physical office addresses.
                </li>
                <li>
                  <strong>Billing Credentials:</strong> Tokenized payment identifiers processed through PCI-DSS Level 1 compliant vendors (e.g. Stripe).
                </li>
                <li>
                  <strong>Client Booking Information:</strong> Contact emails, phone numbers for SMS confirmations, appointment service types, and practitioner debrief notes.
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> Anonymized browser headers, IP addresses for geolocation verification, and session diagnostics.
                </li>
              </ul>
            </section>

            <section id="usage" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. How We Use Your Data
              </h2>
              <p>
                We process collected data solely to deliver, secure, and personalize the services you explicitly request, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Scheduling and dispatching automated appointment reminders.</li>
                <li>Facilitating client intake forms and processing digital payments.</li>
                <li>Enforcing account safety, detecting fraud, and mitigating brute-force intrusion attempts.</li>
                <li>Continuous technical optimizations and low-latency API delivery.</li>
              </ul>
            </section>

            <section id="protection" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Data Protection &amp; Encryption
              </h2>
              <p>
                Security is deeply woven into our product infrastructure. All data in transit is protected using TLS 1.3 cryptographic protocols. Stored data is protected with 256-bit AES envelope encryption. We conduct quarterly third-party penetration testing and maintain continuous SOC 2 Type II compliance controls.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Third-Party Service Providers
              </h2>
              <p>
                We collaborate strictly with certified subprocessors required to maintain platform operations (e.g., Amazon Web Services for cloud hosting, Twilio for SMS dispatch, and Stripe for card payments). All subprocessors are legally bound under strict Data Processing Agreements (DPAs).
              </p>
            </section>

            <section id="gdpr" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Your Rights (GDPR &amp; CCPA)
              </h2>
              <p>
                Regardless of your geographic location, OpenMyPro provides you with the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Request a machine-readable export of all your stored data.</li>
                <li>Rectify inaccurate or outdated account records.</li>
                <li>Request immediate and permanent erasure of your account and client data ("Right to be Forgotten").</li>
                <li>Revoke consent for optional telemetry and marketing communications.</li>
              </ul>
            </section>

            <section id="retention" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Retention &amp; Account Deletion
              </h2>
              <p>
                When an account is closed, all associated practitioner calendars, client intake submissions, and sensitive records are scheduled for permanent, unrecoverable deletion across our primary database clusters within 30 days.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Contacting Our Data Protection Officer (DPO)
              </h2>
              <p>
                If you have inquiries, privacy concerns, or wish to exercise your data subject rights, please contact our Data Protection Office directly:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs font-mono">
                OpenMyPro Privacy Office<br />
                Attn: Data Protection Officer<br />
                Email: privacy@openmypro.com<br />
                500 Howard Street, Suite 400, San Francisco, CA 94105
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
