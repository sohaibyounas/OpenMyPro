import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Server,
  FileCheck2,
  AlertTriangle,
  Bug,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SecurityPage = () => {
  const certifications = [
    {
      title: 'SOC 2 Type II Certified',
      desc: 'Annual independent audit evaluating security, availability, and confidentiality trust principles.',
      badge: 'Certified',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'HIPAA & HITECH Ready',
      desc: 'Business Associate Agreements (BAAs) available for healthcare practitioners handling electronic protected health information (ePHI).',
      badge: 'Healthcare',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'ISO/IEC 27001 Aligned',
      desc: 'Adherence to comprehensive global information security management frameworks and risk treatment policies.',
      badge: 'Global Standard',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'GDPR & CCPA Compliant',
      desc: 'Full data subject access rights, automated export mechanisms, and lawful processing transparency.',
      badge: 'Privacy',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
  ]

  const securityPillars = [
    {
      icon: Lock,
      title: 'Encryption In Transit & At Rest',
      desc: 'All customer data traveling across the internet is encrypted using TLS 1.3 with modern cipher suites. Data at rest is secured using AES-256 envelope encryption with rotated AWS KMS keys.',
    },
    {
      icon: KeyRound,
      title: 'Advanced Access Control & 2FA',
      desc: 'Mandatory multi-factor authentication (MFA) support including hardware security keys (FIDO2/WebAuthn), SAML 2.0 Single Sign-On (Okta, Azure AD), and role-based permissions.',
    },
    {
      icon: Server,
      title: 'Isolated Multi-Tenant Architecture',
      desc: 'Strict logical data isolation ensures no cross-tenant query contamination. Continuous automated database snapshotting with geo-replicated hot standby recovery.',
    },
    {
      icon: AlertTriangle,
      title: 'DDoS & WAF Protection',
      desc: 'Global cloud edge distribution with intelligent Layer 7 Web Application Firewalls (WAF) to mitigate volumetric DDoS attacks and malicious bots.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Enterprise Trust & Protection"
        title="Security Built into Every"
        highlight="Single Layer"
        description="Our mission is to provide independent practitioners and large clinics with enterprise-grade protection, HIPAA readiness, and unyielding data privacy."
        breadcrumbs={[{ label: 'Security' }]}
      />

      {/* Certifications Grid */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Compliance &amp; Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Independent Audits &amp; Industry Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <ShieldCheck className="w-7 h-7 text-[#0284c7]" />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cert.badgeColor}`}
                    >
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Current</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture Pillars */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Technical Security Pillars
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              How our infrastructure safeguards client appointments and confidential clinical records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex items-start space-x-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bug Bounty Program Card */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Bug className="w-4 h-4" />
                <span>Responsible Disclosure Program</span>
              </div>
              <h3 className="text-2xl font-bold">
                Found a potential vulnerability?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                We reward ethical security researchers who report potential vulnerabilities in accordance with our coordinated vulnerability disclosure policy.
              </p>
            </div>

            <a
              href="mailto:security@openmypro.com"
              className="px-6 py-3 bg-white text-gray-900 hover:bg-sky-50 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
            >
              Report Vulnerability
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityPage
