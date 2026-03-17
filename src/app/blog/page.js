"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useVideoPlayer } from "../components/VideoPlayerContext";

function VideoEmbed({ videoId, title, tag }) {
  const { playVideo, activeVideo, dismissVideo, enterMiniMode, exitMiniMode, isFloating } = useVideoPlayer();
  const isActive = activeVideo?.videoId === videoId;
  const placeholderRef = useRef(null);
  const [anchorInView, setAnchorInView] = useState(false);

  useEffect(() => {
    if (!isActive) { setAnchorInView(false); return; }
    const el = placeholderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnchorInView(entry.isIntersecting);
        if (!entry.isIntersecting) enterMiniMode();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isActive, enterMiniMode]);

  if (isActive) {
    // Scrolled back while mini player active → resume banner
    if (isFloating && anchorInView) {
      return (
        <div ref={placeholderRef} className="video-anchor-placeholder video-anchor-resume">
          <div className="video-anchor-banner">
            <span className="video-anchor-banner-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="14" rx="2"/>
                <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"/>
              </svg>
            </span>
            <p className="video-anchor-banner-text">Video is playing in the mini player.</p>
            <button className="video-anchor-resume-btn" onClick={exitMiniMode}>Resume here →</button>
          </div>
        </div>
      );
    }

    // Mini player active, anchor off-screen → preserve layout space
    if (isFloating) return <div ref={placeholderRef} className="video-anchor-placeholder" />;

    // Inline player — lives naturally in page flow, no fixed overlay
    return (
      <div ref={placeholderRef} className="video-anchor-inline">
        <div className="video-anchor-bar">
          {title && <span className="video-anchor-title">{title}</span>}
          <button className="video-anchor-btn" onClick={enterMiniMode} title="Pop out to mini player">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <rect x="13" y="8" width="8" height="7" rx="1" fill="currentColor" stroke="none"/>
            </svg>
          </button>
          <button className="video-anchor-btn" onClick={dismissVideo} title="Close video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="video-anchor-iframe-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    );
  }

  return (
    <button className="video-thumb-btn" onClick={() => playVideo(videoId, title, tag)} aria-label={`Play: ${title}`}>
      <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={title} className="video-thumb-img" loading="lazy" />
      <span className="video-thumb-play" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </span>
      {tag && <span className="video-thumb-tag">{tag}</span>}
    </button>
  );
}

function FAQAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        className="faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="faq-q-text">{question}</span>
        <span className="faq-chevron" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-panel">
        <div className="faq-panel-inner">
          <p className="faq-a-text">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    category: "About Hypnotherapy",
    items: [
      {
        q: "What is clinical hypnotherapy and how does it work?",
        a: "Clinical hypnotherapy uses guided relaxation to bring your mind into a focused, receptive state — similar to deep daydreaming. In this state, the critical, analytical part of the mind steps aside, allowing us to work directly with the subconscious beliefs and patterns that drive your behaviour. Unlike stage hypnosis, you remain fully aware and in control at all times."
      },
      {
        q: "Is hypnotherapy scientifically proven?",
        a: "Yes. Clinical hypnotherapy is recognised by the British Medical Association and is backed by decades of peer-reviewed research. Neuroimaging studies show measurable changes in brain activity during hypnotic states, and clinical trials support its effectiveness for anxiety, chronic pain, IBS, smoking cessation, and more."
      },
      {
        q: "Will I be unconscious or out of control during hypnosis?",
        a: "Not at all. Hypnosis is not sleep. You are aware of everything around you and can open your eyes and end the session whenever you choose. You retain complete control throughout. No one can make you do or say anything against your values or will."
      },
      {
        q: "Can everyone be hypnotised?",
        a: "Almost everyone can be hypnotised. The only requirements are a willingness to participate and the ability to follow simple instructions. People who are resistant or sceptical can still benefit — often just experiencing it as a very deep relaxation from which the therapeutic work still proceeds effectively."
      },
      {
        q: "How is hypnotherapy different from counselling or CBT?",
        a: "Counselling and CBT primarily work at the conscious level — analysing thoughts and behaviours. Hypnotherapy works directly with the subconscious, where the root beliefs and emotional responses are stored. This often means faster, more lasting change without years of talk therapy. Rather than managing symptoms, we aim to remove the underlying cause."
      }
    ]
  },
  {
    category: "Anxiety & Panic Attacks",
    items: [
      {
        q: "Can hypnotherapy cure anxiety?",
        a: "Hypnotherapy can produce profound and lasting reductions in anxiety — often described by clients as a complete resolution rather than just management. By identifying and rewriting the subconscious beliefs that trigger the anxiety response, the mind stops interpreting safe situations as threatening. Results vary, but many clients experience significant relief within 2–4 sessions."
      },
      {
        q: "Can hypnotherapy help with panic attacks?",
        a: "Yes. Panic attacks are a subconscious emergency response that has been misfired. Hypnotherapy works to recalibrate this response — teaching the nervous system that the trigger is safe and interrupting the cycle before it escalates. Clients typically learn to reduce or eliminate panic attacks within a handful of sessions."
      },
      {
        q: "Does hypnotherapy work for social anxiety?",
        a: "Social anxiety is rooted in subconscious beliefs about judgement, rejection, and self-worth. Hypnotherapy is particularly effective here because it addresses those core beliefs directly, rather than trying to override them with conscious affirmations. Many clients report a genuine shift in how they feel in social situations, not just coping strategies."
      },
      {
        q: "Can hypnotherapy help with trauma and PTSD?",
        a: "Yes. Hypnotherapy is one of the most effective tools for trauma processing. It allows us to access the stored memory safely, reduce the emotional charge attached to it, and update how the mind has filed that experience. This is not about forgetting — it is about no longer being controlled by the past."
      },
      {
        q: "What causes anxiety at the subconscious level?",
        a: "Anxiety is typically rooted in a subconscious belief formed during a past experience — often in childhood — that something is dangerous or that you are not safe, capable, or worthy. The conscious mind may know logically that a situation is fine, but the subconscious overrides it with the old survival programme. Hypnotherapy finds and updates that programme."
      }
    ]
  },
  {
    category: "Stop Smoking & Vaping",
    items: [
      {
        q: "Can I stop smoking in a single hypnotherapy session?",
        a: "Yes — and this is the standard approach for most clients. A single, focused stop-smoking session typically lasts around 90 minutes and addresses both the physical habit loop and the emotional dependency. The majority of clients leave as non-smokers and do not return for further sessions."
      },
      {
        q: "What is the success rate for hypnotherapy to quit smoking?",
        a: "Studies consistently show hypnotherapy outperforms nicotine patches, gum, and willpower alone. A widely cited New Scientist meta-analysis ranked hypnotherapy as the most effective method for smoking cessation. Individual results depend on motivation, but clients who genuinely want to stop have very high success rates."
      },
      {
        q: "Does hypnotherapy work for vaping and e-cigarette addiction?",
        a: "Yes. Vaping creates the same psychological dependency patterns as cigarettes — the habit loop, the trigger responses, the emotional association with the device. The approach is identical: we target the subconscious programming that keeps you reaching for it."
      },
      {
        q: "Will I get cravings or withdrawal symptoms after the session?",
        a: "Most clients report little to no cravings because the session works on the part of the mind generating the desire. Physical nicotine withdrawal is typically mild and brief. The key is that after the session, you simply don't want to smoke — the craving has been addressed at the source."
      }
    ]
  },
  {
    category: "Weight Management",
    items: [
      {
        q: "How does hypnotherapy help with weight loss?",
        a: "Most weight issues are not about information (everyone knows vegetables are healthier than crisps) — they are about emotional eating, subconscious comfort associations, and self-image beliefs. Hypnotherapy addresses these root drivers: stress eating, boredom eating, reward patterns, and the internal story you hold about your body and worth."
      },
      {
        q: "What is virtual gastric band hypnotherapy?",
        a: "Virtual gastric band is a hypnotherapy programme that uses guided visualisation to create the psychological experience of having a gastric band fitted. The subconscious treats this as real, reducing portion-size comfort and appetite responses. It is non-invasive, carries none of the surgical risks, and works for clients who need help reducing quantity rather than changing emotional patterns."
      },
      {
        q: "How many sessions do I need for weight management?",
        a: "This varies by individual. Some clients see significant shifts in just 2–3 sessions. Others benefit from a longer programme addressing emotional eating, motivation, and body image over 4–6 sessions. We discuss this in the initial consultation based on your specific relationship with food and your body."
      },
      {
        q: "Can hypnotherapy change my relationship with food long-term?",
        a: "Yes — this is exactly the goal. Rather than willpower-based dieting (which requires constant conscious effort), we aim to change what you want at a subconscious level. When you genuinely no longer desire a nightly biscuit habit or emotional snacking, no effort is required to resist it."
      }
    ]
  },
  {
    category: "Sessions, Pricing & Location",
    items: [
      {
        q: "Where are sessions held — online or in person?",
        a: "The majority of sessions are held online via Zoom. This is just as effective as in-person therapy and allows you to work from the safety and comfort of your own home, anywhere in the UK. Face-to-face sessions are available at the clinic in Bury St Edmunds, Suffolk, by arrangement."
      },
      {
        q: "How long is a hypnotherapy session?",
        a: "Initial sessions typically run 75–90 minutes to allow time for thorough discussion, history-taking, and the therapeutic work itself. Follow-up sessions are usually 60 minutes. Stop-smoking sessions are a dedicated 90-minute single appointment."
      },
      {
        q: "How many sessions will I need?",
        a: "Piers' approach aims for rapid, lasting results — not open-ended therapy. Smoking and many phobias: 1 session. Anxiety, confidence, and weight management: typically 2–4 sessions. Complex trauma or PTSD: 3–6 sessions. You will always be given an honest assessment at your first consultation."
      },
      {
        q: "Do you offer a free initial consultation?",
        a: "Yes. Piers offers a no-obligation initial consultation to understand what you want to change, answer your questions honestly, and confirm that hypnotherapy is the right approach for you. There is no pressure and no hard sell. Book through the contact page."
      },
      {
        q: "Is hypnotherapy covered by private health insurance?",
        a: "Some private health insurers do cover clinical hypnotherapy, particularly for anxiety, IBS, and pain management. It is worth checking your policy or speaking with your provider. Piers can provide receipts and session notes to support a claim where required."
      }
    ]
  }
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Piers Day Hypnotherapy Resources",
  "description": "Evidence-based articles and FAQs on hypnotherapy, anxiety, smoking cessation, weight loss, and subconscious change.",
  "url": "https://www.piersday.com/blog",
  "publisher": {
    "@type": "Person",
    "name": "Piers Day",
    "jobTitle": "Clinical Hypnotherapist",
    "url": "https://www.piersday.com/about"
  }
};

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");

  // Unified "Mega-Card" Topic Database
  // One card contains the Video, Article excerpts, and FAQs to prevent escaping the site.
  const topics = [
  {
    "id": "piers-master",
    "title": "Who is Piers Day?",
    "tag": "The Foundation",
    "videoId": null,
    "article": {
      "headline": "One Solution. Hundreds of Applications.",
      "content": "I do one thing: I give you back control of your mind by erasing limiting beliefs. But I apply this one skill in hundreds of ways.\n\nWhether you are struggling with crushing panic attacks, a 40-a-day smoking habit, or an inability to lose weight, the root cause is almost always the same: a subconscious mind running a faulty survival program.\n\nMy approach isn't about traditional 'talk therapy' where we spend years discussing your childhood. It's about direct, rapid intervention. By accessing the subconscious, we update the software that is driving your unwanted behaviors and emotions. Once the root belief is changed, the symptom (anxiety, addiction, self-doubt) simply collapses.\n\nWe stop managing symptoms and start eliminating the cause."
    },
    "faqs": [
      {
        "question": "How does the unconscious mind affect me?",
        "answer": "Neuroscience shows the conscious mind is responsible for only 5-10% of mental activity. The remaining 90-95% operates unconsciously. It constantly scans for safety and meaning, shaping how you react before conscious thought catches up."
      },
      {
        "question": "What does Piers Day help with, and what issues can hypnotherapy treat?",
        "answer": "I specialise in treating anxiety, panic attacks, depression, trauma, PTSD, addiction (smoking/vaping), weight management, and deep-seated phobias."
      },
      {
        "question": "What exactly is hypnotherapy, and is it scientifically proven?",
        "answer": "Yes. Clinical hypnotherapy is recognized by the British Medical Association and neuro-imaging studies show clear changes in brain activity during a trance state."
      },
      {
        "question": "What can I expect in a hypnotherapy session?",
        "answer": "You will be completely awake and aware. We will first discuss exactly what you want to change. Then, I will guide you into a state of deep physical and mental relaxation. You are always in control and can open your eyes at any time."
      },
      {
        "question": "How many sessions will I need?",
        "answer": "Unlike traditional therapy, we aim for rapid resolution. Many issues like smoking cessation take only a single session. More complex issues like deep trauma may take 3-4 sessions."
      },
      {
        "question": "Can anyone be hypnotised?",
        "answer": "Yes. As long as you are willing and capable of following simple instructions, you can enter a state of hypnosis."
      },
      {
        "question": "Is hypnotherapy safe for children?",
        "answer": "Yes, and often highly effective. Children naturally spend much of their time in theta brainwave states, making them excellent candidates for rapid subconscious change."
      },
      {
        "question": "Where are the sessions held?",
        "answer": "Sessions are held predominantly online via Zoom, allowing you to experience the therapy in the safety and comfort of your own home. Face-to-face sessions can be arranged at my Suffolk clinic under special circumstances."
      }
    ]
  },
  {
    "id": "vid-iqK9m_j6Bf4",
    "title": "Can Phobias be Cured Quickly?",
    "tag": "Overcoming Phobias",
    "videoId": "iqK9m_j6Bf4",
    "article": {
      "headline": "Erase Irrational Fears Instantly",
      "content": "Phobias are dramatic examples of the brain working perfectly—it learns extremely quickly that something is \"dangerous\" and physically prevents you from going near it. The problem is, the danger is usually imagined or exaggerated.\n\nIn \"Can Phobias be Cured Quickly?\", we explore how to safely detach the intense negative emotion from the trigger. Once the emotional charge is gone, the fear simply collapses and you regain your freedom."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-aJyuXFxt3n4",
    "title": "How do I make Affirmations work?",
    "tag": "Positive Thinking",
    "videoId": "aJyuXFxt3n4",
    "article": {
      "headline": "Making Affirmations Actually Work",
      "content": "Most generic affirmations fail because they clash with deeply held subconscious beliefs. If your subconscious believes you are unworthy, repeating \"I am successful\" will only create internal conflict and resistance.\n\nAs explained in \"How do I make Affirmations work?\", the key is to use the right language structure and timing. When combined with deep trance states, we can bypass the conscious filter and install new, empowering beliefs that stick."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-a7734gds4ZA",
    "title": "How can I be more Positive?",
    "tag": "Positive Thinking",
    "videoId": "a7734gds4ZA",
    "article": {
      "headline": "Making Affirmations Actually Work",
      "content": "Most generic affirmations fail because they clash with deeply held subconscious beliefs. If your subconscious believes you are unworthy, repeating \"I am successful\" will only create internal conflict and resistance.\n\nAs explained in \"How can I be more Positive?\", the key is to use the right language structure and timing. When combined with deep trance states, we can bypass the conscious filter and install new, empowering beliefs that stick."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-Uzx2tQJp65w",
    "title": "Why aren't my Affirmations working?",
    "tag": "Positive Thinking",
    "videoId": "Uzx2tQJp65w",
    "article": {
      "headline": "Making Affirmations Actually Work",
      "content": "Most generic affirmations fail because they clash with deeply held subconscious beliefs. If your subconscious believes you are unworthy, repeating \"I am successful\" will only create internal conflict and resistance.\n\nAs explained in \"Why aren't my Affirmations working?\", the key is to use the right language structure and timing. When combined with deep trance states, we can bypass the conscious filter and install new, empowering beliefs that stick."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-_A8DkQTlCF4",
    "title": "How do I build Rapport?",
    "tag": "Mindset",
    "videoId": "_A8DkQTlCF4",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"How do I build Rapport?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-agbGMYZ3pQc",
    "title": "What are Rep Systems?",
    "tag": "The Science",
    "videoId": "agbGMYZ3pQc",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"What are Rep Systems?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-3EqebsXPt78",
    "title": "How do I achieve my Goals?",
    "tag": "Performance",
    "videoId": "3EqebsXPt78",
    "article": {
      "headline": "Aligning Your Subconscious for Success",
      "content": "Most people fail to reach their goals because their conscious desires are out of alignment with their subconscious programming. Consciously, you may want to start a business or lose weight, but if your subconscious associates success with danger or stress, it will sabotage you.\n\nTo achieve your goals effortlessly, you need internal alignment. Through specific hypnotherapy and NLP principles, we can align your deep unconscious drivers with your conscious targets, making motivation automatic."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-4p-GBqw8FB4",
    "title": "How does NLP actually work?",
    "tag": "The Science",
    "videoId": "4p-GBqw8FB4",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"How does NLP actually work?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-Uq23a_M6TXY",
    "title": "Can I stop a Panic Attack fast?",
    "tag": "Anxiety & Stress",
    "videoId": "Uq23a_M6TXY",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"Can I stop a Panic Attack fast?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-TKgLnQUot2M",
    "title": "How do I read people quickly?",
    "tag": "The Science",
    "videoId": "TKgLnQUot2M",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"How do I read people quickly?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-AbORxlyjzsU",
    "title": "How do I change my Behaviours?",
    "tag": "Performance",
    "videoId": "AbORxlyjzsU",
    "article": {
      "headline": "Aligning Your Subconscious for Success",
      "content": "Most people fail to reach their goals because their conscious desires are out of alignment with their subconscious programming. Consciously, you may want to start a business or lose weight, but if your subconscious associates success with danger or stress, it will sabotage you.\n\nTo achieve your goals effortlessly, you need internal alignment. Through specific hypnotherapy and NLP principles, we can align your deep unconscious drivers with your conscious targets, making motivation automatic."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-SmXI8O1Wtbc",
    "title": "How do I stay Motivated?",
    "tag": "Mindset",
    "videoId": "SmXI8O1Wtbc",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"How do I stay Motivated?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-KvWE8awLSKw",
    "title": "What is the Circle of Excellence?",
    "tag": "Mindset",
    "videoId": "KvWE8awLSKw",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"What is the Circle of Excellence?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-SthCaIBt3pI",
    "title": "Can I turn Anxiety into Calm?",
    "tag": "Anxiety & Stress",
    "videoId": "SthCaIBt3pI",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"Can I turn Anxiety into Calm?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-DJQ2FB9AbOg",
    "title": "Does Tapping work for Anxiety?",
    "tag": "Anxiety & Stress",
    "videoId": "DJQ2FB9AbOg",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"Does Tapping work for Anxiety?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-SdkvY2LvNlE",
    "title": "Can Anxiety be relieved in 3 steps?",
    "tag": "Anxiety & Stress",
    "videoId": "SdkvY2LvNlE",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"Can Anxiety be relieved in 3 steps?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-iK9zjV9NmKg",
    "title": "How do I change the Voices in my head?",
    "tag": "Trauma Relief",
    "videoId": "iK9zjV9NmKg",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-VoLfycdXbsc",
    "title": "How do I change my view of the World?",
    "tag": "Mindset",
    "videoId": "VoLfycdXbsc",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"How do I change my view of the World?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-BoyH98ULYcY",
    "title": "Can I stop Nervousness fast?",
    "tag": "Anxiety & Stress",
    "videoId": "BoyH98ULYcY",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"Can I stop Nervousness fast?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-pdPagBs54cc",
    "title": "What is NLP Anchoring?",
    "tag": "The Science",
    "videoId": "pdPagBs54cc",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"What is NLP Anchoring?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-1j7EIu8vhMA",
    "title": "How do I get rid of Stress?",
    "tag": "Anxiety & Stress",
    "videoId": "1j7EIu8vhMA",
    "article": {
      "headline": "Turn Off the Fight-or-Flight Response",
      "content": "Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot \"out-think\" the feeling.\n\nBy using the techniques outlined in this video \"How do I get rid of Stress?\", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-wDl-240Vb1Y",
    "title": "Are my words affecting others?",
    "tag": "Mindset",
    "videoId": "wDl-240Vb1Y",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"Are my words affecting others?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-1Wqb4z1kz9M",
    "title": "Am I looking at the Big Picture?",
    "tag": "Mindset",
    "videoId": "1Wqb4z1kz9M",
    "article": {
      "headline": "Reprogramming Your Mind for Success",
      "content": "The concepts discussed in this video \"Am I looking at the Big Picture?\" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-g81M5DICkDg",
    "title": "Can I change Negative Feelings?",
    "tag": "Trauma Relief",
    "videoId": "g81M5DICkDg",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-kSvwWtIdGbE",
    "title": "Can I erase Negative Thoughts?",
    "tag": "Trauma Relief",
    "videoId": "kSvwWtIdGbE",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-5wCqbbNSvVo",
    "title": "How do I change my Mood?",
    "tag": "Trauma Relief",
    "videoId": "5wCqbbNSvVo",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-TUyIH_a0XuY",
    "title": "How do I overcome Limiting Beliefs?",
    "tag": "Trauma Relief",
    "videoId": "TUyIH_a0XuY",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-kTsLtu0k6yg",
    "title": "How do I use Rep Systems daily?",
    "tag": "The Science",
    "videoId": "kTsLtu0k6yg",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"How do I use Rep Systems daily?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-imBuFVQklUs",
    "title": "Can I remove the fear of Needles?",
    "tag": "Overcoming Phobias",
    "videoId": "imBuFVQklUs",
    "article": {
      "headline": "Erase Irrational Fears Instantly",
      "content": "Phobias are dramatic examples of the brain working perfectly—it learns extremely quickly that something is \"dangerous\" and physically prevents you from going near it. The problem is, the danger is usually imagined or exaggerated.\n\nIn \"Can I remove the fear of Needles?\", we explore how to safely detach the intense negative emotion from the trigger. Once the emotional charge is gone, the fear simply collapses and you regain your freedom."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-cS3A-p3sCJc",
    "title": "Can I remove the fear of Injections?",
    "tag": "Overcoming Phobias",
    "videoId": "cS3A-p3sCJc",
    "article": {
      "headline": "Erase Irrational Fears Instantly",
      "content": "Phobias are dramatic examples of the brain working perfectly—it learns extremely quickly that something is \"dangerous\" and physically prevents you from going near it. The problem is, the danger is usually imagined or exaggerated.\n\nIn \"Can I remove the fear of Injections?\", we explore how to safely detach the intense negative emotion from the trigger. Once the emotional charge is gone, the fear simply collapses and you regain your freedom."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-alExXXSvKVM",
    "title": "How do I remove Emotional Pain?",
    "tag": "Trauma Relief",
    "videoId": "alExXXSvKVM",
    "article": {
      "headline": "Breaking the Cycle of Past Trauma",
      "content": "Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  },
  {
    "id": "vid-j4MHD-QvZi8",
    "title": "How do I communicate effectively?",
    "tag": "The Science",
    "videoId": "j4MHD-QvZi8",
    "article": {
      "headline": "Decoding the Language of Your Mind",
      "content": "Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn \"How do I communicate effectively?\", we explore how changing these internal representations can create massive, rapid change in how you feel and behave."
    },
    "faqs": [
      {
        "question": "How can I apply the concepts from this video?",
        "answer": "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways."
      },
      {
        "question": "Can hypnotherapy accelerate this process?",
        "answer": "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster."
      },
      {
        "question": "Do I need to understand NLP fully for it to work?",
        "answer": "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools."
      }
    ]
  }
];


  // State
  const [visibleLimit, setVisibleLimit] = useState(8);
  const [videoVisible, setVideoVisible] = useState(12);
  const [expandedCards, setExpandedCards] = useState({});
  const [articleModal, setArticleModal] = useState(null);
  const [contentFilter, setContentFilter] = useState('all');
  const [faqCategory, setFaqCategory] = useState('all');

  const toggleCard = (id) => setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  const openArticleModal  = (topic) => { setArticleModal(topic); document.body.style.overflow = 'hidden'; };
  const closeArticleModal = ()      => { setArticleModal(null);  document.body.style.overflow = ''; };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeArticleModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filteredTopics = topics.filter(t =>
    !searchQuery ||
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.article?.headline.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (t.article?.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (t.faqs?.some(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  );

  const videos   = filteredTopics.filter(t => t.videoId);
  const articles = filteredTopics.filter(t => t.article);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleLimit(8);
    setVideoVisible(12);
    setFaqCategory('all');
  };

  const TAG_GRAD = {
    'The Foundation':     ['#0C1B2E', '#1A3448'],
    'Overcoming Phobias': ['#18204a', '#2d3a70'],
    'Positive Thinking':  ['#0e3028', '#1a5040'],
    'Trauma Relief':      ['#241030', '#3a1a50'],
    'The Science':        ['#0a2038', '#0e3060'],
    'Anxiety & Panic':    ['#2e1808', '#4a280e'],
    'Quit Smoking':       ['#102808', '#1e440e'],
    'Weight Loss':        ['#0e2828', '#104444'],
  };
  const tagGrad = (tag) => {
    const c = TAG_GRAD[tag] || ['#0C1B2E', '#1A3448'];
    return `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 100%)`;
  };

  return (
    <div className="res-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* ── Article modal ── */}
      {articleModal && (
        <>
          <div className="art-modal-backdrop" onClick={closeArticleModal} />
          <div className="art-modal-wrap" onClick={closeArticleModal}>
            <div className="art-modal-card" onClick={e => e.stopPropagation()}>
              <button className="art-modal-close" onClick={closeArticleModal} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              {/* Gradient header */}
              <div className="art-modal-header" style={{ background: tagGrad(articleModal.tag) }}>
                <div className="art-header-deco" aria-hidden="true" />
                <span className="art-card-tag">{articleModal.tag}</span>
                <h2 className="art-modal-headline">{articleModal.article.headline}</h2>
                <p className="art-modal-topic">{articleModal.title}</p>
              </div>
              {/* Scrollable body */}
              <div className="art-modal-body">
                <div className="art-modal-article">
                  {articleModal.article.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {articleModal.faqs?.length > 0 && (
                  <div className="art-modal-faqs">
                    <h3 className="art-modal-faqs-heading">Questions on this topic</h3>
                    {articleModal.faqs.map((faq, i) => (
                      <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                )}
                <div className="art-modal-cta">
                  <h4>Ready to take the next step?</h4>
                  <p>If you related to anything in this article, a free conversation is the best place to start.</p>
                  <Link href="/contact" className="btn btn-primary" onClick={closeArticleModal}>Talk to Piers Today →</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Hero ── */}
      <section className="res-hero">
        <div className="container">
          <div className="res-hero-inner fade-in-up">
            <span className="eyebrow">Resources &amp; Insights</span>
            <h1 className="res-hero-h1">Mind, Method<br/>&amp; Meaning</h1>
            <p className="res-hero-sub">Videos, articles, podcasts and answers on hypnotherapy, NLP, and the science of lasting change.</p>
          </div>
          <div className="res-search fade-in-up" style={{ transitionDelay: "0.2s" }}>
            <span className="res-search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search topics, questions, tags…"
              className="res-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="res-body">
        <div className={`res-container${contentFilter === 'video' ? ' res-container--wide' : ''}`}>

          {/* Tabs */}
          <div className="res-tabs fade-in-up">
            {[
              { key: 'all',     icon: '✦', label: 'All'      },
              { key: 'video',   icon: '▶', label: 'Videos'   },
              { key: 'article', icon: '✎', label: 'Articles' },
              { key: 'faq',     icon: '?', label: 'FAQs'     },
              { key: 'podcast', icon: '◎', label: 'Podcast'  },
            ].map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setContentFilter(key)}
                className={`res-tab${contentFilter === key ? ' res-tab--active' : ''}`}
              >
                <span className="res-tab-icon" aria-hidden="true">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* ALL — topic cards grid                                   */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {contentFilter === 'all' && (
            <>
              {filteredTopics.length === 0 ? (
                <div className="res-no-results fade-in-up">
                  <div className="res-no-results-inner">
                    <h2>No results found</h2>
                    <p>Can&apos;t find what you&apos;re looking for? Ask Piers directly.</p>
                    <Link href="/contact" className="btn btn-primary">Contact Piers →</Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="topic-grid">
                    {filteredTopics.slice(0, visibleLimit).map((item) => (
                      <div
                        key={item.id}
                        className={`topic-card${expandedCards[item.id] ? ' topic-card--open' : ''}`}
                      >
                        <button
                          className="topic-card-header"
                          onClick={() => toggleCard(item.id)}
                          aria-expanded={!!expandedCards[item.id]}
                        >
                          <div className="topic-card-meta">
                            <span className="topic-tag">{item.tag}</span>
                            <h2 className="topic-title">{item.title}</h2>
                          </div>
                          <div className="topic-card-right">
                            {!expandedCards[item.id] && (
                              <div className="topic-chips">
                                {item.videoId         && <span className="t-chip t-chip--v">▶</span>}
                                {item.article         && <span className="t-chip t-chip--a">✎</span>}
                                {item.faqs?.length > 0 && <span className="t-chip t-chip--f">?</span>}
                              </div>
                            )}
                            <span className={`topic-chevron${expandedCards[item.id] ? ' topic-chevron--open' : ''}`} aria-hidden="true">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"/>
                              </svg>
                            </span>
                          </div>
                        </button>

                        {expandedCards[item.id] && (
                          <div className="topic-card-body">

                            {/* ── Video ── */}
                            {item.videoId && (
                              <div className="topic-section-block">
                                <span className="topic-section-label">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                  Watch
                                </span>
                                <div className="topic-video-embed">
                                  <VideoEmbed videoId={item.videoId} title={item.title} tag={item.tag} />
                                </div>
                              </div>
                            )}

                            {/* ── Article ── */}
                            {item.article && (
                              <div className="topic-section-block">
                                <span className="topic-section-label">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                  Article
                                </span>
                                <h3 className="topic-article-title">{item.article.headline}</h3>
                                <p className="topic-article-text">{item.article.content.substring(0, 200)}…</p>
                                <button onClick={() => openArticleModal(item)} className="topic-read-btn">
                                  Read full article →
                                </button>
                              </div>
                            )}

                            {/* ── FAQs ── */}
                            {item.faqs?.length > 0 && (
                              <div className="topic-section-block">
                                <span className="topic-section-label">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                  FAQs
                                </span>
                                <div className="topic-faq-list">
                                  {item.faqs.map((faq, i) => (
                                    <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
                                  ))}
                                </div>
                              </div>
                            )}

                            <Link href="/contact" className="topic-cta-link">Book a free consultation →</Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {visibleLimit < filteredTopics.length && (
                    <div className="res-load-more">
                      <button onClick={() => setVisibleLimit(v => v + 8)} className="btn btn-primary">
                        Load More →
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* VIDEOS — embedded grid                                   */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {contentFilter === 'video' && (
            <>
              {videos.length === 0 ? (
                <p className="res-empty">No videos match your search.</p>
              ) : (
                <>
                  <div className="video-grid">
                    {videos.slice(0, videoVisible).map((item) => (
                      <div key={item.id} className="video-item">
                        <div className="video-embed">
                          <VideoEmbed videoId={item.videoId} title={item.title} tag={item.tag} />
                        </div>
                        <div className="video-item-meta">
                          <span className="video-item-tag">{item.tag}</span>
                          <h3 className="video-item-title">{item.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  {videoVisible < videos.length && (
                    <div className="res-load-more">
                      <button onClick={() => setVideoVisible(v => v + 12)} className="btn btn-primary">
                        Load More Videos →
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* ARTICLES — cards with gradient header                    */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {contentFilter === 'article' && (
            <>
              {articles.length === 0 ? (
                <p className="res-empty">No articles match your search.</p>
              ) : (
                <div className="article-list">
                  {articles.map((item) => (
                    <div key={item.id} className={`art-card${expandedArticles[item.id] ? ' art-card--open' : ''}`}>
                      <div className="art-card-header" style={{ background: tagGrad(item.tag) }}>
                        <div className="art-header-deco" aria-hidden="true" />
                        <span className="art-card-tag">{item.tag}</span>
                        <h2 className="art-card-headline">{item.article.headline}</h2>
                        <p className="art-card-topic-title">{item.title}</p>
                      </div>
                      <div className="art-card-body">
                        <p className="art-excerpt">{item.article.content.substring(0, 260)}…</p>
                        <button
                          onClick={() => openArticleModal(item)}
                          className="art-toggle-btn"
                        >
                          Read full article →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* FAQs — grouped by topic                                  */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {contentFilter === 'faq' && (() => {
            const shownCategories = faqCategory === 'all'
              ? faqData
              : faqData.filter(c => c.category === faqCategory);
            const totalCount = faqData.reduce((s, c) => s + c.items.length, 0);
            return (
              <div className="faq-layout">

                {/* ── Category nav ── */}
                <aside className="faq-nav">
                  <p className="faq-nav-label">Topics</p>
                  <button
                    onClick={() => setFaqCategory('all')}
                    className={`faq-nav-btn${faqCategory === 'all' ? ' faq-nav-btn--active' : ''}`}
                  >
                    <span>All Questions</span>
                    <span className="faq-nav-count">{totalCount}</span>
                  </button>
                  {faqData.map(cat => (
                    <button
                      key={cat.category}
                      onClick={() => setFaqCategory(cat.category)}
                      className={`faq-nav-btn${faqCategory === cat.category ? ' faq-nav-btn--active' : ''}`}
                    >
                      <span>{cat.category}</span>
                      <span className="faq-nav-count">{cat.items.length}</span>
                    </button>
                  ))}
                </aside>

                {/* ── FAQ content ── */}
                <div className="faq-content">
                  {shownCategories.map(cat => (
                    <div key={cat.category} className="faq-section">
                      <div className="faq-section-hd">
                        <h2 className="faq-section-title">{cat.category}</h2>
                      </div>
                      {cat.items.map((item, idx) => (
                        <FAQAccordion key={idx} question={item.q} answer={item.a} />
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            );
          })()}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* PODCAST — placeholder ready for embeds                   */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {contentFilter === 'podcast' && (
            <div className="podcast-section fade-in-up">
              <div className="podcast-header">
                <span className="podcast-eyebrow">Coming Soon</span>
                <h2 className="podcast-title">The Piers Day Podcast</h2>
                <p className="podcast-sub">In-depth conversations on the mind, hypnotherapy, NLP, and the science of lasting change. Episodes will appear here.</p>
              </div>
              <div className="podcast-placeholder-grid">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="podcast-placeholder-card">
                    <div className="podcast-placeholder-thumb" />
                    <div className="podcast-placeholder-lines">
                      <div className="pph-line pph-line--short" />
                      <div className="pph-line pph-line--long" />
                      <div className="pph-line pph-line--medium" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="podcast-notice">
                Episodes are being added. <Link href="/contact" className="podcast-contact-link">Get in touch</Link> to be notified when they go live.
              </p>
            </div>
          )}

        </div>
      </section>

      <style jsx>{`
        /* ── PAGE ──────────────────────────────────────────────── */
        .res-page { background: #fafaf9; min-height: 100vh; }

        /* ── HERO ──────────────────────────────────────────────── */
        .res-hero {
          background: #0C1B2E;
          padding: 8rem 1rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .res-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 40%, rgba(107,174,138,0.09) 0%, transparent 60%);
          pointer-events: none;
        }
        .res-hero-inner {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.5rem;
        }
        .res-hero-inner .eyebrow { color: #C4906A; }
        .res-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 500;
          color: #f5f0e8;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0.5rem 0 1rem;
        }
        .res-hero-sub {
          color: rgba(245,240,232,0.65);
          font-size: 1.08rem;
          line-height: 1.7;
          margin: 0;
        }

        /* ── SEARCH ────────────────────────────────────────────── */
        .res-search {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: 540px;
          margin: 0 auto;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 9999px;
          padding: 0.55rem 1.25rem;
          transition: border-color 0.25s, background 0.25s;
        }
        .res-search:focus-within {
          border-color: rgba(107,174,138,0.65);
          background: rgba(255,255,255,0.1);
        }
        .res-search-icon { color: rgba(245,240,232,0.4); display: flex; align-items: center; flex-shrink: 0; }
        .res-search-input {
          flex: 1; background: transparent; border: none; outline: none;
          color: #f5f0e8; font-size: 1rem; font-family: inherit; padding: 0.6rem 0;
        }
        .res-search-input::placeholder { color: rgba(245,240,232,0.38); }

        /* ── BODY ──────────────────────────────────────────────── */
        .res-body { padding: 3rem 1rem 6rem; }
        .res-container { max-width: 900px; margin: 0 auto; }
        .res-container--wide { max-width: 1100px; }

        /* ── TABS ──────────────────────────────────────────────── */
        .res-tabs {
          display: flex; justify-content: center; gap: 0.5rem;
          margin-bottom: 2.5rem; flex-wrap: wrap;
        }
        .res-tab {
          display: inline-flex; align-items: center; gap: 0.45rem;
          padding: 0.55rem 1.2rem; border-radius: 9999px;
          border: 1px solid rgba(107,174,138,0.2); background: #fff;
          color: #6b7f8e; font-size: 0.82rem; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .res-tab:hover { border-color: rgba(107,174,138,0.45); color: #1a2b3c; }
        .res-tab--active {
          border-color: rgba(107,174,138,0.55);
          background: rgba(107,174,138,0.1); color: #1a2b3c;
        }
        .res-tab-icon { opacity: 0.8; }

        /* ── SHARED UTILS ──────────────────────────────────────── */
        .res-load-more { display: flex; justify-content: center; margin-top: 2.5rem; }
        .res-empty { text-align: center; color: #9ab0be; padding: 4rem 0; font-size: 1rem; }
        .res-no-results { text-align: center; padding: 2rem 0; }
        .res-no-results-inner {
          display: inline-flex; flex-direction: column; align-items: center; gap: 0.75rem;
          max-width: 380px; padding: 2.5rem 2rem;
          background: #fff; border: 1px solid rgba(107,174,138,0.2); border-radius: 16px;
        }
        .res-no-results-inner h2 {
          font-family: 'Playfair Display', serif; font-size: 1.35rem;
          color: #1a2b3c; margin: 0; font-weight: 500;
        }
        .res-no-results-inner p { color: #6b7f8e; font-size: 0.95rem; margin: 0; }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* ALL TAB — topic cards                                    */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .topic-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .topic-card {
          background: #fff;
          border: 1px solid rgba(107,174,138,0.16);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .topic-card:hover {
          border-color: rgba(107,174,138,0.38);
          box-shadow: 0 4px 20px rgba(107,174,138,0.08);
        }
        .topic-card--open {
          border-color: rgba(107,174,138,0.4);
          box-shadow: 0 6px 30px rgba(107,174,138,0.1);
          grid-column: 1 / -1;
        }
        .topic-card-header {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; padding: 1.25rem 1.5rem;
          background: transparent; border: none; cursor: pointer; text-align: left;
        }
        .topic-card-meta { flex: 1; min-width: 0; }
        .topic-tag {
          display: inline-block;
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #C4906A;
          background: rgba(196,144,106,0.09); border: 1px solid rgba(196,144,106,0.24);
          padding: 0.22rem 0.65rem; border-radius: 9999px;
          margin-bottom: 0.5rem;
        }
        .topic-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 500; color: #1a2b3c;
          margin: 0; line-height: 1.3;
        }
        .topic-card-right { display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }
        .topic-chips { display: flex; gap: 0.3rem; }
        .t-chip {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; border-radius: 8px;
          font-size: 0.75rem;
        }
        .t-chip--v { background: rgba(94,155,181,0.1);  color: #4a8eaa; border: 1px solid rgba(94,155,181,0.25); }
        .t-chip--a { background: rgba(196,144,106,0.1); color: #b8835a; border: 1px solid rgba(196,144,106,0.25); }
        .t-chip--f { background: rgba(107,174,138,0.1); color: #4e9e74; border: 1px solid rgba(107,174,138,0.25); }
        .topic-chevron {
          color: #9ab0be; display: flex; align-items: center;
          transition: transform 0.3s, color 0.2s;
        }
        .topic-chevron--open { transform: rotate(180deg); color: #6BAE8A; }

        .topic-card-body { padding: 0 1.5rem 1.75rem; }
        .topic-video-wrap { margin-bottom: 1.5rem; }
        .topic-video-embed {
          position: relative; padding-bottom: 56.25%; height: 0;
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 6px 28px rgba(26,43,60,0.1);
        }
        .topic-video-embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .topic-section-label {
          display: inline-block; font-size: 0.7rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #6BAE8A; margin-bottom: 0.35rem;
        }
        .topic-article-excerpt {
          background: #f8fbf9; border-radius: 10px;
          border: 1px solid rgba(107,174,138,0.13);
          padding: 1.2rem 1.3rem; margin-bottom: 1rem;
        }
        .topic-article-title {
          font-family: 'Playfair Display', serif; font-size: 1.1rem;
          font-weight: 500; color: #1a2b3c; margin: 0.2rem 0 0.5rem; line-height: 1.3;
        }
        .topic-article-text { color: #6b7f8e; font-size: 0.975rem; line-height: 1.72; margin: 0; }
        .topic-faq-summary {
          background: #f4f9f6; border-radius: 10px;
          border: 1px solid rgba(107,174,138,0.13);
          padding: 1rem 1.3rem; margin-bottom: 1rem;
        }
        .topic-faq-count { color: #6b7f8e; font-size: 0.975rem; margin: 0.2rem 0 0; }
        .topic-cta-link {
          display: inline-block; font-size: 0.9rem; font-weight: 600; color: #4e9e74;
          text-decoration: none; border-bottom: 1.5px solid rgba(107,174,138,0.4);
          padding-bottom: 1px; transition: color 0.2s, border-color 0.2s;
        }
        .topic-cta-link:hover { color: #1a2b3c; border-color: #1a2b3c; }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* VIDEO TAB — embedded grid                                */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }
        .video-embed {
          position: relative; padding-bottom: 56.25%; height: 0;
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 6px 28px rgba(26,43,60,0.1);
          border: 1px solid rgba(107,174,138,0.1);
        }
        .video-embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .video-item-meta { padding: 0.8rem 0.25rem 0; }
        .video-item-tag {
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #C4906A; display: block; margin-bottom: 0.3rem;
        }
        .video-item-title {
          font-family: 'Playfair Display', serif; font-size: 1.05rem;
          font-weight: 500; color: #1a2b3c; margin: 0; line-height: 1.35;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* ARTICLE TAB — cards with gradient image header           */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .article-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .art-card {
          background: #fff;
          border: 1px solid rgba(107,174,138,0.15);
          border-radius: 16px; overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .art-card:hover {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 4px 22px rgba(107,174,138,0.08);
        }
        .art-card--open { border-color: rgba(107,174,138,0.4); }

        /* gradient "image" header */
        .art-card-header {
          padding: 2.25rem 2.25rem 2rem;
          position: relative; overflow: hidden; min-height: 140px;
          display: flex; flex-direction: column; justify-content: flex-end;
        }
        .art-header-deco {
          position: absolute;
          top: -50px; right: -50px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }
        .art-header-deco::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -40px;
          width: 130px; height: 130px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
        }
        .art-card-tag {
          display: inline-block;
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.22);
          padding: 0.22rem 0.65rem; border-radius: 9999px; margin-bottom: 0.75rem;
          position: relative;
        }
        .art-card-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          font-weight: 500; color: #f5f0e8;
          margin: 0 0 0.4rem; line-height: 1.2;
          position: relative;
        }
        .art-card-topic-title {
          color: rgba(245,240,232,0.5); font-size: 0.875rem;
          margin: 0; font-style: italic; position: relative;
        }

        /* card body */
        .art-card-body { padding: 1.6rem 2.25rem 2rem; }
        .art-excerpt {
          color: #5c7080; font-size: 1.02rem; line-height: 1.8;
          margin: 0 0 1.2rem;
        }
        .art-toggle-btn {
          background: transparent; border: none;
          border-bottom: 1.5px solid rgba(107,174,138,0.45);
          color: #1a2b3c; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; padding: 0 0 2px; font-family: inherit;
          transition: color 0.2s, border-color 0.2s;
        }
        .art-toggle-btn:hover { color: #4e9e74; border-color: #6BAE8A; }
        .art-full {
          margin-top: 1.75rem; padding-top: 1.75rem;
          border-top: 1px solid rgba(107,174,138,0.12);
        }
        .art-full p { color: #4a6275; font-size: 1.02rem; line-height: 1.82; margin-bottom: 1rem; }
        .art-cta {
          margin-top: 2rem;
          background: linear-gradient(135deg, #0C1B2E 0%, #1A3448 100%);
          border-radius: 14px; padding: 2rem 2.25rem 2.25rem; text-align: center;
        }
        .art-cta h4 {
          font-family: 'Playfair Display', serif; font-size: 1.3rem;
          color: #f5f0e8; margin: 0 0 0.6rem; font-weight: 500;
        }
        .art-cta p { color: rgba(245,240,232,0.65); font-size: 0.975rem; margin: 0 0 1.5rem; }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* FAQ TAB                                                  */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

        .faq-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* ── Left: sticky category nav ── */
        .faq-nav {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .faq-nav-label {
          font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.14em; color: #9ab0be;
          margin: 0 0 0.65rem 0.75rem;
        }
        .faq-nav-btn {
          display: flex; align-items: center; justify-content: space-between;
          gap: 0.5rem;
          width: 100%; padding: 0.58rem 0.75rem;
          background: transparent; border: none; border-radius: 10px;
          text-align: left; cursor: pointer;
          font-size: 0.88rem; font-weight: 500; color: #5c7080;
          transition: background 0.18s, color 0.18s;
        }
        .faq-nav-btn:hover { background: rgba(107,174,138,0.08); color: #1a2b3c; }
        .faq-nav-btn--active { background: #0C1B2E; color: #f5f0e8; }
        .faq-nav-btn--active:hover { background: #142638; color: #f5f0e8; }
        .faq-nav-count {
          font-size: 0.7rem; font-weight: 600;
          color: inherit; opacity: 0.5;
          background: rgba(0,0,0,0.06);
          padding: 0.1rem 0.42rem;
          border-radius: 9999px; flex-shrink: 0;
        }
        .faq-nav-btn--active .faq-nav-count { background: rgba(255,255,255,0.15); opacity: 0.8; }

        /* ── Right: FAQ sections ── */
        .faq-content { display: flex; flex-direction: column; gap: 2.75rem; }

        .faq-section-hd {
          padding-bottom: 1rem;
          border-bottom: 1.5px solid #e8eff4;
          margin-bottom: 0.75rem;
        }
        .faq-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.45rem; font-weight: 500; color: #1a2b3c;
          margin: 0; line-height: 1.2;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* ARTICLE MODAL                                            */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .art-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(10,14,20,0.62);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          z-index: 200;
          animation: artBackdropIn 0.25s ease forwards;
        }
        @keyframes artBackdropIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to   { opacity: 1; backdrop-filter: blur(7px); }
        }
        .art-modal-wrap {
          position: fixed; inset: 0;
          z-index: 201;
          display: flex; align-items: center; justify-content: center;
          padding: 24px 16px;
        }
        .art-modal-card {
          background: #fff;
          border-radius: 22px;
          width: 100%; max-width: 780px;
          max-height: calc(100dvh - 48px);
          display: flex; flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.1);
          position: relative;
          animation: artModalIn 0.28s cubic-bezier(0.34,1.3,0.64,1) forwards;
        }
        @keyframes artModalIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .art-modal-close {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(26,43,60,0.12);
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #555;
          transition: background 0.18s, color 0.18s;
        }
        .art-modal-close:hover { background: #fff; color: #111; }
        .art-modal-header {
          padding: 2.5rem 2rem 2rem;
          flex-shrink: 0;
          position: relative; overflow: hidden;
        }
        .art-modal-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 600; color: #fff;
          margin: 0.5rem 0 0.4rem; line-height: 1.25;
        }
        .art-modal-topic {
          font-size: 0.85rem; color: rgba(255,255,255,0.65);
          margin: 0; font-style: italic;
        }
        .art-modal-body {
          overflow-y: auto; flex: 1; min-height: 0;
          padding: 1.75rem 2rem 2rem;
          display: flex; flex-direction: column; gap: 1.75rem;
        }
        .art-modal-article p {
          font-size: 0.95rem; line-height: 1.82;
          color: rgba(26,43,60,0.72); margin: 0 0 1rem;
        }
        .art-modal-article p:last-child { margin-bottom: 0; }
        .art-modal-faqs-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 500; color: #1a2b3c;
          margin: 0 0 1rem;
        }
        .art-modal-cta {
          background: #f7faf9;
          border: 1px solid rgba(107,174,138,0.18);
          border-radius: 14px; padding: 1.5rem;
          text-align: center;
        }
        .art-modal-cta h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; color: #1a2b3c; margin: 0 0 0.4rem;
        }
        .art-modal-cta p {
          font-size: 0.875rem; color: rgba(26,43,60,0.55);
          margin: 0 0 1.1rem;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* TOPIC CARD SECTIONS (video / article / faqs)             */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .topic-section-block {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(26,43,60,0.07);
        }
        .topic-section-block:last-of-type { border-bottom: none; padding-bottom: 0; }
        .topic-section-label {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #6BAE8A; margin-bottom: 0.75rem;
        }
        .topic-faq-list { display: flex; flex-direction: column; gap: 0; margin-top: 0; }
        .topic-read-btn {
          margin-top: 0.85rem;
          background: none; border: none; padding: 0; cursor: pointer;
          font-size: 0.875rem; font-weight: 600; color: #6BAE8A;
          transition: color 0.18s;
        }
        .topic-read-btn:hover { color: #3d8a63; }

        @media (max-width: 640px) {
          .art-modal-wrap { padding: 0; align-items: flex-end; }
          .art-modal-card { max-width: 100%; max-height: 94dvh; border-radius: 20px 20px 0 0; }
          .art-modal-body { padding: 1.25rem 1.25rem 1.75rem; }
          .art-modal-header { padding: 2rem 1.25rem 1.5rem; }
        }

        /* ── Individual FAQ card ── */
        .faq-item {
          border: 1.5px solid #e8eff4;
          border-radius: 14px;
          margin-bottom: 0.75rem;
          overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .faq-item:hover {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 2px 14px rgba(107,174,138,0.07);
        }
        .faq-item.faq-item--open {
          border-color: rgba(107,174,138,0.5);
          box-shadow: 0 4px 20px rgba(107,174,138,0.1);
          background: rgba(107,174,138,0.03);
        }

        .faq-trigger {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: transparent; border: none; cursor: pointer; text-align: left;
        }

        .faq-q-text {
          font-size: 1rem; font-weight: 600;
          color: #1a2b3c; line-height: 1.45; flex: 1;
          transition: color 0.18s;
        }
        .faq-item.faq-item--open .faq-q-text { color: #6BAE8A; }

        .faq-chevron {
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: rgba(42,63,84,0.35);
          transition: color 0.18s, transform 0.25s ease;
        }
        .faq-item.faq-item--open .faq-chevron {
          transform: rotate(180deg);
          color: #6BAE8A;
        }

        .faq-panel {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-item.faq-item--open .faq-panel { max-height: 600px; }

        .faq-panel-inner {
          padding: 0 1.5rem 1.3rem;
        }
        .faq-a-text {
          font-size: 0.95rem; line-height: 1.8;
          color: #5c7080; margin: 0;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* PODCAST TAB — placeholder                                */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .podcast-section { padding: 1rem 0 2rem; }
        .podcast-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
        .podcast-eyebrow {
          display: inline-block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.14em; color: #C4906A;
          background: rgba(196,144,106,0.08); border: 1px solid rgba(196,144,106,0.2);
          padding: 0.22rem 0.75rem; border-radius: 9999px; margin-bottom: 0.9rem;
        }
        .podcast-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 500; color: #1a2b3c; margin: 0 0 0.9rem; line-height: 1.15;
        }
        .podcast-sub { color: #6b7f8e; font-size: 1.05rem; line-height: 1.7; margin: 0; }
        .podcast-placeholder-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem; margin-bottom: 2rem;
        }
        .podcast-placeholder-card {
          background: #fff; border: 1px solid rgba(107,174,138,0.15);
          border-radius: 14px; overflow: hidden;
        }
        .podcast-placeholder-thumb {
          height: 130px;
          background: linear-gradient(90deg, #e8edf2 25%, #d4dde6 50%, #e8edf2 75%);
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite linear;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .podcast-placeholder-lines {
          padding: 1.1rem 1.25rem 1.3rem;
          display: flex; flex-direction: column; gap: 0.55rem;
        }
        .pph-line {
          height: 11px; border-radius: 6px;
          background: linear-gradient(90deg, #e8edf2 25%, #d4dde6 50%, #e8edf2 75%);
          background-size: 200% 100%;
          animation: shimmer 1.8s infinite linear;
        }
        .pph-line--short  { width: 38%; }
        .pph-line--medium { width: 62%; }
        .pph-line--long   { width: 90%; }
        .podcast-notice {
          text-align: center; color: #7a94a8; font-size: 0.975rem; line-height: 1.65;
        }
        .podcast-contact-link {
          color: #4e9e74; font-weight: 600; text-decoration: none;
          border-bottom: 1px solid rgba(107,174,138,0.4);
        }
        .podcast-contact-link:hover { color: #1a2b3c; }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* RESPONSIVE                                               */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        @media (max-width: 760px) {
          .faq-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .faq-nav {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.35rem;
          }
          .faq-nav-label { display: none; }
          .faq-nav-btn {
            width: auto;
            padding: 0.4rem 0.85rem;
            border: 1px solid #dce8f0;
            border-radius: 9999px;
            font-size: 0.82rem;
          }
          .faq-nav-btn--active { border-color: transparent; }
        }
        @media (max-width: 720px) {
          .topic-grid { grid-template-columns: 1fr; }
          .topic-card--open { grid-column: auto; }
          .video-grid { grid-template-columns: 1fr; }
          .podcast-placeholder-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .res-hero { padding: 7rem 1rem 2.5rem; }
          .art-card-header { padding: 1.5rem 1.25rem 1.25rem; min-height: 110px; }
          .art-card-body { padding: 1.25rem 1.25rem 1.5rem; }
          .topic-card-header { padding: 1rem 1.1rem; }
          .topic-card-body { padding: 0 1.1rem 1.25rem; }
          .faq-trigger { padding: 1rem 1rem; }
        }
      `}</style>
    </div>
  );
}
