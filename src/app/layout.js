import './globals.css';

export const metadata = {
  title: 'Jurni — Thoughtfully Crafted Journals & Stationery',
  description: 'Beautifully made journals, planners, and stationery to help you reflect, plan, and grow. Every product a chapter in your journey.',
  keywords: 'journals, stationery, planners, sketchbooks, journaling, mindfulness, gifts',
  openGraph: {
    title: 'Jurni — Your story, beautifully told.',
    description: 'Thoughtfully crafted journals and stationery for people on a journey of growth.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
