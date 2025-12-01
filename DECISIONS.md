# Design Decisions

This document outlines any approximations or decisions made during implementation.

## Fonts

- **Satoshi Variable**: Not available as a web font. Using Inter (Google Fonts) as the closest equivalent for sans-serif text.
- **Inter V**: Using standard Inter from Google Fonts as a fallback.

## Images

- Images are referenced from Figma MCP asset URLs. In production, these should be:
  1. Downloaded and optimized
  2. Converted to WebP format
  3. Stored in `/public/assets/`
  4. Referenced with Next.js Image component

## Colors

- All color tokens match Figma design exactly
- CSS variables are used for theming support
- Brand colors (green, indigo) are preserved

## Spacing

- Spacing scale matches Figma tokens (8px base unit)
- Custom spacing values (0.5, 1.5, 2.5, 3.5, 7) are included in Tailwind config

## Responsive Behavior

- Mobile navigation slides in from the left (matching Figma)
- Sidebar is hidden on mobile by default
- Breakpoints are tuned to match common device sizes

## Animations

- Framer Motion is used for micro-interactions
- Reduced motion preferences are respected
- Countdown timer updates every second

## Accessibility

- All interactive elements have proper ARIA labels
- Focus states are visible
- Color contrast meets WCAG AA standards
- Semantic HTML is used throughout

