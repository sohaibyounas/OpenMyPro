import { UserPlus, Settings, Rocket } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Your Account',
      description:
        'Sign up in seconds with just your email. No credit card required to get started.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Customize Your Setup',
      description:
        'Configure your workspace, invite team members, and integrate your favorite tools.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Start Achieving More',
      description:
        'Begin using powerful features immediately and see results from day one.',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {' '}
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get started in three simple steps. No complexity, no hassle.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-700">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary-300 to-primary-400"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

