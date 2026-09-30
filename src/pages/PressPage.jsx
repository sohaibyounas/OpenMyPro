import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Download, ExternalLink, Mail, Award, FileText, CheckCircle2 } from 'lucide-react'

const PressPage = () => {
  const pressReleases = [
    {
      date: 'September 12, 2026',
      title: 'OpenMyPro Surpasses 50,000 Active Practitioners Globally and Announces Series B Growth Round',
      outlet: 'PR Newswire',
      summary: 'Funding led by Horizon Ventures will accelerate AI agent workflows, multi-currency localized checkout, and enterprise practice security features.',
    },
    {
      date: 'July 19, 2026',
      title: 'OpenMyPro Achieves Full SOC 2 Type II and HIPAA Compliance Attestations for Healthcare Practices',
      outlet: 'Security Wire',
      summary: 'Independent third-party audits verify OpenMyPro meets the highest standards for medical data isolation, encryption, and auditability.',
    },
    {
      date: 'March 04, 2026',
      title: 'OpenMyPro Launches Next-Generation AI Scheduling Engine to Eliminate Clinic No-Shows',
      outlet: 'TechCrunch Coverage',
      summary: 'The new predictive scheduling algorithm anticipates cancellations and rebalances appointments automatically in real time.',
    },
  ]

  const mediaMentions = [
    {
      quote: 'OpenMyPro is turning clunky practitioner software into an effortless, delight-driven workflow suite.',
      publication: 'TechCrunch',
    },
    {
      quote: 'Ranked in the top 10 fastest growing SaaS platforms for wellness and independent professional clinics.',
      publication: 'Forbes',
    },
    {
      quote: 'The AI scheduling engine solves the real pain point behind 30% of lost practitioner revenues.',
      publication: 'Wired',
    },
  ]

  const brandAssets = [
    {
      title: 'Logo Kit (PNG & SVG)',
      desc: 'Dark, light, and monochrome versions of the OpenMyPro mark and wordmark.',
      size: '4.2 MB ZIP',
    },
    {
      title: 'Brand Style Guidelines',
      desc: 'Color hex codes, typography rules, and co-branding usage dos and don’ts.',
      size: '2.1 MB PDF',
    },
    {
      title: 'Leadership Headshots',
      desc: 'High-resolution print and web headshots of our executive team.',
      size: '18.4 MB ZIP',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Press & Newsroom"
        title="OpenMyPro in the"
        highlight="Media"
        description="Official press releases, media assets, news mentions, and company announcements."
        breadcrumbs={[{ label: 'Press' }]}
      />

      {/* Media Mentions Quotes */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              As Seen In
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaMentions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <p className="text-sm sm:text-base text-gray-700 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="font-black text-gray-900 tracking-wider text-sm border-t border-gray-100 pt-3">
                  — {item.publication}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Recent Press Releases
          </h2>

          <div className="space-y-6">
            {pressReleases.map((pr, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    {pr.outlet}
                  </span>
                  <span>{pr.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {pr.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pr.summary}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => alert('Press release download initiated.')}
                    className="text-xs font-bold text-[#0284c7] hover:underline flex items-center space-x-1"
                  >
                    <span>Read Full Statement (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Download Banner */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Media Kit & Brand Assets
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Official logos, style manuals, and executive portraits for press publications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {brandAssets.map((asset, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <FileText className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-gray-900">
                    {asset.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {asset.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => alert(`Downloading ${asset.title}`)}
                    className="w-full py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download ({asset.size})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Press Inquiries */}
          <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 text-center space-y-2 max-w-xl mx-auto">
            <h4 className="font-bold text-gray-900 text-sm">Media Inquiries</h4>
            <p className="text-xs text-gray-600">
              For interviews, press questions, or event appearances, contact our media team at:
            </p>
            <a
              href="mailto:press@openmypro.com"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#0284c7] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>press@openmypro.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PressPage
