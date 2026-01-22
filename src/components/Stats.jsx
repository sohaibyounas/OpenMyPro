import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing every day',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Happy customers',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Based on 10K+ reviews',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Worldwide presence',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-primary-100">
            Join thousands of teams who are already achieving more with
            OpenMyPro.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-primary-200 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'CEO, TechStart Inc.',
              quote:
                'OpenMyPro has transformed how our team works. Productivity has increased by 40%.',
              rating: 5,
            },
            {
              name: 'Michael Chen',
              role: 'Product Manager',
              quote:
                'The best investment we made this year. Intuitive, powerful, and reliable.',
              rating: 5,
            },
            {
              name: 'Emily Rodriguez',
              role: 'Creative Director',
              quote:
                'Finally, a tool that understands what professionals actually need.',
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-50 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-primary-200">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

