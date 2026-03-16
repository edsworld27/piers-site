import CookiePreferencePanel from "./CookiePreferencePanel";

export const metadata = {
  title: "Cookie Policy | Piers Day Hypnotherapy",
  alternates: { canonical: "https://www.piersday.com/legal/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-24 text-standard">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="mb-8">Cookie Policy</h1>

        <div className="glass-panel p-8 content" style={{ marginBottom: "2rem" }}>
          <p>Last updated: March 2026</p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, keep you logged in, and understand how people use the site so we can improve it.
          </p>

          <h2>How we use cookies</h2>
          <p>We use four categories of cookies:</p>

          <h3>Essential cookies</h3>
          <p>
            These are required for the site to function. They manage your session, keep the shopping cart working, and handle security. You cannot opt out of essential cookies — without them the site will not work correctly.
          </p>
          <ul>
            <li><strong>Session cookies</strong> — keep you logged in during a visit</li>
            <li><strong>Cart cookies</strong> — remember items in your basket</li>
            <li><strong>Security cookies</strong> — protect against cross-site request forgery</li>
          </ul>

          <h3>Functional cookies</h3>
          <p>
            These enable the contact forms, live chat widget, and booking system (LeadConnector / HighLevel). If you disable these, you may not be able to send messages or book sessions directly from the site.
          </p>
          <ul>
            <li><strong>LeadConnector / HighLevel</strong> — powers the contact form and live chat widget</li>
          </ul>

          <h3>Analytics cookies</h3>
          <p>
            Anonymous data about which pages are visited and how long people spend on them. This information is used solely to improve the site — no personal data is collected or shared.
          </p>

          <h3>Marketing cookies</h3>
          <p>
            Ad tracking and remarketing pixels that allow us to show relevant advertisements to people who have previously visited the site. These are never used to build profiles for third-party data sales.
          </p>

          <h2>Third-party cookies</h2>
          <p>
            Some cookies are set by third-party services we use (such as LeadConnector for forms and chat). We have no direct control over these cookies — please refer to those providers&apos; privacy policies for full details.
          </p>

          <h2>Managing cookies in your browser</h2>
          <p>
            You can also control cookies directly in your browser settings. Most browsers allow you to view, block, or delete cookies. Note that blocking essential cookies may break site functionality. For guidance:
          </p>
          <ul>
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy &amp; Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Manage Website Data</li>
            <li>Edge: Settings → Privacy, search, and services → Cookies</li>
          </ul>

          <h2>Contact</h2>
          <p>
            If you have any questions about our use of cookies, contact us at{" "}
            <a href="mailto:piersday@me.com">piersday@me.com</a> or{" "}
            <a href="/contact">via the contact page</a>.
          </p>
        </div>

        {/* Live preference panel */}
        <CookiePreferencePanel />
      </div>
    </main>
  );
}
