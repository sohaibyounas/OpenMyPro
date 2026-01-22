import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Lock,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Experience blazing-fast performance with optimized algorithms and cloud infrastructure.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security with end-to-end encryption and 99.9% uptime guarantee.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Get deep insights with real-time analytics and customizable reporting dashboards.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Work seamlessly with your team using powerful collaboration tools and integrations.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Access your work from anywhere in the world with multi-region data centers.',
      color: 'from-indigo-400 to-blue-500',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description:
        'Your data belongs to you. We never sell your information or track your activity.',
      color: 'from-red-400 to-rose-500',
    },
  ]

  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {' '}
              Succeed
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 hover:bg-white rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

