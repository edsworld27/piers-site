export const metadata = {
  title: "Hypnotherapy Audio Sessions | Clinical Recordings | Piers Day",
  description: "Clinical-grade hypnotherapy audio sessions for anxiety, deep sleep, confidence, smoking, and weight loss. Same protocol as in-clinic. Instant download.",
  alternates: { canonical: "https://www.piersday.com/shop" },
  openGraph: {
    title: "Hypnotherapy Audio Sessions | Clinical Recordings",
    description: "Clinical-grade hypnotherapy downloads for anxiety, sleep, confidence, smoking, and weight loss.",
    url: "https://www.piersday.com/shop",
    type: "website",
    images: [{ url: "https://www.piersday.com/og-image.jpg", width: 1200, height: 630, alt: "Piers Day Audio Sessions" }],
  },
  twitter: {
    card: "summary",
    title: "Hypnotherapy Audio Sessions",
    description: "Clinical-grade hypnotherapy downloads for anxiety, sleep, confidence, smoking, and weight loss.",
  },
};

export default function ShopLayout({ children }) {
  return children;
}
