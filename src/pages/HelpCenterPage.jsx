import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  Search,
  CreditCard,
  Calendar,
  UserCheck,
  ShieldCheck,
  Smartphone,
  Layers,
  ChevronDown,
  MessageSquare,
  Mail,
  HelpCircle,
} from 'lucide-react'

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const categories = [
    {
      icon: Calendar,
      title: 'Scheduling & Calendars',
      desc: 'Sync Google/Outlook, set buffer times, and manage recurring slots.',
      count: '14 articles',
    },
    {
      icon: CreditCard,
      title: 'Billing & Invoicing',
      desc: 'Set up Stripe, configure automated receipts, deposits, and refunds.',
      count: '11 articles',
    },
    {
      icon: UserCheck,
      title: 'Client Management (CRM)',
      desc: 'Client intake forms, session notes, tags, and communication logs.',
      count: '19 articles',
    },
    {
      icon: ShieldCheck,
      title: 'Security & HIPAA',
      desc: 'Two-factor auth, role permissions, and compliance certificates.',
      count: '8 articles',
    },
    {
      icon: Smartphone,
      title: 'SMS & Email Notifications',
      desc: 'Custom reminder templates, delivery delivery logs, and WhatsApp alerts.',
      count: '12 articles',
    },
    {
      icon: Layers,
      title: 'Integrations & Webhooks',
      desc: 'Connect Zapier, Zoom video meetings, QuickBooks, and Slack.',
      count: '16 articles',
    },
  ]

  const faqs = [
    {
      q: 'How do I synchronize my existing Google or Outlook Calendar?',
      a: 'Go to Settings > Integrations > Calendar Sync. Click Connect on Google Workspace or Microsoft 365, grant calendar permissions, and select which calendar to use for availability checking and event dispatch.',
    },
    {
      q: 'Can clients cancel or reschedule appointments on their own?',
      a: 'Yes. Every confirmation email and SMS includes a secure, one-click self-serve link. You can configure your cancellation policy cutoff window (e.g. at least 24 hours in advance) under Settings > Booking Rules.',
    },
    {
      q: 'How do automated SMS reminders work?',
      a: 'OpenMyPro includes automated SMS delivery in all Pro and Enterprise plans. Reminders can be scheduled 24 hours, 2 hours, or 15 minutes before the session, with automatic client confirmation (Reply C to confirm).',
    },
    {
      q: 'How do I add additional practitioners or staff members?',
      a: 'Team administrators can invite new members via Settings > Team & Permissions. You can assign roles such as Solo Practitioner, Front Desk Receptionist, or Billing Admin with customized calendar and client access.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Support & Knowledge Base"
        title="How Can We"
        highlight="Help You Today?"
        description="Search our library of troubleshooting guides, video tutorials, and frequently asked questions."
        breadcrumbs={[{ label: 'Help Center' }]}
      />

      {/* Main Search Bar */}
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, topic, or error message..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-sky-50 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0284c7] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="text-[11px] font-bold text-sky-600 uppercase tracking-wider pt-2 border-t border-gray-100">
                    {cat.count}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top FAQs Accordion */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Popular Answers
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Need more help? Contact cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center space-y-2">
              <MessageSquare className="w-8 h-8 text-[#0284c7] mx-auto" />
              <h4 className="font-bold text-gray-900 text-sm">24/7 Live Chat</h4>
              <p className="text-xs text-gray-500">
                Average reply time under 3 minutes
              </p>
              <button
                onClick={() => alert('Starting live chat session...')}
                className="mt-2 px-4 py-2 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg text-xs font-bold transition-colors"
              >
                Start Conversation
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center space-y-2">
              <Mail className="w-8 h-8 text-teal-600 mx-auto" />
              <h4 className="font-bold text-gray-900 text-sm">Email Support</h4>
              <p className="text-xs text-gray-500">
                support@openmypro.com
              </p>
              <a
                href="mailto:support@openmypro.com"
                className="mt-2 inline-block px-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg text-xs font-bold transition-colors"
              >
                Send Support Ticket
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenterPage
