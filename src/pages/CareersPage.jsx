import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  Laptop,
  Heart,
  BookOpen,
  Plane,
  Clock,
  Sparkles,
  MapPin,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react'

const CareersPage = () => {
  const [selectedDept, setSelectedDept] = useState('all')
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const perks = [
    {
      icon: Laptop,
      title: '100% Remote-First Culture',
      desc: 'Work from anywhere in the world. We equip you with high-end MacBooks and home-office setups.',
    },
    {
      icon: Heart,
      title: 'Premium Healthcare & Mental Wellness',
      desc: 'Comprehensive medical, dental, and vision coverage for you and your dependents.',
    },
    {
      icon: BookOpen,
      title: '$3,500 Annual Growth Budget',
      desc: 'Attend global conferences, buy books, or enroll in certified training programs.',
    },
    {
      icon: Plane,
      title: 'Twice-Yearly Company Retreats',
      desc: 'Past team meetups in Lisbon, Tokyo, and Denver to connect, brainstorm, and celebrate.',
    },
    {
      icon: Clock,
      title: 'Unlimited Flexible PTO',
      desc: 'We trust you to take the rest and personal time you need to maintain healthy balance.',
    },
    {
      icon: Sparkles,
      title: 'Competitive Equity Grants',
      desc: 'Every full-time team member participates directly in our collective company upside.',
    },
  ]

  const jobs = [
    {
      id: 'sr-fe',
      title: 'Senior Frontend Engineer (React / Tailwind)',
      dept: 'engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$135,000 - $175,000 + Equity',
      desc: 'Lead the architecture of our next-gen client portal and interactive calendar scheduling interfaces.',
    },
    {
      id: 'staff-be',
      title: 'Staff Backend Systems Engineer (Go / Node)',
      dept: 'engineering',
      location: 'Remote (US / Europe)',
      type: 'Full-time',
      salary: '$160,000 - $210,000 + Equity',
      desc: 'Scale our real-time synchronization engine and distributed edge cache across 28 global regions.',
    },
    {
      id: 'prod-des',
      title: 'Senior Product Designer (Design Systems)',
      dept: 'design',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$120,000 - $155,000 + Equity',
      desc: 'Craft intuitive, accessible workflows and mobile experiences that practitioners adore.',
    },
    {
      id: 'ai-eng',
      title: 'Machine Learning / AI Automation Engineer',
      dept: 'engineering',
      location: 'Remote (US / Canada)',
      type: 'Full-time',
      salary: '$150,000 - $195,000 + Equity',
      desc: 'Train and fine-tune models for intelligent client follow-ups and schedule auto-optimization.',
    },
    {
      id: 'cust-suc',
      title: 'Customer Success & Onboarding Specialist',
      dept: 'success',
      location: 'Remote (EMEA / APAC)',
      type: 'Full-time',
      salary: '$75,000 - $95,000',
      desc: 'Ensure clinic owners and solo practitioners successfully migrate their client databases with delight.',
    },
    {
      id: 'growth-mkt',
      title: 'Product Marketing Manager',
      dept: 'marketing',
      location: 'Remote (US / Europe)',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      desc: 'Shape our launch messaging, customer case studies, and positioning for independent practices.',
    },
  ]

  const departments = [
    { id: 'all', label: 'All Openings' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Product & Design' },
    { id: 'success', label: 'Customer Success' },
    { id: 'marketing', label: 'Marketing' },
  ]

  const filteredJobs =
    selectedDept === 'all'
      ? jobs
      : jobs.filter((j) => j.dept === selectedDept)

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Join Our Crew"
        title="Help Build the Future of"
        highlight="Professional Work"
        description="We're a fast-growing, passionate, remote-first team empowering thousands of practitioners around the globe."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Perks Grid */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Why You'll Love Working Here
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Comprehensive benefits designed to support your work, life, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 bg-sky-50 text-[#0284c7] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Open Positions ({filteredJobs.length})
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Explore roles across engineering, product, success, and marketing.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedDept === dept.id
                      ? 'bg-[#0284c7] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -2 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full">
                      {job.dept}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
                    {job.desc}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 pt-1">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="font-semibold text-emerald-600">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job)
                    setApplicationSubmitted(false)
                  }}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center justify-center space-x-1.5 self-start md:self-auto shadow-sm"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              {applicationSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Application Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you for applying to <strong>{selectedJob.title}</strong>. Our hiring team will review your profile and be in touch within 3 business days.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="mt-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                      Application
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {selectedJob.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {selectedJob.location} • {selectedJob.type}
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setApplicationSubmitted(true)
                    }}
                    className="space-y-3 pt-2"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Brief Note / Cover Note
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Why are you interested in this role at OpenMyPro?"
                        className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-sm font-bold shadow-md transition-all mt-2"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CareersPage
