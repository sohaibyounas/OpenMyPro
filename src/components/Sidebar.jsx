import { X, MapPin, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const [distance, setDistance] = useState(5)
  const [selectedPractices, setSelectedPractices] = useState([])

  const practices = [
    'Allergy & Immunology',
    'Therapists & Mental Health Specialists, Psychiatrists',
    'Business & Marketing Services',
    'Dentistry & Oral Health',
    'Facial',
    'Hair Coloring',
    'Sports Massage',
    'Barbering',
  ]

  const togglePractice = (practice) => {
    setSelectedPractices((prev) =>
      prev.includes(practice)
        ? prev.filter((p) => p !== practice)
        : [...prev, practice]
    )
  }

  const selectAll = () => {
    setSelectedPractices(practices)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar - Opens from left */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto border-r-2 border-teal-600/30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronDown className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-bold text-gray-900">Search Filters</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Zip Code Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zip Code
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Use my location"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-500 hover:text-teal-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Distance Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1"
                max="50"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <p className="text-sm text-gray-600">within {distance} miles</p>
            </div>
          </div>

          {/* By Practice Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 underline">
                By practice
              </h3>
              <button
                onClick={selectAll}
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Select All
              </button>
            </div>
            <div className="space-y-3">
              {practices.map((practice, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedPractices.includes(practice)}
                    onChange={() => togglePractice(practice)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {practice}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

