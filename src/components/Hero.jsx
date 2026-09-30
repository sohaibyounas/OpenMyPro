import { useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = heroRef.current
        const speed = scrolled * 0.3
        parallax.style.transform = `translateY(${speed}px)`
      }
    }

    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section className="relative pb-20 pt-10 md:pb-32 lg:pb-40 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <span>✨</span>
              <span>New: AI-Powered Features Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Solutions
              </span>
              Made Simple
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your workflow with powerful tools designed for modern
              professionals. Streamline your processes, boost productivity, and
              achieve more with less effort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative">
            <div
              ref={heroRef}
              className="relative z-10 transform transition-transform duration-300"
            >
              {/* Hero Illustration Placeholder */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      OpenMyPro
                    </h3>
                    <p className="text-gray-600">
                      Professional tools for modern teams
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full opacity-10 blur-3xl -z-10"></div>
    </section>
  )
}

export default Hero

