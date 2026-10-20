# Meetha Pani Hotel & Banquet — Frontend

Luxury responsive React + Vite site for room enquiries and banquet enquiries via WhatsApp. No backend and no food ordering.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite creates the production site in `dist/`.

## Configure hotel details

Edit `src/config.js`:

- `whatsapp`: international number without `+`, spaces or dashes. Current configured value is `918853260723` (India country code +91 and the supplied number).
- `address` and `mapQuery`: replace with the exact confirmed property address/map listing.
- `ROOM_TYPES`: replace placeholder categories/descriptions with actual room categories, amenities and prices when the client supplies them.
- `GALLERY`: replace illustrative stock image URLs with real property photos before launch.

The banquet capacity, prices, room availability and reservation status are intentionally not fabricated. The website sends an enquiry only; the hotel must confirm availability, rates and the booking on WhatsApp.

## Business-ready additions in this version

- FAQ accordion covering WhatsApp enquiry, booking confirmation, illustrative photos/capacity and the no-food-ordering scope.
- Gallery category filters plus a full-screen photo viewer.
- SEO metadata: title, description, robots, Open Graph and Twitter cards, plus basic Hotel structured data.
- Hero image preload, lazy-loaded gallery/card images, async image decoding, and visible keyboard focus states.
- Room date validation now requires check-out to be after check-in and uses the visitor's local calendar date.

## WhatsApp flow

The room form builds a pre-filled message with check-in/out, guests, room count, name and contact number.
The banquet form builds a pre-filled message with event type/date, expected guests, name, contact and optional notes.
The visitor still needs to press Send in WhatsApp.

## Deploy to Vercel

### Option A — Git repository

1. Create a GitHub repository and upload the project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Deploy. No environment variables are required for this frontend.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. For a production deploy:

```bash
vercel --prod
```

## Before going live

- Replace all stock imagery with approved Meetha Pani photos; current images are placeholders, not proof of actual property facilities.
- Confirm room names, amenities, rates, banquet capacity and exact street address. Update the JSON-LD address in `index.html` when the property address is confirmed.
- Verify the WhatsApp number is owned/managed by the hotel and test both forms on mobile. Add a canonical URL and `og:url` only after the final production domain is known.
- Test keyboard navigation, mobile layouts and production build.

## Restaurant menu section

The navbar now includes **Restaurant Menu**, linking to a filterable on-page menu with categories, dish photos, descriptions and sample prices. This is display-only: no food ordering, cart, payment or backend has been added.

**Before publishing:** `RESTAURANT_MENU` in `src/config.js` contains demo dish names, photos and sample prices for layout preview. Replace all of these with the restaurant's actual approved menu and prices.
