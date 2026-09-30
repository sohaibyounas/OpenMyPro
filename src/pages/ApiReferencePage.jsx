import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Code2, Play, Copy, Check, Terminal, ExternalLink, ShieldCheck, Database } from 'lucide-react'

const ApiReferencePage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('getAppointments')
  const [copied, setCopied] = useState(false)
  const [testResult, setTestResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const endpoints = [
    {
      id: 'getAppointments',
      method: 'GET',
      path: '/v1/appointments',
      title: 'List All Appointments',
      desc: 'Returns a paginated list of client bookings, filtered by practitioner ID or date range.',
      params: [
        { name: 'limit', type: 'integer', required: false, desc: 'Number of records (max 100)' },
        { name: 'practitioner_id', type: 'string', required: false, desc: 'Filter by specific provider UUID' },
        { name: 'status', type: 'string', required: false, desc: 'confirmed | pending | cancelled' },
      ],
      sampleResponse: {
        object: 'list',
        data: [
          {
            id: 'appt_8921a',
            practitioner_id: 'prac_98765',
            client_name: 'Sarah Miller',
            service_type: 'Sports Massage (60m)',
            start_time: '2026-10-15T14:00:00Z',
            status: 'confirmed',
            paid: true,
          },
          {
            id: 'appt_8922b',
            practitioner_id: 'prac_98765',
            client_name: 'David Kim',
            service_type: 'Chiropractic Consultation',
            start_time: '2026-10-15T15:30:00Z',
            status: 'confirmed',
            paid: true,
          },
        ],
        has_more: false,
        total: 2,
      },
    },
    {
      id: 'createAppointment',
      method: 'POST',
      path: '/v1/appointments',
      title: 'Create Appointment Booking',
      desc: 'Creates a confirmed booking slot and dispatches automated client calendar invites.',
      params: [
        { name: 'practitioner_id', type: 'string', required: true, desc: 'UUID of the service provider' },
        { name: 'client_email', type: 'string', required: true, desc: 'Client notification email' },
        { name: 'start_time', type: 'ISO-8601', required: true, desc: 'UTC timestamp of appointment' },
        { name: 'service_type', type: 'string', required: true, desc: 'Matching practitioner service' },
      ],
      sampleResponse: {
        id: 'appt_99120c',
        object: 'appointment',
        status: 'confirmed',
        client_email: 'sarah.miller@example.com',
        created_at: '2026-09-30T11:45:00Z',
        confirmation_code: 'OMP-48921',
      },
    },
    {
      id: 'getPractitioner',
      method: 'GET',
      path: '/v1/practitioners/{id}',
      title: 'Retrieve Practitioner Profile',
      desc: 'Returns practice hours, active services, credentials, and real-time open booking slots.',
      params: [
        { name: 'id', type: 'string', required: true, desc: 'UUID of the practitioner' },
      ],
      sampleResponse: {
        id: 'prac_98765',
        name: 'Dr. Michael Chen',
        specialty: 'Physical Therapy & Sports Rehab',
        license_verified: true,
        available_slots_count: 14,
        rating: 4.95,
      },
    },
    {
      id: 'webhooks',
      method: 'POST',
      path: '/v1/webhooks/subscribe',
      title: 'Subscribe to Webhook Events',
      desc: 'Configure HTTP callbacks for appointment.created, invoice.paid, and cancellation events.',
      params: [
        { name: 'target_url', type: 'string', required: true, desc: 'HTTPS callback URL' },
        { name: 'events', type: 'array', required: true, desc: 'Array of subscribed event strings' },
      ],
      sampleResponse: {
        id: 'wh_sub_5510',
        target_url: 'https://example.com/api/omp-hook',
        events: ['appointment.created', 'appointment.cancelled'],
        active: true,
        secret: 'whsec_99a8b7c6d5e4f3a2b1c0',
      },
    },
  ]

  const currentEndpoint =
    endpoints.find((e) => e.id === selectedEndpoint) || endpoints[0]

  const handleTestRequest = () => {
    setIsLoading(true)
    setTimeout(() => {
      setTestResult(currentEndpoint.sampleResponse)
      setIsLoading(false)
    }, 450)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(
      JSON.stringify(currentEndpoint.sampleResponse, null, 2)
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="REST API v1"
        title="Interactive"
        highlight="API Reference"
        description="Integrate appointments, client profiles, practitioners, and automated webhooks with low-latency REST endpoints."
        breadcrumbs={[{ label: 'API Reference' }]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Endpoint List Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
                Available Endpoints
              </h3>
              <div className="space-y-1.5">
                {endpoints.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setSelectedEndpoint(ep.id)
                      setTestResult(null)
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs ${
                      selectedEndpoint === ep.id
                        ? 'bg-white border border-sky-300 shadow-sm text-gray-900 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-gray-900">{ep.title}</div>
                      <div className="font-mono text-[11px] text-gray-500">
                        {ep.path}
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                        ep.method === 'GET'
                          ? 'bg-emerald-100 text-emerald-800'
                          : ep.method === 'POST'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {ep.method}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Auth note card */}
            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 text-xs space-y-2">
              <div className="font-bold text-sky-900 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Authentication Header</span>
              </div>
              <p className="text-sky-800 leading-relaxed">
                Include your bearer token in all requests:
              </p>
              <div className="bg-white border border-sky-200 rounded p-2 font-mono text-[11px] text-sky-950">
                Authorization: Bearer omp_live_...
              </div>
            </div>
          </div>

          {/* Endpoint Details and Interactive Console */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100">
                <div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-xs font-bold font-mono mr-2 ${
                      currentEndpoint.method === 'GET'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {currentEndpoint.method}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-gray-900">
                    {currentEndpoint.path}
                  </span>
                </div>

                <button
                  onClick={handleTestRequest}
                  disabled={isLoading}
                  className="px-4 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-xs font-bold shadow-md flex items-center space-x-1.5 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isLoading ? 'Sending...' : 'Send Test Request'}</span>
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {currentEndpoint.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  {currentEndpoint.desc}
                </p>
              </div>

              {/* Request Parameters Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Query &amp; Body Parameters
                </h4>
                <div className="border border-gray-200 rounded-xl overflow-hidden text-xs">
                  <div className="grid grid-cols-4 bg-gray-50 p-2.5 font-bold text-gray-700 border-b border-gray-200">
                    <div>Parameter</div>
                    <div>Type</div>
                    <div>Required</div>
                    <div>Description</div>
                  </div>
                  {currentEndpoint.params.map((param, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-4 p-2.5 border-b border-gray-100 last:border-0 items-center font-mono"
                    >
                      <div className="font-bold text-gray-900">{param.name}</div>
                      <div className="text-sky-600">{param.type}</div>
                      <div className="text-gray-500 font-sans">
                        {param.required ? (
                          <span className="text-red-500 font-bold">Yes</span>
                        ) : (
                          'No'
                        )}
                      </div>
                      <div className="text-gray-600 font-sans">{param.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Viewer */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Response Payload (JSON)
                  </h4>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-gray-500 hover:text-gray-900 flex items-center space-x-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden border border-gray-800 bg-[#0f172a]">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-xs text-gray-400 font-mono border-b border-gray-800">
                    <span>Status: 200 OK</span>
                    <span>Content-Type: application/json</span>
                  </div>
                  <pre className="p-4 text-xs text-sky-200 font-mono overflow-x-auto leading-relaxed">
                    {JSON.stringify(
                      testResult || currentEndpoint.sampleResponse,
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiReferencePage
