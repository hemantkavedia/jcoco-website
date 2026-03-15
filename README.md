# JCOCO — Jain Center of Central Ohio

Next.js 14 website for JCOCO.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/about` — About, history, vision, executive committee
- `/events` — Events and weekly schedule
- `/media` — Photo gallery and YouTube
- `/contact` — Contact form and address
- `/donate` — PayPal donation page
- `/membership` — JCOCO Prime membership

## PayPal Integration

Update the PayPal hosted button ID in all donate links:
```
https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID
```
Replace `JCOCO` with your actual PayPal hosted button ID from your PayPal Business account.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Images served from jcoco.org WordPress media
