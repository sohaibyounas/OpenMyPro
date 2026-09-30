import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

const PageHero = ({
  badge,
  title,
  highlight,
  description,
  breadcrumbs = [],
}) => {
  return (
    <div className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-gray-100">
      {/* Background Decorative Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-r from-sky-200/30 via-blue-200/20 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-2">
              <Link
                to="/"
                className="hover:text-blue-600 flex items-center space-x-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-blue-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-900 font-semibold">
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className="inline-flex">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100/80 text-sky-800 border border-sky-200/60">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {title}{' '}
            {highlight && (
              <span className="text-[#0284c7]">{highlight}</span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default PageHero
