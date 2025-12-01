# Superboard Campaigns

A production-ready Next.js application that recreates the Figma design for the Superboard campaigns page. Built with TypeScript, Tailwind CSS, and ShadCN/ui components.

## Features

- 🎨 **Pixel-perfect design** - Recreated from Figma with exact measurements and tokens
- 📱 **Fully responsive** - Mobile-first approach with breakpoints for all screen sizes
- ♿ **Accessible** - WCAG AA compliant with semantic HTML and ARIA attributes
- ⚡ **Performance optimized** - Code splitting, lazy loading, and optimized images
- 🎭 **Smooth animations** - Framer Motion with reduced-motion support
- 🧪 **Tested** - Unit tests with Jest/React Testing Library and E2E tests with Playwright

## Tech Stack

- **Framework**: Next.js 14 (App Router compatible)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN/ui
- **Animations**: Framer Motion
- **Testing**: Jest, React Testing Library, Playwright
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd superboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run E2E tests with Playwright

## Project Structure

```
superboard/
├── components/          # React components
│   ├── ui/             # ShadCN/ui components
│   ├── Header.tsx      # Top navigation
│   ├── Sidebar.tsx     # Left sidebar navigation
│   ├── Hero.tsx        # Campaign hero section
│   ├── StatsCards.tsx  # Statistics cards
│   ├── LeaderboardSection.tsx
│   └── AboutSection.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and mock data
├── pages/              # Next.js pages
├── public/             # Static assets
│   └── assets/        # Images and SVGs from Figma
├── styles/             # Global styles
├── tests/              # Test files
│   ├── components/    # Unit tests
│   └── e2e/           # E2E tests
└── scripts/           # Build scripts
```

## Design Tokens

The design uses tokens extracted from Figma:

- **Colors**: Brand colors (green, indigo), neutral palette, semantic colors
- **Typography**: Satoshi Variable (sans), Inter V (serif) with fallbacks
- **Spacing**: Consistent 8px base unit scale
- **Border Radius**: Full, xl, 2xl, 4xl variants
- **Shadows**: Subtle drop shadows

## Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus-visible styles
- Color contrast meeting WCAG AA
- Screen reader friendly

## Testing

### Unit Tests

Run unit tests for components:
```bash
npm run test
```

### E2E Tests

Run end-to-end tests:
```bash
npm run test:e2e
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Images from Figma are stored in `/public/assets/`
- Mock data is available in `lib/mockData.ts` for development
- Fonts use Google Fonts fallbacks (Inter) when Satoshi/Inter V are not available
- See `DECISIONS.md` for any design approximations

## License

MIT

