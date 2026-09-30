import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Sparkles, Calendar, Tag, ArrowRight, CheckCircle2, Zap, Shield, Bug } from 'lucide-react'

const UpdatesPage = () => {
  const [filter, setFilter] = useState('all')

  const releases = [
    {
      version: 'v2.4.0',
      date: 'September 2026',
      title: 'AI Smart Assistant & Predictive Scheduling',
      badge: 'Major Release',
      badgeColor: 'bg-blue-100 text-blue-700',
      summary:
        'Introduced intelligent automated client outreach, real-time cancellation auto-fill, and multi-currency billing improvements.',
      items: [
        {
          type: 'new',
          label: 'Feature',
          text: 'AI-assisted appointment intake forms that adapt dynamically to client responses.',
        },
        {
          type: 'perf',
          label: 'Performance',
          text: 'Optimized search index queries with 40% reduction in database response latency.',
        },
        {
          type: 'security',
          label: 'Security',
          text: 'Implemented hardware security key (WebAuthn/FIDO2) two-factor authentication.',
        },
      ],
    },
    {
      version: 'v2.3.2',
      date: 'August 2026',
      title: 'Enhanced Multi-Location Practice Management',
      badge: 'Improvement',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      summary:
        'Expanded centralized dashboards for practices operating across multiple branches or mobile service units.',
      items: [
        {
          type: 'new',
          label: 'Feature',
          text: 'Multi-timezone client scheduling with automatic local timezone conversion.',
        },
        {
          type: 'fix',
          label: 'Bug Fix',
          text: 'Fixed edge case where recurring calendar blocks occasionally failed to sync with Outlook 365.',
        },
      ],
    },
    {
      version: 'v2.2.0',
      date: 'June 2026',
      title: 'Global Payments & Automated Invoice Reconciliation',
      badge: 'Feature Pack',
      badgeColor: 'bg-purple-100 text-purple-700',
      summary:
        'Added native Stripe Elements support for 35+ regional payment methods, automated receipt dispatch, and QuickBooks sync.',
      items: [
        {
          type: 'new',
          label: 'Feature',
          text: 'One-click deposit collection upon appointment booking with automatic refund rules.',
        },
        {
          type: 'perf',
          label: 'Performance',
          text: 'Edge-rendered client booking portals with 98+ Google Lighthouse performance rating.',
        },
      ],
    },
  ]

  const roadmapItems = [
    {
      quarter: 'Q4 2026',
      title: 'Native Mobile Apps (iOS & Android)',
      desc: 'Dedicated mobile apps with offline synchronization and biometric sign-in.',
      status: 'In Development',
    },
    {
      quarter: 'Q1 2027',
      title: 'Voice-Activated Dictation for Session Notes',
      desc: 'Real-time HIPAA-compliant AI speech-to-structured-notes converter.',
      status: 'Planned',
    },
    {
      quarter: 'Q2 2027',
      title: 'Custom Client Mobile Portal White-labeling',
      desc: 'Offer your own branded mobile app directly on the App Store & Google Play.',
      status: 'Researching',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Product Changelog"
        title="What's New in"
        highlight="OpenMyPro"
        description="Stay up to date with new features, performance enhancements, and bug fixes rolled out to the platform every month."
        breadcrumbs={[{ label: 'Updates' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Release Timeline */}
          <div className="space-y-12">
            {releases.map((rel, index) => (
              <motion.div
                key={rel.version}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 border-l-2 border-sky-200"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0284c7] ring-4 ring-sky-100" />

                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl sm:text-2xl font-black text-gray-900">
                        {rel.version}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${rel.badgeColor}`}
                      >
                        {rel.badge}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{rel.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {rel.summary}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2">
                    {rel.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700"
                      >
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mt-0.5 ${
                            item.type === 'new'
                              ? 'bg-emerald-100 text-emerald-700'
                              : item.type === 'perf'
                              ? 'bg-amber-100 text-amber-800'
                              : item.type === 'security'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="leading-snug">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Roadmap Section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Looking Ahead
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Upcoming Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmapItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-sky-700">{item.quarter}</span>
                    <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full font-medium text-gray-600">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdatesPage
