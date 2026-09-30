import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Check, HelpCircle, ArrowRight, Zap, Shield, Sparkles, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  const plans = [
    {
      name: 'Starter',
      badge: 'Solo Practitioners',
      description: 'Essential workflow tools for independent professionals.',
      monthlyPrice: 24,
      annualPrice: 19,
      features: [
        'Up to 2 team seats',
        'Unlimited appointment scheduling',
        'Standard client CRM',
        'Automated email notifications',
        '5 GB secure document cloud',
        'Community support',
      ],
      popular: false,
      buttonText: 'Start 14-Day Free Trial',
      buttonStyle: 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-400',
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      description: 'Advanced automation, team collaboration, and priority analytics.',
      monthlyPrice: 59,
      annualPrice: 49,
      features: [
        'Up to 10 team seats',
        'Full AI Smart Assistant features',
        'Custom workflow triggers & webhooks',
        'Automated SMS & WhatsApp reminders',
        '100 GB encrypted storage',
        'Custom branding & client portal',
        'Priority 24/7 email & chat support',
      ],
      popular: true,
      buttonText: 'Start 14-Day Free Trial',
      buttonStyle: 'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-lg',
    },
    {
      name: 'Enterprise',
      badge: 'Large Organizations',
      description: 'Maximum security, custom SLA, and dedicated onboarding managers.',
      monthlyPrice: 179,
      annualPrice: 149,
      features: [
        'Unlimited team seats & practices',
        'Dedicated account director',
        'Custom API limits & edge endpoints',
        'Single Sign-On (SAML / Okta)',
        'HIPAA & SOC 2 compliance pack',
        '99.99% Uptime guarantee SLA',
        'Custom tailored contract & billing',
      ],
      popular: false,
      buttonText: 'Contact Enterprise Sales',
      buttonStyle: 'bg-gray-900 hover:bg-black text-white',
    },
  ]

  const faqs = [
    {
      q: 'Can I change my plan or cancel at any time?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription whenever you like directly from your account settings. If you cancel, your access continues until the end of your current billing period.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Absolutely. Every plan comes with an unconditional 14-day free trial. No credit card is required to sign up and test all features.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank wire transfers for Enterprise annual accounts.',
    },
    {
      q: 'Are my clients’ sensitive data and health records protected?',
      a: 'Yes. All data stored in OpenMyPro is encrypted in transit using TLS 1.3 and at rest with 256-bit AES encryption. We maintain strict compliance with SOC 2 Type II, GDPR, and HIPAA standards.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Simple & Transparent"
        title="Predictable Pricing for"
        highlight="Growing Teams"
        description="Choose the plan that fits your business needs. Every tier includes our 14-day free trial with zero risk."
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      {/* Billing Interval Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm font-semibold cursor-pointer ${
                !isAnnual ? 'text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-[#0284c7] rounded-full p-1 transition-colors relative"
              aria-label="Toggle annual billing"
            >
              <motion.div
                layout
                className={`w-6 h-6 bg-white rounded-full shadow-md ${
                  isAnnual ? 'ml-auto' : 'mr-auto'
                }`}
              />
            </button>

            <span
              className={`text-sm font-semibold cursor-pointer flex items-center space-x-1.5 ${
                isAnnual ? 'text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual Billing</span>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, index) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                    plan.popular
                      ? 'border-2 border-[#0284c7] shadow-2xl bg-gradient-to-b from-sky-50/40 via-white to-white ring-4 ring-sky-500/10'
                      : 'border border-gray-200 shadow-md bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0284c7] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                        {!plan.popular && plan.badge}
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8 pb-6 border-b border-gray-100">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          / month
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {isAnnual
                          ? 'Billed annually ($' + price * 12 + '/yr)'
                          : 'Billed monthly'}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3.5 mb-8">
                      <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                        Included Features:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-600"
                        >
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/help"
                    className={`w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm transition-all duration-200 block ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Have questions about billing, plans, or features? We're here to help.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between font-semibold text-gray-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
