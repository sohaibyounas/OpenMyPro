import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Target, Heart, Award, Users, Globe2, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutUsPage = () => {
  const team = [
    {
      name: 'Alexander Wright',
      role: 'Co-Founder & CEO',
      bio: 'Former VP of Product at HealthTech Global. Passionate about empowering independent practitioners.',
      avatar: 'AW',
      color: 'bg-blue-600',
    },
    {
      name: 'Elena Rostova',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Google Cloud Principal Architect. Pioneer in distributed low-latency database engines.',
      avatar: 'ER',
      color: 'bg-teal-600',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Product & AI',
      bio: '12+ years experience building human-centric workflow automation and conversational AI tools.',
      avatar: 'MV',
      color: 'bg-purple-600',
    },
    {
      name: 'Sophia Patel',
      role: 'Head of Customer Experience',
      bio: 'Champions our 98% customer satisfaction score with 24/7 empathetic global support.',
      avatar: 'SP',
      color: 'bg-amber-600',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Obsessed with Practitioner Success',
      desc: 'Every feature we build directly saves hours of administrative overhead for hardworking professionals.',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromising Trust & Security',
      desc: 'We safeguard client confidentiality and private health records with zero-tolerance security standards.',
    },
    {
      icon: Heart,
      title: 'Human-Centered Simplicity',
      desc: 'Complex enterprise software doesn’t have to feel clunky. We design experiences that feel lightweight and joyful.',
    },
    {
      icon: Globe2,
      title: 'Global Inclusivity',
      desc: 'Supporting businesses in 150+ countries with localized scheduling, multiple languages, and regional currencies.',
    },
  ]

  const milestones = [
    { year: '2021', title: 'Founded in San Francisco', desc: 'Started with 3 engineers seeking to fix fragmented booking systems.' },
    { year: '2023', title: 'Crossed 10,000 Active Users', desc: 'Expanded globally with multi-region edge deployment.' },
    { year: '2025', title: 'Launched AI Smart Engine', desc: 'Introduced automated predictive scheduling and natural language workflows.' },
    { year: '2026', title: '50,000+ Teams Worldwide', desc: 'Serving independent wellness, medical, legal, and creative professionals.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Our Story & Vision"
        title="We're on a Mission to"
        highlight="Empower Pros"
        description="OpenMyPro builds intelligent, effortless tools that help modern practitioners, clinics, and service providers thrive without administrative burnout."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Mission / Vision Statement */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
            Our Purpose
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            "We believe professionals should spend their days doing what they love—delivering exceptional service to their clients—not wrestling with clunky software."
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From solo therapists and fitness studios to multi-location healthcare clinics and creative studios, OpenMyPro brings simplicity, speed, and intelligence to daily operations.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 bg-sky-50 text-[#0284c7] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Our Journey So Far
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-200 rounded-2xl text-center space-y-2 relative"
              >
                <div className="text-3xl font-black text-[#0284c7]">
                  {m.year}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{m.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Meet Our Leadership
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Driven by engineers, operators, and designers passionate about practitioner tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm space-y-3"
              >
                <div
                  className={`w-20 h-20 ${person.color} text-white font-black text-2xl rounded-full flex items-center justify-center mx-auto shadow-md`}
                >
                  {person.avatar}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {person.name}
                  </h3>
                  <div className="text-xs text-[#0284c7] font-semibold mt-0.5">
                    {person.role}
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/careers"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#0284c7] hover:underline"
            >
              <span>Want to build with us? View open positions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
