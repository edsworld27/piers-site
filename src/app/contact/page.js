"use client";

import Script from "next/script";

export default function ContactPage() {

  return (
    <main className="pt-32 pb-24 relative z-10">
      <div className="container max-w-4xl">
        <div className="text-left mb-12 fade-in-up">
          <h1 className="mb-8 text-white italic serif-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            Let's Get in Touch
          </h1>
          <div className="description-text space-y-4 max-w-3xl text-gray-200 leading-relaxed font-light">
            <p>Whether you have a question, want to speak with me directly, or just need clarity — feel free to contact me.</p>
            <p>Use the form below if you would like to book something in, ask a question, arrange a school visit, talk about a workshop, or just speak with me one-to-one. It could be something small. It could be something big. It could also be something you're not even sure how to put into words yet.</p>
            <p>Whatever may be on your mind, please just let me know.</p>
            <p>I'll read it, I'll listen, and I will get back to you personally.</p>
            <p>If you would prefer, you can call/text or email me below:</p>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cyan-accent font-medium">
              <a href="tel:07716008836" className="flex items-center gap-2 hover:underline text-lg">
                <span className="text-2xl">📞</span> 07716008836
              </a>
              <a href="mailto:piersday@me.com" className="hover:underline text-lg flex items-center gap-2">
                <span className="text-2xl">✉️</span> piersday@me.com
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Detailed Inquiry Form in Glass Panel */}
        <div className="glass-panel p-6 md:p-12 fade-in-up relative z-20" style={{animationDelay: "0.2s"}}>
          <div id="form-embed-container" className="relative w-full overflow-hidden rounded-xl bg-white/5" style={{ minHeight: "1050px" }}>
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/4zbXsudLy7F8TIOYgMB9"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  border: "none",
                  filter: "invert(0.9) hue-rotate(180deg) brightness(1.1)" /* Blends light GHL form with dark UI */
                }}
                id="inline-4zbXsudLy7F8TIOYgMB9" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-form-name="main website form"
                data-height="1050"
                data-layout-iframe-id="inline-4zbXsudLy7F8TIOYgMB9"
                data-form-id="4zbXsudLy7F8TIOYgMB9"
                title="main website form"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </div>
          
          <div className="form-footer mt-8 pt-8 border-t border-white/10 text-center">
             <div className="flex justify-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
               <a href="/legal/privacy" className="hover:text-cyan-accent underline decoration-white/20">Privacy Policy</a>
               <span className="opacity-30">|</span>
               <a href="/legal/terms" className="hover:text-cyan-accent underline decoration-white/20">Terms of Service</a>
             </div>
          </div>
        </div>

        {/* Location Info / Custom Footer */}
        <div className="contact-footer-custom mt-20 pt-16 border-t border-white/5 text-center fade-in-up" style={{animationDelay: "0.4s"}}>
          <h4 className="text-white text-xl font-medium mb-4">Piers Day - Suffolk Hypnotherapy</h4>
          <div className="space-y-3 text-gray-300 font-light">
            <p>Direct Phone: <a href="tel:07716008836" className="text-white font-medium hover:text-cyan-accent transition-colors">07716008836</a></p>
            <p>Direct Email: <a href="mailto:piersday@me.com" className="text-white font-medium hover:text-cyan-accent transition-colors">piersday@me.com</a></p>
            <p className="mt-4 italic opacity-80">Appointments available both online and in person.</p>
            <a href="https://maps.app.goo.gl/jBSZKEUmrxy4QFjF8" target="_blank" rel="noreferrer" className="text-cyan-accent hover:underline block mt-4 px-4 py-2 bg-cyan-accent/10 rounded-lg inline-block transition-all hover:bg-cyan-accent/20 border border-cyan-accent/20">
              View Clinic Location (Bury St Edmunds)
            </a>
            <p className="text-xs mt-12 opacity-40">@2025 All Rights Reserved - Clinical Excellence in Hypnotherapy</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-12 { margin-top: 3rem; }
        .mt-20 { margin-top: 5rem; }
        
        .serif-heading {
          font-family: 'Playfair Display', serif;
        }

        .text-cyan-accent {
          color: #00b7ff;
        }

        .text-center { text-align: center; }
        .text-left { text-align: left; }
        
        @media (max-width: 768px) {
          .pt-32 { padding-top: 6rem; }
          .serif-heading { font-size: 2.25rem !important; }
        }
      `}</style>
    </main>
  );
}
