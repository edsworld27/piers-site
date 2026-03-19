export const metadata = {
  title: "Client Testimonials | Real Success Stories | Piers Day Hypnotherapy",
  description: "Read real transformation stories from clients who overcame anxiety, quit smoking, lost weight, and gained confidence through hypnotherapy with Piers Day.",
  alternates: { canonical: "https://www.piersday.com/testimonials" },
  openGraph: {
    title: "Client Testimonials | Real Success Stories",
    description: "Real transformation stories from clients who overcame anxiety, quit smoking, and gained confidence through hypnotherapy.",
    url: "https://www.piersday.com/testimonials",
    type: "website",
    images: [{ url: "https://www.piersday.com/og-image.jpg", width: 1200, height: 630, alt: "Piers Day Client Testimonials" }],
  },
  twitter: {
    card: "summary",
    title: "Client Testimonials | Real Success Stories",
    description: "Real transformation stories from clients who overcame anxiety, quit smoking, and gained confidence.",
  },
};

export default function TestimonialsLayout({ children }) {
  return children;
}
