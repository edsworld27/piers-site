"use client";

import { useState, useRef, useEffect } from "react";

const QUICK_REPLIES = [
  "I'd like to book a free consultation",
  "What issues do you treat?",
  "Do you offer online sessions?",
  "How many sessions will I need?",
  "What's the cost?",
];

const BOT_RESPONSES = {
  "I'd like to book a free consultation":
    "Great — the easiest way is to fill in the contact form on this page, or call / text Piers directly on 07716 008 836. He'll get back to you personally, usually within a few hours.",
  "What issues do you treat?":
    "Piers works with anxiety, panic attacks, phobias, stop smoking, weight management, trauma/PTSD, confidence, sleep, habits, addictions, and much more. Visit the 'Where I Can Help' page for a full list.",
  "Do you offer online sessions?":
    "Yes — sessions are available worldwide via Zoom, as well as in person at the Suffolk clinic near Bury St Edmunds.",
  "How many sessions will I need?":
    "Most people see meaningful change in 2–4 sessions. Some issues — like stopping smoking — can resolve in a single intensive session. Piers will give you an honest assessment on your free consultation call.",
  "What's the cost?":
    "Session fees vary depending on the issue and session length. The initial consultation is completely free. Contact Piers directly for current pricing.",
};

function BotMessage({ text }) {
  return (
    <div className="cb-msg cb-msg--bot">
      <span className="cb-avatar" aria-hidden="true">P</span>
      <div className="cb-bubble cb-bubble--bot">{text}</div>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="cb-msg cb-msg--user">
      <div className="cb-bubble cb-bubble--user">{text}</div>
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there 👋 I'm here to help answer quick questions about working with Piers. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: "user", text };
    const botText = BOT_RESPONSES[text] ||
      "Thanks for your message! For a personal response, please use the contact form or call Piers directly on 07716 008 836.";
    setMessages(m => [...m, userMsg, { from: "bot", text: botText }]);
    setInput("");
    setShowQuick(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Panel */}
      {open && (
        <div className="cb-panel" role="dialog" aria-label="Chat with Piers Day Hypnotherapy">
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-info">
              <span className="cb-header-avatar" aria-hidden="true">P</span>
              <div>
                <p className="cb-header-name">Piers Day</p>
                <p className="cb-header-sub">Clinical Hypnotherapist</p>
              </div>
            </div>
            <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="cb-messages">
            {messages.map((m, i) =>
              m.from === "bot"
                ? <BotMessage key={i} text={m.text} />
                : <UserMessage key={i} text={m.text} />
            )}

            {/* Quick replies */}
            {showQuick && (
              <div className="cb-quick-replies">
                {QUICK_REPLIES.map(q => (
                  <button key={q} className="cb-quick-btn" onClick={() => sendMessage(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form className="cb-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="cb-input"
              placeholder="Type a message…"
              value={input}
              onChange={e => setInput(e.target.value)}
              aria-label="Type your message"
            />
            <button type="submit" className="cb-send" aria-label="Send message" disabled={!input.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>

          {/* Branding */}
          <div className="cb-branding">
            Crafted by{" "}
            <a href="https://milesymedia.com" target="_blank" rel="noopener noreferrer" className="cb-brand-link">
              Milesymedia
            </a>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        className={`cb-trigger${open ? " cb-trigger--open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {!open && <span className="cb-trigger-label">Chat</span>}
      </button>

      <style jsx>{`
        /* ── Trigger ─────────────────────────────────────── */
        :global(.cb-trigger) {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 9000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem 0.75rem 1rem;
          background: #0C1B2E;
          color: #fff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(12,27,46,0.35);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: var(--font-body);
        }
        :global(.cb-trigger svg) { width: 20px; height: 20px; flex-shrink: 0; }
        :global(.cb-trigger:hover) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(12,27,46,0.4);
          background: #1A3448;
        }
        :global(.cb-trigger--open) { padding: 0.75rem; border-radius: 50%; }
        :global(.cb-trigger-label) {
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── Panel ───────────────────────────────────────── */
        :global(.cb-panel) {
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          z-index: 8999;
          width: 360px;
          max-height: 520px;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 12px 48px rgba(12,27,46,0.22), 0 2px 8px rgba(12,27,46,0.1);
          overflow: hidden;
          animation: cbSlideUp 0.25s ease;
        }
        @keyframes cbSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header */
        :global(.cb-header) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1rem 1rem 1.125rem;
          background: #0C1B2E;
          flex-shrink: 0;
        }
        :global(.cb-header-info) { display: flex; align-items: center; gap: 0.75rem; }
        :global(.cb-header-avatar) {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #6BAE8A;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.875rem; font-weight: 700; color: #fff;
        }
        :global(.cb-header-name) {
          font-size: 0.9rem; font-weight: 700; color: #f5f0e8; margin: 0;
          font-family: var(--font-body);
        }
        :global(.cb-header-sub) {
          font-size: 0.72rem; color: rgba(245,240,232,0.5); margin: 0;
          font-family: var(--font-body);
        }
        :global(.cb-close) {
          background: none; border: none; cursor: pointer;
          color: rgba(245,240,232,0.5); padding: 4px;
          display: flex; align-items: center; transition: color 0.16s;
        }
        :global(.cb-close svg) { width: 16px; height: 16px; }
        :global(.cb-close:hover) { color: #f5f0e8; }

        /* Messages */
        :global(.cb-messages) {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #f8fafb;
        }
        :global(.cb-messages::-webkit-scrollbar) { width: 4px; }
        :global(.cb-messages::-webkit-scrollbar-thumb) { background: #d0dfe8; border-radius: 4px; }

        :global(.cb-msg) { display: flex; gap: 0.5rem; align-items: flex-end; }
        :global(.cb-msg--user) { flex-direction: row-reverse; }

        :global(.cb-avatar) {
          width: 28px; height: 28px; flex-shrink: 0;
          border-radius: 50%;
          background: #0C1B2E;
          color: #6BAE8A;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 700;
        }

        :global(.cb-bubble) {
          max-width: 78%;
          padding: 0.6rem 0.875rem;
          border-radius: 14px;
          font-size: 0.875rem;
          line-height: 1.55;
          font-family: var(--font-body);
        }
        :global(.cb-bubble--bot) {
          background: #fff;
          border: 1px solid #e4edf2;
          color: #2a3d50;
          border-bottom-left-radius: 4px;
        }
        :global(.cb-bubble--user) {
          background: #0C1B2E;
          color: #f5f0e8;
          border-bottom-right-radius: 4px;
        }

        /* Quick replies */
        :global(.cb-quick-replies) {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-left: 2.25rem;
        }
        :global(.cb-quick-btn) {
          background: #fff;
          border: 1.5px solid #6BAE8A;
          border-radius: 20px;
          padding: 0.45rem 0.875rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #2D6A4F;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, color 0.15s;
          font-family: var(--font-body);
        }
        :global(.cb-quick-btn:hover) { background: #6BAE8A; color: #fff; }

        /* Input row */
        :global(.cb-input-row) {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 0.875rem;
          background: #fff;
          border-top: 1px solid #e8f0ec;
          flex-shrink: 0;
        }
        :global(.cb-input) {
          flex: 1;
          border: 1.5px solid #d8e5e0;
          border-radius: 8px;
          padding: 0.55rem 0.875rem;
          font-size: 0.875rem;
          color: #1a2b3c;
          outline: none;
          background: #f8fafb;
          font-family: var(--font-body);
          transition: border-color 0.16s;
        }
        :global(.cb-input:focus) { border-color: #6BAE8A; background: #fff; }
        :global(.cb-input::placeholder) { color: #a8bfc8; }

        :global(.cb-send) {
          width: 36px; height: 36px; flex-shrink: 0;
          background: #0C1B2E;
          border: none; border-radius: 8px;
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.16s, opacity 0.16s;
        }
        :global(.cb-send svg) { width: 15px; height: 15px; }
        :global(.cb-send:hover:not(:disabled)) { background: #6BAE8A; }
        :global(.cb-send:disabled) { opacity: 0.35; cursor: not-allowed; }

        /* Branding */
        :global(.cb-branding) {
          text-align: center;
          font-size: 0.68rem;
          color: #aabbc6;
          padding: 0.45rem 1rem 0.55rem;
          background: #fff;
          border-top: 1px solid #eef4f0;
          font-family: var(--font-body);
        }
        :global(.cb-brand-link) {
          color: #6BAE8A;
          font-weight: 600;
          text-decoration: none;
        }
        :global(.cb-brand-link:hover) { text-decoration: underline; }

        /* Mobile */
        @media (max-width: 480px) {
          :global(.cb-panel) {
            right: 0.75rem;
            width: calc(100vw - 1.5rem);
            bottom: 4.5rem;
          }
          :global(.cb-trigger) { right: 0.75rem; bottom: 1rem; }
        }
      `}</style>
    </>
  );
}
