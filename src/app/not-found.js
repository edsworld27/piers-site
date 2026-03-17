import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0C1B2E",
      fontFamily: "system-ui, sans-serif",
      padding: "2rem",
    }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div style={{
          fontSize: "clamp(5rem, 20vw, 9rem)",
          fontWeight: 900,
          color: "#6BAE8A",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}>404</div>

        <h1 style={{
          fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
          fontWeight: 600,
          color: "#f5f0e8",
          margin: "1rem 0 0.75rem",
        }}>
          Page not found
        </h1>

        <p style={{
          fontSize: "1rem",
          color: "rgba(245,240,232,0.5)",
          lineHeight: 1.7,
          margin: "0 0 2.5rem",
        }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          Let&rsquo;s get you back on track.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{
            background: "#6BAE8A",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.925rem",
          }}>
            Go home
          </Link>
          <Link href="/contact" style={{
            background: "rgba(255,255,255,0.07)",
            color: "rgba(245,240,232,0.75)",
            padding: "0.75rem 1.75rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.925rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            Contact Piers
          </Link>
        </div>
      </div>
    </main>
  );
}
