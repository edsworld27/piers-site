"use client";

import Script from "next/script";

export default function ContactPage() {

  return (
    <main className="pt-32 pb-24 relative z-10">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="mb-4 text-gradient-gold">Reach Out Your Way.</h1>
          <p className="hero-sub mx-auto max-w-2xl px-4">
            Stop struggling against your own mind. Whether you have a quick question or are ready to start your transformation, I am here to help.
          </p>
        </div>

        {/* Section 1: Immediate Options */}
        <div className="contact-options grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 fade-in-up" style={{animationDelay: "0.2s"}}>
          <a href="tel:07716008836" className="glass-panel p-8 flex flex-col items-center text-center group hover:border-gold transition-all duration-300">
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</span>
            <h3 className="text-sm uppercase tracking-widest text-accent-gold mb-2 font-bold">Call or Text</h3>
            <span className="text-2xl text-white font-medium">07716008836</span>
            <p className="text-gray-400 mt-4 text-sm">Best for immediate inquiries or quick chats.</p>
          </a>

          <a href="mailto:info@piersday.com" className="glass-panel p-8 flex flex-col items-center text-center group hover:border-gold transition-all duration-300">
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">✉️</span>
            <h3 className="text-sm uppercase tracking-widest text-accent-gold mb-2 font-bold">Send an Email</h3>
            <span className="text-2xl text-white font-medium">info@piersday.com</span>
            <p className="text-gray-400 mt-4 text-sm">Best for detailed questions or private thoughts.</p>
          </a>
        </div>

        {/* Section 2: Detailed Inquiry Form */}
        <div className="form-section glass-panel p-4 md:p-12 fade-in-up" style={{animationDelay: "0.4s"}}>
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gradient-light mb-4">Send a Secure Message</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Fill out the form below and I will get back to you personally to discuss your rapid resolution path.</p>
          </div>
          
          <div id="form-embed-container" className="relative w-full overflow-hidden rounded-xl border border-white/5 bg-navy-deep/20" style={{ minHeight: "908px" }}>
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/4zbXsudLy7F8TIOYgMB9"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
                id="inline-4zbXsudLy7F8TIOYgMB9" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-form-name="main website form"
                data-height="908"
                data-layout-iframe-id="inline-4zbXsudLy7F8TIOYgMB9"
                data-form-id="4zbXsudLy7F8TIOYgMB9"
                title="main website form"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </div>
        </div>

        {/* Location Info */}
        <div className="location-footer mt-16 text-center pb-8 fade-in-up" style={{animationDelay: "0.6s"}}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-accent-gold">📍</span>
            <span className="text-gray-400 text-sm">Primarily Online via Zoom — Face-to-Face Clinic in <a href="https://maps.app.goo.gl/jBSZKEUmrxy4QFjF8" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors font-medium">Bury St Edmunds, Suffolk</a> available.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-16 { margin-top: 4rem; }
        
        .hero-sub { font-size: 1.125rem; color: var(--color-text-muted); line-height: 1.6; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }
        
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .gap-6 { gap: 1.5rem; }
        
        .bg-navy-deep\/20 { background-color: rgba(10, 17, 40, 0.2); }
        .border-white\/5 { border-color: rgba(255, 255, 255, 0.05); }

        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:p-12 { padding: 3rem; }
          .hero-sub { font-size: 1.25rem; }
        }

        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px -20px rgba(244, 162, 97, 0.15);
        }
      `}</style>
    </main>
  );
}
