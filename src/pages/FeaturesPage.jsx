import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  CheckCircle2,
  Workflow,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'speed', label: 'Speed & Scale' },
    { id: 'security', label: 'Security & Trust' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'team', label: 'Teamwork' },
  ]

  const allFeatures = [
    {
      category: 'speed',
      icon: Zap,
      title: 'Ultra-Low Latency Engine',
      desc: 'Sub-50ms query responses powered by globally distributed edge caching and optimized indexes.',
      badge: 'Performance',
      metrics: '4x faster throughput',
      color: 'from-amber-400 to-orange-500',
    },
    {
      category: 'security',
      icon: Shield,
      title: 'Zero-Trust Architecture',
      desc: 'End-to-end payload encryption with role-based fine-grained permission controls at every API touchpoint.',
      badge: 'Enterprise Security',
      metrics: '99.99% verified uptime',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      category: 'ai',
      icon: Sparkles,
      title: 'Smart Automation Assistant',
      desc: 'Automate recurring client follow-ups, invoice reconciliations, and appointment reminders seamlessly.',
      badge: 'New AI v2.4',
      metrics: 'Save 14 hrs/week',
      color: 'from-sky-400 to-blue-600',
    },
    {
      category: 'team',
      icon: Users,
      title: 'Multi-Tenant Collaboration',
      desc: 'Shared calendars, collaborative client notes, and real-time team presence tracking.',
      badge: 'Teamwork',
      metrics: 'Unlimited workspaces',
      color: 'from-purple-400 to-pink-500',
    },
    {
      category: 'speed',
      icon: Globe,
      title: 'Multi-Region Edge Nodes',
      desc: 'Serve clients globally with compliant data residency across 28 global data center regions.',
      badge: 'Global Scale',
      metrics: '150+ countries',
      color: 'from-indigo-400 to-blue-600',
    },
    {
      category: 'security',
      icon: Lock,
      title: 'Granular Data Governance',
      desc: 'Automated audit logs, SOC 2 compliance reporting, and GDPR-compliant data export mechanisms.',
      badge: 'Privacy',
      metrics: '256-bit AES encryption',
      color: 'from-rose-400 to-red-500',
    },
    {
      category: 'ai',
      icon: Cpu,
      title: 'Predictive Scheduling',
      desc: 'Machine-learning models predict cancellation risks and auto-fill open slots with waitlisted leads.',
      badge: 'AI Smart',
      metrics: '+28% retained revenue',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'team',
      icon: Workflow,
      title: 'Custom Workflow Pipelines',
      desc: 'Build triggers and multi-step actions without writing a single line of backend code.',
      badge: 'Workflow',
      metrics: '500+ prebuilt templates',
      color: 'from-teal-400 to-emerald-600',
    },
  ]

  const filteredFeatures =
    activeTab === 'all'
      ? allFeatures
      : allFeatures.filter((f) => f.category === activeTab)

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Platform Capabilities"
        title="Engineered for"
        highlight="Maximum Impact"
        description="Explore the full suite of intelligent tools designed to streamline professional operations, automate routine workflows, and elevate client satisfaction."
        breadcrumbs={[{ label: 'Features' }]}
      />

      {/* Category Filter Tabs */}
      <section className="py-8 bg-gray-50/70 border-b border-gray-100 sticky top-16 lg:top-20 z-20 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {filteredFeatures.map((feat, index) => {
              const Icon = feat.icon
              return (
                <motion.div
                  layout
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center text-white shadow-md`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{feat.metrics}</span>
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Why Professionals Choose OpenMyPro
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Comparing standard legacy tools vs. OpenMyPro modern intelligence
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-100/70 p-4 font-bold text-xs sm:text-sm text-gray-700 border-b border-gray-200">
              <div>Capability</div>
              <div className="text-center text-gray-500">Legacy Systems</div>
              <div className="text-center text-blue-600">OpenMyPro</div>
            </div>
            {[
              ['Real-time sync latency', '5 - 15 minutes', '< 50 milliseconds'],
              ['AI Workflow automation', 'Manual or addon', 'Built-in Native'],
              ['Team seat permissions', 'Rigid, per-module', 'Fine-grained RBAC'],
              ['Uptime SLA Guarantee', '99.0%', '99.99% Enterprise'],
              ['Security certifications', 'Basic SSL only', 'SOC 2 + GDPR + HIPAA'],
            ].map(([cap, legacy, pro], i) => (
              <div
                key={i}
                className="grid grid-cols-3 p-4 text-xs sm:text-sm border-b border-gray-100 last:border-0 items-center"
              >
                <div className="font-medium text-gray-800">{cap}</div>
                <div className="text-center text-gray-500">{legacy}</div>
                <div className="text-center font-bold text-blue-600 bg-blue-50/50 py-1 rounded-lg">
                  {pro}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
