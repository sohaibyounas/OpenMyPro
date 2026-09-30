import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Cookie, Check, ShieldCheck, Settings, Save } from 'lucide-react'

const CookiePolicyPage = () => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and locked
    performance: true,
    functional: true,
    marketing: false,
  })
  const [saved, setSaved] = useState(false)

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Strictly Necessary Cookies',
      desc: 'Essential for you to authenticate, access secure areas, and maintain active session security. These cannot be disabled.',
      required: true,
    },
    {
      id: 'performance',
      title: 'Performance & Analytics Cookies',
      desc: 'Help us monitor page load times, detect edge network latency, and continuously improve platform responsiveness.',
      required: false,
    },
    {
      id: 'functional',
      title: 'Functional Preferences Cookies',
      desc: 'Remember your selected timezone, filter presets, language preferences, and customized practitioner theme modes.',
      required: false,
    },
    {
      id: 'marketing',
      title: 'Marketing & Attribution Cookies',
      desc: 'Measure the effectiveness of educational campaigns and referral partner attribution. Never sold to third-party ad networks.',
      required: false,
    },
  ]

  const handleToggle = (id) => {
    if (id === 'necessary') return
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Cookies & Tracking"
        title="OpenMyPro"
        highlight="Cookie Policy"
        description="Learn how and why we utilize cookies, pixels, and local storage to provide a fast, secure, and personalized user experience."
        breadcrumbs={[{ label: 'Cookie Policy' }]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-4xl">
        {/* Interactive Preferences Manager Card */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Manage Your Cookie Preferences
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Customize which optional cookies you permit us to store on your device.
              </p>
            </div>
          </div>

          <div className="space-y-4 my-6">
            {cookieTypes.map((type) => {
              const isChecked = preferences[type.id]
              return (
                <div
                  key={type.id}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900 text-sm">
                        {type.title}
                      </span>
                      {type.required && (
                        <span className="text-[10px] uppercase font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
                      {type.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggle(type.id)}
                    disabled={type.required}
                    className={`w-12 h-6 rounded-full p-0.5 transition-colors relative flex-shrink-0 ${
                      isChecked
                        ? 'bg-[#0284c7]'
                        : 'bg-gray-300'
                    } ${type.required ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`Toggle ${type.title}`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                        isChecked ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-sky-200/60">
            <span className="text-xs text-gray-500">
              Preferences are saved locally in your browser storage.
            </span>
            <button
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center space-x-2 transition-all"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Preferences Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Cookie Preferences</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Informational Text */}
        <div className="prose prose-slate max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-gray-900">What are Cookies?</h2>
          <p>
            Cookies are small text files placed on your browser or hard drive when you visit a website. They allow the platform to remember your active session, keep your calendar views consistent across browser refreshes, and ensure sensitive administrative actions are authorized.
          </p>

          <h2 className="text-xl font-bold text-gray-900">How Long Do Cookies Last?</h2>
          <p>
            We use both <strong>session cookies</strong> (which expire automatically when you close your web browser) and <strong>persistent cookies</strong> (which remain on your device for a defined duration, up to 12 months, or until you choose to delete them).
          </p>

          <h2 className="text-xl font-bold text-gray-900">Browser-Level Cookie Control</h2>
          <p>
            In addition to our preference panel above, most modern web browsers permit you to control cookie settings through their options menu. Please note that disabling strictly necessary cookies will prevent you from signing in to your OpenMyPro account.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicyPage
