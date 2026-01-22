import { useState, useEffect } from 'react'
import { Menu, Search, Bell, ChevronDown, Building2 } from 'lucide-react'
import Sidebar from './Sidebar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white shadow-sm'
        }`}
        style={{ borderRadius: isScrolled ? '0' : '0 0 12px 12px' }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-3">
                {/* Logo Icon - Circular with star and butterfly */}
                <div className="relative">
                  <div className="w-10 h-10 border-2 border-gray-700 rounded-full flex items-center justify-center">
                    {/* Blue Star */}
                    <svg
                      className="w-6 h-6 text-blue-600 absolute"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    {/* Yellow Butterfly element */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                {/* Logo Text */}
                <div className="flex items-baseline space-x-0">
                  <span className="text-xl lg:text-2xl font-bold text-gray-800">
                    Open
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-gray-500">
                    My
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-blue-600">
                    Pro
                  </span>
                </div>
              </a>
            </div>

            {/* Search Bar - Center */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="w-full relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-2.5">
                {/* Burger Menu Icon */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-1.5 text-blue-600 hover:bg-gray-100 rounded-lg transition-colors mr-3"
                  aria-label="Open filters"
                >
                  <Menu className="w-5 h-5" />
                </button>

                {/* Wellness Pro Dropdown */}
                <div className="flex items-center space-x-2 mr-3 cursor-pointer hover:text-blue-600 transition-colors">
                  <span className="text-sm font-medium text-gray-700">
                    Wellness Pro
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>

                {/* Separator */}
                <div className="w-px h-6 bg-gray-300 mr-3"></div>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search Pro Name"
                  className="flex-1 outline-none text-sm text-gray-600 placeholder-gray-400"
                />

                {/* Search Icon */}
                <button className="ml-3 p-1.5 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full hover:from-teal-500 hover:to-teal-700 transition-all">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Company Button */}
              <button className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                <Building2 className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Separator */}
              <div className="hidden lg:block w-px h-8 bg-gray-300"></div>

              {/* Notification Bell */}
              <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                {/* Notification dot */}
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
                  <span className="text-teal-700 font-bold text-sm">G</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 hidden lg:block group-hover:text-gray-900" />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}

export default Header

