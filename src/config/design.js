// Design Configuration for OpenMyPro
// Update these values to match the actual OpenMyPro website exactly

export const designConfig = {
  // Colors - Update with exact hex codes from the site
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7', // Main primary color - UPDATE THIS
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    // Add any custom colors from the site here
    accent: '#0284c7', // UPDATE
    text: {
      primary: '#111827', // UPDATE
      secondary: '#6b7280', // UPDATE
    },
  },

  // Typography - Update with exact font families and sizes
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'], // UPDATE
      heading: ['Inter', 'system-ui', 'sans-serif'], // UPDATE
    },
    fontSize: {
      // Update with exact sizes from the site
      h1: '3.5rem', // UPDATE
      h2: '2.5rem', // UPDATE
      h3: '1.875rem', // UPDATE
      body: '1rem', // UPDATE
    },
  },

  // Spacing - Update with exact spacing values
  spacing: {
    section: {
      py: '5rem', // UPDATE
      px: '1rem', // UPDATE
    },
  },

  // Content - Update with exact text from the site
  content: {
    siteName: 'OpenMyPro', // UPDATE
    hero: {
      badge: 'New: AI-Powered Features Available', // UPDATE
      headline: 'Professional Solutions Made Simple', // UPDATE
      subheadline: 'Transform your workflow with powerful tools...', // UPDATE
      ctaPrimary: 'Start Free Trial', // UPDATE
      ctaSecondary: 'Watch Demo', // UPDATE
    },
    // Add more content sections as needed
  },
}

