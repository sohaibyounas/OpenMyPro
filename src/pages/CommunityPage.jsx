import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  Users2,
  MessageCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Award,
  Globe,
  Share2,
} from 'lucide-react'

const CommunityPage = () => {
  const stats = [
    { value: '25,000+', label: 'Active Members' },
    { value: '120+', label: 'Countries Represented' },
    { value: '1,400+', label: 'Monthly Discussions' },
    { value: '98%', label: 'Questions Answered by Peers' },
  ]

  const channels = [
    {
      name: 'OpenMyPro Discord Community',
      desc: 'Real-time discussions, troubleshooting channels, template sharing, and feature sneaks.',
      badge: '18k Members',
      iconColor: 'bg-indigo-600',
      action: 'Join Discord Server',
      link: 'https://discord.com',
    },
    {
      name: 'Practitioner Mastermind Forum',
      desc: 'Deep long-form threads on practice growth, pricing strategies, and local marketing tips.',
      badge: 'Public Forum',
      iconColor: 'bg-[#0284c7]',
      action: 'Browse Discussions',
      link: '#',
    },
    {
      name: 'Open Source Community & Plugins',
      desc: 'Contribute community integrations, webhook starters, and open-source UI widgets on GitHub.',
      badge: 'Developer Hub',
      iconColor: 'bg-gray-900',
      action: 'View GitHub Repos',
      link: 'https://github.com',
    },
  ]

  const upcomingEvents = [
    {
      date: 'OCT 12, 2026',
      time: '11:00 AM EDT',
      title: 'Automating Clinic Operations: From 20 to 100 Weekly Bookings',
      speaker: 'Dr. Michael Hansen, Sports Rehab Clinic Founder',
      type: 'Live Masterclass',
    },
    {
      date: 'OCT 26, 2026',
      time: '2:00 PM EDT',
      title: 'OpenMyPro Q4 Product Sneak Peek & Community Q&A',
      speaker: 'Elena Rostova & Marcus Vance (Product Team)',
      type: 'Product AMA',
    },
    {
      date: 'NOV 09, 2026',
      time: '1:00 PM EDT',
      title: 'HIPAA Compliance & Zero-Trust Cloud: What Practitioners Must Know',
      speaker: 'Sarah Jenkins, Privacy & Compliance Legal Director',
      type: 'Compliance Workshop',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Connect & Grow"
        title="Join the Global"
        highlight="Practitioner Community"
        description="Connect with thousands of wellness providers, medical practitioners, and service leaders. Share best practices, exchange templates, and grow together."
        breadcrumbs={[{ label: 'Community' }]}
      />

      {/* Community Stats Banner */}
      <section className="py-12 bg-[#0284c7] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black">{s.value}</div>
                <div className="text-xs sm:text-sm text-sky-100 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Where Our Community Gathers
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Choose your favorite platform to collaborate with peers and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((ch, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-gray-200/90 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${ch.iconColor} text-white rounded-2xl flex items-center justify-center shadow-md`}
                    >
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{ch.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <a
                    href={ch.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>{ch.action}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events / Webinars */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Learn Live
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Upcoming Community Masterclasses & AMAs
            </h2>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-sky-50 border border-sky-100 text-[#0284c7] flex flex-col items-center justify-center flex-shrink-0 font-bold">
                    <span className="text-xs">{evt.date.split(',')[0]}</span>
                    <span className="text-[10px] text-gray-500 font-normal">
                      {evt.time.split(' ')[0]}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                      {evt.type}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 mt-1">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Speaker: {evt.speaker}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => alert('RSVP confirmed for ' + evt.title)}
                  className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-xl whitespace-nowrap self-start sm:self-auto transition-colors"
                >
                  Register Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage
