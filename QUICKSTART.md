# Quick Start Guide

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Download images from Figma** (see `IMAGES.md` for details):
   - Logo: Export from Figma sidebar
   - Hero image: Export campaign illustration
   - Rewards icon: Export traced image
   - Curator avatar: Export ellipse
   - Place all in `/public/assets/`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to http://localhost:3000

## Development Workflow

- **Make changes**: Edit files in `components/`, `pages/`, or `lib/`
- **Check linting**: `npm run lint`
- **Format code**: `npm run format`
- **Run tests**: `npm run test`
- **Run E2E tests**: `npm run test:e2e` (requires dev server running)

## Building for Production

```bash
npm run build
npm run start
```

## Troubleshooting

### Images not loading
- Check that images are in `/public/assets/`
- Verify image paths in components match actual filenames
- Use placeholder fallbacks if images are missing

### TypeScript errors
- Run `npm run build` to see all type errors
- Check `tsconfig.json` paths are correct

### Tailwind styles not applying
- Verify `tailwind.config.js` content paths include your files
- Check `postcss.config.js` is configured
- Restart dev server after config changes

## Next Steps

1. Replace placeholder images with actual Figma exports
2. Update mock data in `lib/mockData.ts` with real API data
3. Add environment variables for API endpoints
4. Configure deployment (Vercel recommended)

