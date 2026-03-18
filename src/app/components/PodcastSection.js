"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const SPOTIFY_SHOW_ID = "34MWXDC2jFeseUl27y5d55";
const SPOTIFY_SHOW_URL = `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`;

const EPISODES = [
  {
    id: 1,
    title: "Mark Ormrod MBE – The Full Story (Part 2)",
    guest: "Mark Ormrod MBE",
    tag: "Mindset & Resilience",
    desc: "An unedited and openly frank talk. Mark lost two legs and one arm in Afghanistan in 2007, yet won Gold at the Invictus Games, broke world records and became an entrepreneur.",
    duration: "43 min",
    date: "Jan 2025",
    grad: ["#0f2027", "#1a3a4a"],
    initials: "MO",
  },
  {
    id: 2,
    title: "Mark Ormrod MBE – A Preview",
    guest: "Mark Ormrod MBE",
    tag: "Mindset & Resilience",
    desc: "Ex-Marine, Invictus Games medallist. In Afghanistan he knelt on an IED which took two legs and one arm. A 12-minute taster of the full conversation.",
    duration: "12 min",
    date: "Jan 2025",
    grad: ["#1a0533", "#2d0e55"],
    initials: "MO",
  },
  {
    id: 3,
    title: "Sir Terry Waite – Life Since Being Kidnapped",
    guest: "Sir Terry Waite CBE",
    tag: "Diplomacy & Resilience",
    desc: "Held hostage 1987–1991 — over three years chained to a radiator in solitary confinement. He discusses forgiveness, anger, and reintegrating into everyday life.",
    duration: "55 min",
    date: "2024",
    grad: ["#0d1b2a", "#1e3a5f"],
    initials: "TW",
  },
  {
    id: 4,
    title: "Lee McQueen – Life Since Winning The Apprentice",
    guest: "Lee McQueen",
    tag: "Entrepreneurship",
    desc: "A short but powerful talk with the 2008 Apprentice winner. He discusses work life, family life, and how he keeps them balanced while making memories from both sides.",
    duration: "28 min",
    date: "2024",
    grad: ["#1a1a2e", "#16213e"],
    initials: "LM",
  },
  {
    id: 5,
    title: "Sir Christopher Haworth – Property, Cancer & Mindset",
    guest: "Sir Christopher Haworth",
    tag: "Leadership & Perseverance",
    desc: "From a farm in Cheshire to building the largest warehouse in Europe, working with Ipswich FC, and fighting cancer — an extraordinary life and extraordinary mindset.",
    duration: "50 min",
    date: "2024",
    grad: ["#0f2027", "#1e4620"],
    initials: "CH",
  },
  {
    id: 6,
    title: "Piers Day – From Property to Hypnotherapy",
    guest: "Piers Day",
    tag: "The Foundation",
    desc: "Piers gives insight into what made him leave 25 years in property for hypnotherapy. He discusses mindset, the subconscious mind, and shares client stories.",
    duration: "40 min",
    date: "2024",
    grad: ["#2c1654", "#3a1e6e"],
    initials: "PD",
  },
  {
    id: 7,
    title: "\"You Can't Buy Happiness But You Can Buy a Boat…\"",
    guest: "Su & Pete Stirling",
    tag: "Entrepreneurship",
    desc: "Su and Pete talk about their yacht servicing company PSA Prime Marine, their amazing working and family relationship, and how they grew a business through lockdown.",
    duration: "38 min",
    date: "2024",
    grad: ["#1a3c34", "#2a6050"],
    initials: "SP",
  },
  {
    id: 8,
    title: "Jim Francis – Personal Growth & Entrepreneurship",
    guest: "Jim Francis",
    tag: "Mindset",
    desc: "A living legend in personal growth. Jim discusses the importance of finding positive role models and mentors, and shares wisdom on navigating challenging times.",
    duration: "45 min",
    date: "2024",
    grad: ["#1f1c18", "#3a3730"],
    initials: "JF",
  },
  {
    id: 9,
    title: "Nick Greer – Mental Health & Property",
    guest: "Nick Greer",
    tag: "Mental Health",
    desc: "A relaxed, non-selling talk about Nick's life — from buying property for £1 down to mental health and how to inspire people. Warm, honest and full of insight.",
    duration: "42 min",
    date: "2024",
    grad: ["#16213e", "#0f3460"],
    initials: "NG",
  },
  {
    id: 10,
    title: "Marc Mason – From DJ in Ibiza to Largest Warehouse in Europe",
    guest: "Marc Mason",
    tag: "Entrepreneurship",
    desc: "From building amplifiers at school to DJing Ibiza, settling in Suffolk and Malta, and ending up building the largest warehouse in Europe while working with Ipswich FC.",
    duration: "48 min",
    date: "2024",
    grad: ["#2a0000", "#4a1010"],
    initials: "MM",
  },
  {
    id: 11,
    title: "Penny Morgan – Love Your Image",
    guest: "Penny Morgan",
    tag: "Wellness & Creativity",
    desc: "A photographer with the rare ability to make people relax in front of a camera. Her 'Love Your Image' project gets the best out of people — a genuine, uplifting chat.",
    duration: "35 min",
    date: "2024",
    grad: ["#0d2137", "#1a3a54"],
    initials: "PM",
  },
  {
    id: 12,
    title: "Helen Wyer – IBS Specialist",
    guest: "Helen Wyer",
    tag: "Health & Wellbeing",
    desc: "One of the UK's top IBS specialists discusses her life as a teacher and traveller before becoming a therapist, and how she helps thousands manage and overcome IBS.",
    duration: "40 min",
    date: "2024",
    grad: ["#1e3a1e", "#2d5c2d"],
    initials: "HW",
  },
  {
    id: 13,
    title: "Hanna Longstaff – Eating Disorder Recovery",
    guest: "Hanna Longstaff",
    tag: "Mental Health & Recovery",
    desc: "Hanna's story and life experiences have put her at the forefront of eating disorder recovery. She gives insight into how disruptive these conditions can be — and the path out.",
    duration: "44 min",
    date: "2024",
    grad: ["#2a1550", "#3d2070"],
    initials: "HL",
  },
  {
    id: 14,
    title: "Cai Graham – Teenagers, Parents & Family",
    guest: "Cai Graham",
    tag: "Wellbeing for Families",
    desc: "Cai opens up about her work with teenagers, parents, and families, emphasising how communication and understanding within the family framework changes everything.",
    duration: "38 min",
    date: "2024",
    grad: ["#1a2800", "#2e4a00"],
    initials: "CG",
  },
  {
    id: 15,
    title: "Ali Walsh – From Coeliac Diagnosis to World Expert",
    guest: "Ali Walsh",
    tag: "Health & Recovery",
    desc: "Aged 20, Ali's life changed when she became a Coeliac. From those dark days she became a world-renowned expert, author, and runs courses helping people globally.",
    duration: "36 min",
    date: "2024",
    grad: ["#002626", "#004444"],
    initials: "AW",
  },
  {
    id: 16,
    title: "Suzanne – From Executive Burnout to Mindset Coaching",
    guest: "Suzanne (Zan Lifecoaching)",
    tag: "Personal Development",
    desc: "An open and frank talk about the journey from accounting to mindset coaching. From executive burnout to the top of the life coaching industry — in-depth techniques on recovery.",
    duration: "46 min",
    date: "2024",
    grad: ["#1a1a00", "#333300"],
    initials: "SZ",
  },
  {
    id: 17,
    title: "Darren – The Entrepreneur",
    guest: "Darren",
    tag: "Entrepreneurship",
    desc: "The ups and downs of being an entrepreneur. His highs and lows, how he forms new businesses, deals with self-belief, and what it takes to launch during lockdown.",
    duration: "40 min",
    date: "2024",
    grad: ["#2e0000", "#4a0d0d"],
    initials: "DA",
  },
  {
    id: 18,
    title: "Paula Benson – Film and Furniture",
    guest: "Paula Benson",
    tag: "Creativity & Business",
    desc: "How Paula created Film and Furniture — the online resource where film lovers discover stories behind iconic furniture seen on screen. Light-hearted, fun, and full of great anecdotes.",
    duration: "32 min",
    date: "2024",
    grad: ["#001a2e", "#002a4a"],
    initials: "PB",
  },
  {
    id: 19,
    title: "Sian – Swimwear, The Apprentice & Adapting During Covid",
    guest: "Sian",
    tag: "Business & Resilience",
    desc: "Life after The Apprentice. When Covid halted her swimwear business, Sian instantly pivoted and created a whole new business — a masterclass in adaptability.",
    duration: "34 min",
    date: "2024",
    grad: ["#0a1628", "#1a2d4c"],
    initials: "SI",
  },
  {
    id: 20,
    title: "Andy – A Very Honest Mental Health Talk",
    guest: "Andy",
    tag: "Mental Health",
    desc: "Once in a while you meet someone who genuinely inspires and sticks in your memory. Andy is such a person — an honest, open talk with some great tips on getting through the worst times.",
    duration: "38 min",
    date: "2024",
    grad: ["#1e2d1e", "#2d4a2d"],
    initials: "AN",
  },
];

/* ── Draggable Player ────────────────────────────────────────────── */
function DraggablePlayer({ open, onClose }) {
  const [pos, setPos]           = useState({ x: 24, y: 80 });
  const [minimized, setMinimized] = useState(false);
  const dragging   = useRef(false);
  const startOff   = useRef({ x: 0, y: 0 });
  const playerRef  = useRef(null);

  const clamp = useCallback((val, min, max) => Math.max(min, Math.min(max, val)), []);

  /* Mouse drag */
  const onMouseDown = (e) => {
    if (e.target.closest("button, a, iframe, input")) return;
    dragging.current = true;
    startOff.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  };

  /* Touch drag */
  const onTouchStart = (e) => {
    if (e.target.closest("button, a, iframe, input")) return;
    const t = e.touches[0];
    dragging.current = true;
    startOff.current = { x: t.clientX - pos.x, y: t.clientY - pos.y };
  };

  useEffect(() => {
    const W = () => playerRef.current?.offsetWidth  || 380;
    const H = () => playerRef.current?.offsetHeight || 100;

    const onMove = (e) => {
      if (!dragging.current) return;
      const cx = e.clientX ?? e.touches?.[0]?.clientX;
      const cy = e.clientY ?? e.touches?.[0]?.clientY;
      if (cx == null) return;
      setPos({
        x: clamp(cx - startOff.current.x, 0, window.innerWidth  - W()),
        y: clamp(cy - startOff.current.y, 0, window.innerHeight - H()),
      });
    };
    const onUp = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend",  onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend",  onUp);
    };
  }, [clamp]);

  /* Reset position on open */
  useEffect(() => {
    if (open) setPos({ x: Math.max(24, window.innerWidth - 420), y: 90 });
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={playerRef}
      className="pod-player-wrap"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Handle / title bar */}
      <div
        className="pod-player-handle"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <span className="pod-handle-grip" aria-hidden="true">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            {[0,4,8].map(y => (
              <rect key={y} x="0" y={y} width="20" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)"/>
            ))}
          </svg>
        </span>
        <span className="pod-handle-title">Inspirational Talks with Piers Day</span>
        <div className="pod-handle-btns">
          <button
            className="pod-handle-btn"
            onClick={() => setMinimized(m => !m)}
            aria-label={minimized ? "Expand player" : "Minimise player"}
          >
            {minimized ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            )}
          </button>
          <button className="pod-handle-btn pod-handle-btn--close" onClick={onClose} aria-label="Close player">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      {/* Spotify embed */}
      {!minimized && (
        <div className="pod-player-embed">
          <iframe
            src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Inspirational Talks with Piers Day on Spotify"
          />
        </div>
      )}
    </div>
  );
}

/* ── Episode Card ────────────────────────────────────────────────── */
function EpisodeCard({ ep, onPlay }) {
  return (
    <div className="pod-card">
      {/* Artwork */}
      <div
        className="pod-card-art"
        style={{ background: `linear-gradient(135deg, ${ep.grad[0]} 0%, ${ep.grad[1]} 100%)` }}
      >
        <span className="pod-card-initials">{ep.initials}</span>
        <span className="pod-card-mic" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </span>
      </div>

      {/* Content */}
      <div className="pod-card-content">
        <div className="pod-card-meta">
          <span className="pod-card-tag">{ep.tag}</span>
          <span className="pod-card-dur">{ep.duration}</span>
        </div>
        <h3 className="pod-card-title">{ep.title}</h3>
        <p className="pod-card-guest">with {ep.guest}</p>
        <p className="pod-card-desc">{ep.desc}</p>
        <button className="pod-card-play" onClick={onPlay}>
          <span className="pod-card-play-icon" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </span>
          Play Episode
        </button>
      </div>
    </div>
  );
}

/* ── Main Section ────────────────────────────────────────────────── */
export default function PodcastSection() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [visible, setVisible]       = useState(9);

  const openPlayer = () => setPlayerOpen(true);

  return (
    <div className="pod-section fade-in-up">

      {/* Floating draggable player */}
      <DraggablePlayer open={playerOpen} onClose={() => setPlayerOpen(false)} />

      {/* ── Show header ── */}
      <div className="pod-show-header">
        <div className="pod-show-art">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </div>
        <div className="pod-show-info">
          <span className="pod-show-eyebrow">Podcast</span>
          <h2 className="pod-show-title">Inspirational Talks with Piers Day</h2>
          <p className="pod-show-sub">Real stories from remarkable people. Conversations with entrepreneurs, mindset coaches, resilience icons, and everyday humans who chose to change their story.</p>
          <div className="pod-show-actions">
            <button className="pod-open-btn" onClick={openPlayer}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Open Player
            </button>
            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pod-spotify-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Follow on Spotify
            </a>
          </div>
        </div>
      </div>

      {/* ── Spotify CTA banner ── */}
      <div className="pod-spotify-cta">
        <div className="pod-spotify-cta-inner">
          <div>
            <p className="pod-spotify-cta-title">Never miss an episode</p>
            <p className="pod-spotify-cta-sub">Subscribe on Spotify and get every new conversation delivered straight to you.</p>
          </div>
          <a href={SPOTIFY_SHOW_URL} target="_blank" rel="noopener noreferrer" className="pod-spotify-follow-link">
            Subscribe free →
          </a>
        </div>
      </div>

      {/* ── Episode grid ── */}
      <div className="pod-grid">
        {EPISODES.slice(0, visible).map(ep => (
          <EpisodeCard key={ep.id} ep={ep} onPlay={openPlayer} />
        ))}
      </div>

      {visible < EPISODES.length && (
        <div className="pod-load-more">
          <button onClick={() => setVisible(v => v + 9)} className="btn btn-primary">
            Load more episodes →
          </button>
        </div>
      )}

      <style jsx>{`
        /* ── Section ── */
        .pod-section { padding: 0.5rem 0 2rem; }

        /* ── Show header ── */
        .pod-show-header {
          display: flex;
          gap: 1.75rem;
          align-items: flex-start;
          background: #fff;
          border: 1.5px solid #e8eff4;
          border-radius: 18px;
          padding: 2rem;
          margin-bottom: 1.25rem;
        }
        .pod-show-art {
          flex-shrink: 0;
          width: 88px; height: 88px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0C1B2E 0%, #1a3a54 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .pod-show-info { flex: 1; min-width: 0; }
        .pod-show-eyebrow {
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.14em; color: #6BAE8A; display: block; margin-bottom: 0.35rem;
        }
        .pod-show-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 500; color: #1a2b3c; margin: 0 0 0.6rem; line-height: 1.2;
        }
        .pod-show-sub {
          font-size: 0.9rem; color: rgba(26,43,60,0.58); line-height: 1.7;
          margin: 0 0 1.1rem; max-width: 560px;
        }
        .pod-show-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .pod-open-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 0.65rem 1.25rem; border-radius: 10px;
          background: #1A3A2C; color: #fff; border: none; cursor: pointer;
          font-size: 0.875rem; font-weight: 600;
          transition: background 0.18s, transform 0.15s;
        }
        .pod-open-btn:hover { background: #2D6A4F; transform: translateY(-1px); }
        .pod-spotify-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 0.65rem 1.25rem; border-radius: 10px;
          background: #1DB954; color: #fff; text-decoration: none;
          font-size: 0.875rem; font-weight: 600;
          transition: background 0.18s, transform 0.15s;
        }
        .pod-spotify-btn:hover { background: #17a34a; transform: translateY(-1px); }

        /* ── Spotify CTA banner ── */
        .pod-spotify-cta {
          background: linear-gradient(135deg, #0C1B2E 0%, #1a3a54 100%);
          border-radius: 14px; padding: 1.25rem 1.5rem; margin-bottom: 1.75rem;
        }
        .pod-spotify-cta-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1.25rem; flex-wrap: wrap;
        }
        .pod-spotify-cta-title {
          font-weight: 600; font-size: 0.95rem; color: #f5f0e8; margin: 0 0 0.2rem;
        }
        .pod-spotify-cta-sub {
          font-size: 0.82rem; color: rgba(245,240,232,0.55); margin: 0;
        }
        .pod-spotify-follow-link {
          display: inline-block; padding: 0.6rem 1.25rem;
          background: #1DB954; color: #fff; border-radius: 8px; text-decoration: none;
          font-size: 0.875rem; font-weight: 600; white-space: nowrap;
          transition: background 0.18s;
        }
        .pod-spotify-follow-link:hover { background: #17a34a; }

        /* ── Episode grid ── */
        .pod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 900px) { .pod-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .pod-grid { grid-template-columns: 1fr; } }

        /* ── Episode card ── */
        .pod-card {
          background: #fff;
          border: 1.5px solid #e8eff4;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .pod-card:hover {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
          transform: translateY(-2px);
        }
        .pod-card-art {
          position: relative;
          height: 90px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .pod-card-initials {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem; font-weight: 600;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.04em;
          position: relative; z-index: 1;
        }
        .pod-card-mic {
          position: absolute; right: 12px; bottom: 8px; z-index: 0;
        }
        .pod-card-content {
          padding: 1rem 1.1rem 1.1rem;
          display: flex; flex-direction: column; gap: 0.35rem; flex: 1;
        }
        .pod-card-meta {
          display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
        }
        .pod-card-tag {
          font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #6BAE8A;
        }
        .pod-card-dur {
          font-size: 0.7rem; color: rgba(26,43,60,0.4); white-space: nowrap;
        }
        .pod-card-title {
          font-size: 0.92rem; font-weight: 700; color: #1a2b3c;
          line-height: 1.35; margin: 0;
        }
        .pod-card-guest {
          font-size: 0.78rem; color: rgba(26,43,60,0.5);
          font-style: italic; margin: 0;
        }
        .pod-card-desc {
          font-size: 0.82rem; color: rgba(26,43,60,0.6); line-height: 1.65;
          margin: 0.15rem 0 0.35rem; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .pod-card-play {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: auto; padding: 0.5rem 0.9rem;
          background: rgba(107,174,138,0.1);
          color: #3d8a63; border: 1.5px solid rgba(107,174,138,0.25);
          border-radius: 8px; font-size: 0.8rem; font-weight: 600;
          cursor: pointer; align-self: flex-start;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
        }
        .pod-card-play:hover {
          background: #6BAE8A; color: #fff;
          border-color: #6BAE8A;
        }
        .pod-card-play-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: #6BAE8A; color: #fff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .pod-card-play:hover .pod-card-play-icon { background: #fff; color: #3d8a63; }

        /* ── Load more ── */
        .pod-load-more { text-align: center; padding-top: 1rem; }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* DRAGGABLE PLAYER                                          */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        :global(.pod-player-wrap) {
          position: fixed;
          z-index: 300;
          width: 380px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15);
          animation: podPlayerIn 0.28s cubic-bezier(0.34,1.3,0.64,1) forwards;
        }
        @keyframes podPlayerIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        :global(.pod-player-handle) {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.7rem 1rem;
          background: #0C1B2E;
          cursor: grab;
          user-select: none;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        :global(.pod-player-handle:active) { cursor: grabbing; }
        :global(.pod-handle-grip) { flex-shrink: 0; cursor: grab; }
        :global(.pod-handle-title) {
          flex: 1; font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.8);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        :global(.pod-handle-btns) { display: flex; gap: 4px; flex-shrink: 0; }
        :global(.pod-handle-btn) {
          width: 26px; height: 26px; border-radius: 6px;
          background: rgba(255,255,255,0.08); border: none; cursor: pointer;
          color: rgba(255,255,255,0.65);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        :global(.pod-handle-btn:hover) { background: rgba(255,255,255,0.16); color: #fff; }
        :global(.pod-handle-btn--close:hover) { background: rgba(220,60,60,0.7); color: #fff; }
        :global(.pod-player-embed) { display: block; line-height: 0; }
        :global(.pod-player-embed iframe) { display: block; }

        @media (max-width: 480px) {
          :global(.pod-player-wrap) { width: calc(100vw - 32px); left: 16px !important; }
          .pod-show-header { flex-direction: column; }
          .pod-show-art { width: 64px; height: 64px; }
        }
      `}</style>
    </div>
  );
}
