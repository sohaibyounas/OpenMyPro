# OpenMyPro Homepage Clone

A pixel-perfect, fully responsive clone of the OpenMyPro homepage built with React and Tailwind CSS.

## Features

- ✨ **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- ⚡ **Smooth Animations** - Hover effects, transitions, and parallax scrolling
- 📱 **Mobile Menu** - Hamburger menu for mobile navigation
- 🎯 **Sticky Header** - Header that adapts on scroll
- 🚀 **Performance** - Built with Vite for fast development and optimized builds

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Lucide React** - Beautiful icon library

## Project Structure

```
openmypro-clone/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with mobile menu
│   │   ├── Hero.jsx        # Hero section with CTA
│   │   ├── Features.jsx    # Features grid section
│   │   ├── HowItWorks.jsx  # Step-by-step process
│   │   ├── Stats.jsx       # Statistics and testimonials
│   │   ├── CTA.jsx         # Call-to-action section
│   │   └── Footer.jsx      # Footer with links and social icons
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Components Overview

### Header
- Sticky navigation bar
- Logo and brand name
- Desktop navigation links
- CTA buttons (Sign Up, Download App)
- Mobile hamburger menu

### Hero
- Large headline with gradient text
- Subheading and description
- Primary and secondary CTA buttons
- Quick stats display
- Hero illustration with parallax effect

### Features
- Grid of 6 feature cards
- Icons with gradient backgrounds
- Hover animations and effects

### How It Works
- 3-step process visualization
- Numbered badges
- Connection lines (desktop)
- Icon-based steps

### Stats
- Key metrics display
- Testimonials section
- Gradient background

### CTA
- Large call-to-action section
- Benefit highlights
- Trust indicators
- Multiple CTA buttons

### Footer
- Brand information
- Organized link groups
- Social media icons
- Copyright and legal links

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Typography

The project uses the Inter font family. You can change it in `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

