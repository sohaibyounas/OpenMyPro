import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Search, Clock, Calendar, ArrowRight, User, Sparkles, CheckCircle2 } from 'lucide-react'

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [emailInput, setEmailInput] = useState('')

  const tags = [
    { id: 'all', label: 'All Articles' },
    { id: 'growth', label: 'Practice Growth' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'guides', label: 'Best Practices' },
    { id: 'security', label: 'Security & HIPAA' },
  ]

  const articles = [
    {
      id: 1,
      title: 'How Solo Practitioners Are Cutting Administrative Overhead by 65% Using AI Automations',
      excerpt:
        'A comprehensive guide to automating booking intake, cancellation waitlists, and client follow-ups without losing personal warmth.',
      tag: 'ai',
      tagLabel: 'AI & Automation',
      date: 'September 24, 2026',
      readTime: '6 min read',
      author: 'Alexander Wright',
      authorRole: 'CEO & Founder',
      featured: true,
    },
    {
      id: 2,
      title: 'The Anatomy of a High-Converting Client Booking Portal',
      excerpt:
        'From mobile-first layout to frictionless payment collection: UX tweaks that boosted client conversions by 34%.',
      tag: 'growth',
      tagLabel: 'Practice Growth',
      date: 'September 18, 2026',
      readTime: '5 min read',
      author: 'Marcus Vance',
      authorRole: 'Product & AI',
    },
    {
      id: 3,
      title: 'Navigating HIPAA & Data Privacy for Modern Digital Clinics in 2026',
      excerpt:
        'What every growing clinic owner needs to know about encryption at rest, BAA agreements, and client consent protocols.',
      tag: 'security',
      tagLabel: 'Security & HIPAA',
      date: 'September 10, 2026',
      readTime: '8 min read',
      author: 'Elena Rostova',
      authorRole: 'CTO',
    },
    {
      id: 4,
      title: 'Stopping No-Shows: Automated Reminders That Actually Get Respected',
      excerpt:
        'Why standard email notifications get ignored and how timed multi-channel SMS reminders drop no-show rates to under 2%.',
      tag: 'guides',
      tagLabel: 'Best Practices',
      date: 'August 28, 2026',
      readTime: '4 min read',
      author: 'Sophia Patel',
      authorRole: 'Customer Success',
    },
    {
      id: 5,
      title: 'Scaling from Solo Provider to a 10-Chair Multi-Disciplinary Practice',
      excerpt:
        'Real lessons, scheduling bottlenecks, and staff permission structures from an owner who expanded 3 clinics in 18 months.',
      tag: 'growth',
      tagLabel: 'Practice Growth',
      date: 'August 14, 2026',
      readTime: '7 min read',
      author: 'Alexander Wright',
      authorRole: 'CEO & Founder',
    },
    {
      id: 6,
      title: 'The Future of Real-Time Multi-Region Calendar Synchronization',
      excerpt:
        'Under the hood: how OpenMyPro uses edge workers and distributed state to eliminate scheduling collisions globally.',
      tag: 'ai',
      tagLabel: 'AI & Automation',
      date: 'August 02, 2026',
      readTime: '9 min read',
      author: 'Elena Rostova',
      authorRole: 'CTO',
    },
  ]

  const filteredArticles = articles.filter((art) => {
    const matchesTag = selectedTag === 'all' || art.tag === selectedTag
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Insights & Stories"
        title="Resources for"
        highlight="Modern Professionals"
        description="Expert advice, industry trends, and technical deep-dives to help you run a smoother, more profitable practice."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & topics..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {tags.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTag(t.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === t.id
                      ? 'bg-[#0284c7] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, index) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Article Header Image Placeholder with Gradient */}
                <div className="h-44 bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-100 p-6 flex flex-col justify-between relative">
                  <span className="self-start text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-sky-800 px-3 py-1 rounded-full shadow-sm">
                    {art.tagLabel}
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-gray-900 hover:text-[#0284c7] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-900">
                        {art.author}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {art.authorRole}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#0284c7] flex items-center space-x-1 group">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="mt-20 bg-gradient-to-br from-[#0284c7] to-[#0369a1] rounded-3xl p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-xl">
            <Sparkles className="w-8 h-8 text-sky-200 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Subscribe to The Modern Pro Dispatch
            </h3>
            <p className="text-sm text-sky-100 max-w-md mx-auto mb-6">
              Get our monthly curation of operational tactics, automation formulas, and product announcements.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>You're subscribed! Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (emailInput) setSubscribed(true)
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none placeholder-gray-400 bg-white"
                />
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-all whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
