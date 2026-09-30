import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Search, CheckCircle2, Plus, ArrowRight, ExternalLink, Sparkles } from 'lucide-react'

const IntegrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [connectedApps, setConnectedApps] = useState(['Slack', 'Google Workspace', 'Stripe'])

  const categories = [
    { id: 'all', label: 'All Integrations' },
    { id: 'communication', label: 'Communication' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'payments', label: 'Billing & Payments' },
    { id: 'crm', label: 'CRM & Sales' },
    { id: 'developer', label: 'Developer Tools' },
  ]

  const integrations = [
    {
      name: 'Slack',
      category: 'communication',
      description: 'Receive instant appointment alerts and client updates in your dedicated channels.',
      iconBg: 'bg-emerald-500',
      iconLetter: 'S',
      badge: 'Popular',
    },
    {
      name: 'Google Workspace',
      category: 'productivity',
      description: 'Two-way sync with Google Calendar, Meet, and Gmail for automated scheduling.',
      iconBg: 'bg-red-500',
      iconLetter: 'G',
      badge: 'Core',
    },
    {
      name: 'Zoom',
      category: 'communication',
      description: 'Automatically generate unique video conference links for virtual client sessions.',
      iconBg: 'bg-blue-500',
      iconLetter: 'Z',
      badge: 'Video',
    },
    {
      name: 'Stripe',
      category: 'payments',
      description: 'Accept seamless credit card, Apple Pay, and subscription payments instantly.',
      iconBg: 'bg-indigo-600',
      iconLetter: 'S',
      badge: 'Payments',
    },
    {
      name: 'Zapier',
      category: 'productivity',
      description: 'Connect OpenMyPro with 5,000+ external apps using custom webhook recipes.',
      iconBg: 'bg-orange-500',
      iconLetter: 'Z',
      badge: 'Automation',
    },
    {
      name: 'HubSpot',
      category: 'crm',
      description: 'Synchronize contact lifecycle stages, deals, and communication history effortlessly.',
      iconBg: 'bg-amber-600',
      iconLetter: 'H',
      badge: 'CRM',
    },
    {
      name: 'Salesforce',
      category: 'crm',
      description: 'Enterprise grade bidirectional sync with Salesforce accounts, leads, and custom objects.',
      iconBg: 'bg-sky-500',
      iconLetter: 'S',
      badge: 'Enterprise',
    },
    {
      name: 'Notion',
      category: 'productivity',
      description: 'Export structured client summaries, session debriefs, and project specs directly.',
      iconBg: 'bg-gray-800',
      iconLetter: 'N',
      badge: 'Notes',
    },
    {
      name: 'GitHub',
      category: 'developer',
      description: 'Trigger deployment events, webhook dispatches, and sync developer milestones.',
      iconBg: 'bg-gray-900',
      iconLetter: 'G',
      badge: 'DevOps',
    },
    {
      name: 'QuickBooks Online',
      category: 'payments',
      description: 'Automate bookkeeping, tax breakdowns, invoices, and expense reconciliations.',
      iconBg: 'bg-green-600',
      iconLetter: 'Q',
      badge: 'Accounting',
    },
    {
      name: 'Microsoft 365',
      category: 'productivity',
      description: 'Native Outlook calendar sync and Microsoft Teams video conferencing support.',
      iconBg: 'bg-blue-600',
      iconLetter: 'M',
      badge: 'Enterprise',
    },
    {
      name: 'Figma',
      category: 'productivity',
      description: 'Embed live design proofs and creative deliverables directly within client portals.',
      iconBg: 'bg-purple-600',
      iconLetter: 'F',
      badge: 'Creative',
    },
  ]

  const toggleConnect = (name) => {
    setConnectedApps((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    )
  }

  const filteredIntegrations = integrations.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Ecosystem & APIs"
        title="Connect Tools You"
        highlight="Already Love"
        description="Power your workflow with pre-built connectors to top collaboration, communication, accounting, and marketing platforms."
        breadcrumbs={[{ label: 'Integrations' }]}
      />

      {/* Filter and Search Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search integrations..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#0284c7] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item, index) => {
              const isConnected = connectedApps.includes(item.name)
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${item.iconBg} text-white font-black text-xl rounded-xl flex items-center justify-center shadow-md`}
                      >
                        {item.iconLetter}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed min-h-[44px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleConnect(item.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                        isConnected
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
                      }`}
                    >
                      {isConnected ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Connected</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Connect</span>
                        </>
                      )}
                    </button>
                    <span className="text-xs text-gray-400 font-medium">
                      OAuth 2.0
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-semibold">No integrations match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-2 text-sm text-blue-600 underline font-medium"
              >
                Clear search and filters
              </button>
            </div>
          )}

          {/* Request Integration Card */}
          <div className="mt-16 bg-gradient-to-r from-sky-50 via-blue-50 to-teal-50 border border-sky-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
            <Sparkles className="w-8 h-8 text-sky-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Need a custom integration or API webhook?
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
              Our open REST and GraphQL APIs make connecting internal ERPs, proprietary databases, and legacy systems simple.
            </p>
            <a
              href="/api"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-md"
            >
              <span>Explore API Reference</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntegrationsPage
