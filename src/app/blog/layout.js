export const metadata = {
  title: "Hypnotherapy Resources & Articles | Piers Day",
  description: "Evidence-based articles and FAQs on hypnotherapy, anxiety, smoking cessation, weight loss, and subconscious change. Learn the science behind lasting transformation.",
  alternates: { canonical: "https://www.piersday.com/blog" },
  openGraph: {
    title: "Hypnotherapy Resources & Articles | Piers Day",
    description: "Evidence-based articles on hypnotherapy, anxiety, smoking, weight loss, and subconscious change.",
    url: "https://www.piersday.com/blog",
    type: "website",
    images: [{ url: "https://www.piersday.com/og-image.jpg", width: 1200, height: 630, alt: "Piers Day Resources" }],
  },
  twitter: {
    card: "summary",
    title: "Hypnotherapy Resources & Articles",
    description: "Evidence-based articles on hypnotherapy, anxiety, smoking cessation, weight loss, and subconscious change.",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
