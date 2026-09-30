import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  BookOpen,
  Search,
  Code,
  Copy,
  Check,
  ChevronRight,
  Terminal,
  FileCode,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('quickstart')
  const [activeLang, setActiveLang] = useState('javascript')
  const [copied, setCopied] = useState(false)
  const [feedbackGiven, setFeedbackGiven] = useState(null)

  const docSections = [
    {
      group: 'Getting Started',
      items: [
        { id: 'quickstart', label: 'Quickstart Guide' },
        { id: 'installation', label: 'Authentication & SDK Setup' },
        { id: 'environments', label: 'Sandbox vs Production' },
      ],
    },
    {
      group: 'Core Concepts',
      items: [
        { id: 'appointments', label: 'Appointment Lifecycle' },
        { id: 'practitioners', label: 'Staff & Practitioner Profiles' },
        { id: 'webhooks', label: 'Webhooks & Event Streaming' },
      ],
    },
    {
      group: 'Integration Guides',
      items: [
        { id: 'stripe', label: 'Payment Processing (Stripe)' },
        { id: 'calendars', label: 'Google & Outlook Sync' },
      ],
    },
  ]

  const codeSnippets = {
    javascript: `import { OpenMyPro } from '@openmypro/sdk';

const client = new OpenMyPro({
  apiKey: process.env.OPENMYPRO_API_KEY,
  environment: 'production'
});

// Create a new client appointment booking
const appointment = await client.appointments.create({
  practitionerId: 'prac_98765',
  clientEmail: 'sarah.miller@example.com',
  startTime: '2026-10-15T14:00:00Z',
  serviceType: 'Sports Physical Therapy (60m)',
  sendSmsReminder: true
});

console.log('Confirmed Booking ID:', appointment.id);`,
    python: `from openmypro import OpenMyProClient
import os

client = OpenMyProClient(
    api_key=os.environ.get("OPENMYPRO_API_KEY"),
    environment="production"
)

# Create an appointment
appointment = client.appointments.create(
    practitioner_id="prac_98765",
    client_email="sarah.miller@example.com",
    start_time="2026-10-15T14:00:00Z",
    service_type="Sports Physical Therapy (60m)",
    send_sms_reminder=True
)

print(f"Confirmed Booking ID: {appointment.id}")`,
    curl: `curl -X POST https://api.openmypro.com/v1/appointments \\
  -H "Authorization: Bearer $OPENMYPRO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "practitionerId": "prac_98765",
    "clientEmail": "sarah.miller@example.com",
    "startTime": "2026-10-15T14:00:00Z",
    "serviceType": "Sports Physical Therapy (60m)",
    "sendSmsReminder": true
  }'`,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Developer & Platform Docs"
        title="Comprehensive"
        highlight="Documentation"
        description="Everything you need to integrate OpenMyPro, automate client bookings, and build on top of our enterprise APIs."
        breadcrumbs={[{ label: 'Documentation' }]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Docs Sidebar Navigation (Cols 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-5">
                {docSections.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      {group.group}
                    </h4>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              activeSection === item.id
                                ? 'bg-[#0284c7] text-white font-bold'
                                : 'text-gray-600 hover:bg-gray-200/60'
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Docs Content (Cols 9) */}
          <div className="lg:col-span-9 space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
                <span>Guides</span>
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>Quickstart</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Quickstart: Creating Your First Booking
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Learn how to initialize the OpenMyPro SDK and programmatically schedule your first appointment in less than 3 minutes.
              </p>
            </div>

            {/* Step by Step Walkthrough */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Retrieve Your API Keys</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                  Navigate to your <strong>Settings &gt; Developer API</strong> dashboard inside OpenMyPro. Generate a restricted API secret key with <code>appointments:write</code> permissions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Install the Official SDK</span>
                </h3>
                <div className="bg-gray-900 text-gray-100 rounded-xl p-4 font-mono text-xs pl-8 flex items-center justify-between">
                  <span>npm install @openmypro/sdk</span>
                  <button
                    onClick={() => navigator.clipboard.writeText('npm install @openmypro/sdk')}
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Execute the Booking Request</span>
                </h3>

                {/* Code Window */}
                <div className="rounded-2xl overflow-hidden border border-gray-800 bg-[#0f172a] shadow-lg">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900 border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                      <div className="flex items-center space-x-1 pl-4">
                        {['javascript', 'python', 'curl'].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => setActiveLang(lang)}
                            className={`px-2.5 py-1 rounded text-[11px] font-mono capitalize transition-colors ${
                              activeLang === lang
                                ? 'bg-sky-500 text-white font-bold'
                                : 'text-gray-400 hover:text-gray-200'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-gray-800 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code View */}
                  <pre className="p-5 text-xs text-sky-100 font-mono overflow-x-auto leading-relaxed">
                    {codeSnippets[activeLang]}
                  </pre>
                </div>
              </div>
            </div>

            {/* Helpfulness feedback widget */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Was this page helpful?
                </h4>
                <p className="text-xs text-gray-500">
                  Your feedback helps us continuously improve our developer docs.
                </p>
              </div>

              {feedbackGiven ? (
                <div className="text-xs font-semibold text-emerald-600 flex items-center space-x-1">
                  <Check className="w-4 h-4" />
                  <span>Thank you for your feedback!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setFeedbackGiven('yes')}
                    className="px-4 py-1.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg text-xs font-semibold"
                  >
                    👍 Yes
                  </button>
                  <button
                    onClick={() => setFeedbackGiven('no')}
                    className="px-4 py-1.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg text-xs font-semibold"
                  >
                    👎 No
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationPage
