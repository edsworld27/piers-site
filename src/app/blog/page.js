"use client";

import Link from "next/link";
import { useState } from "react";

function FAQAccordion({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-trigger"
        aria-expanded={isOpen}
      >
        <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq-q">{faq.question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1L11 11M11 1L1 11"/>
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 1V11M1 6H11"/>
            </svg>
          )}
        </span>
      </button>

      <div className="faq-panel" aria-hidden={!isOpen}>
        <div className="faq-answer-content">
          <span className="faq-a-badge">A</span>
          <p className="faq-answer-text">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

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
  const [expandedArticles, setExpandedArticles] = useState({});
  const [contentFilter, setContentFilter] = useState('all');

  const toggleCard    = (id) => setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleArticle = (id) => setExpandedArticles(prev => ({ ...prev, [id]: !prev[id] }));

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

  const videos    = filteredTopics.filter(t => t.videoId);
  const articles  = filteredTopics.filter(t => t.article);
  const faqTopics = filteredTopics.filter(t => t.faqs?.length > 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleLimit(8);
    setVideoVisible(12);
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
                            {item.videoId && (
                              <div className="topic-video-wrap">
                                <div className="topic-video-embed">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    title={item.title}
                                  />
                                </div>
                              </div>
                            )}
                            {item.article && (
                              <div className="topic-article-excerpt">
                                <span className="topic-section-label">Article</span>
                                <h3 className="topic-article-title">{item.article.headline}</h3>
                                <p className="topic-article-text">{item.article.content.substring(0, 220)}…</p>
                              </div>
                            )}
                            {item.faqs?.length > 0 && (
                              <div className="topic-faq-summary">
                                <span className="topic-section-label">FAQs</span>
                                <p className="topic-faq-count">{item.faqs.length} questions answered on this topic.</p>
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
                          <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            title={item.title}
                          />
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
                          onClick={() => toggleArticle(item.id)}
                          className="art-toggle-btn"
                        >
                          {expandedArticles[item.id] ? '↑ Close article' : 'Read full article →'}
                        </button>
                        {expandedArticles[item.id] && (
                          <div className="art-full">
                            {item.article.content.split('\n\n').map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))}
                            <div className="art-cta">
                              <h4>Ready to take the next step?</h4>
                              <p>If you related to anything in this article, a free conversation is the best place to start.</p>
                              <Link href="/contact" className="btn btn-primary">Talk to Piers Today →</Link>
                            </div>
                          </div>
                        )}
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
          {contentFilter === 'faq' && (
            <>
              {faqTopics.length === 0 ? (
                <p className="res-empty">No FAQs match your search.</p>
              ) : (
                <div className="faq-groups">
                  {faqTopics.map((item) => (
                    <div key={item.id} className="faq-group">
                      <div className="faq-group-header">
                        <span className="faq-group-tag">{item.tag}</span>
                        <h2 className="faq-group-title">{item.title}</h2>
                      </div>
                      <div className="faq-group-list">
                        {item.faqs.map((faq, idx) => (
                          <FAQAccordion key={idx} faq={faq} index={idx} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

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
        /* FAQ TAB — grouped by topic                               */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .faq-groups { display: flex; flex-direction: column; gap: 2.25rem; }
        .faq-group-header {
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(107,174,138,0.15);
          margin-bottom: 0.85rem;
        }
        .faq-group-tag {
          display: inline-block;
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #C4906A;
          background: rgba(196,144,106,0.09); border: 1px solid rgba(196,144,106,0.24);
          padding: 0.2rem 0.6rem; border-radius: 9999px; margin-bottom: 0.45rem;
        }
        .faq-group-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem; font-weight: 500; color: #1a2b3c; margin: 0;
        }
        .faq-group-list { display: flex; flex-direction: column; gap: 0.45rem; }

        /* FAQ accordion items */
        .faq-item {
          position: relative; border-radius: 10px;
          border: 1px solid rgba(107,174,138,0.13); background: #fff;
          overflow: hidden; transition: border-color 0.22s, box-shadow 0.22s;
        }
        .faq-item::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: transparent; transition: background 0.22s;
        }
        .faq-item:hover { border-color: rgba(107,174,138,0.3); }
        .faq-item.faq-item--open {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 2px 12px rgba(107,174,138,0.06);
        }
        .faq-item.faq-item--open::before {
          background: linear-gradient(to bottom, #6BAE8A, rgba(107,174,138,0.3));
        }
        .faq-trigger {
          width: 100%; display: flex; align-items: flex-start; gap: 0.9rem;
          padding: 1.1rem 1.2rem 1.1rem 1.4rem;
          background: transparent; border: none; cursor: pointer; text-align: left;
        }
        .faq-item.faq-item--open .faq-trigger {
          border-bottom: 1px solid rgba(107,174,138,0.1); padding-bottom: 1rem;
        }
        .faq-num {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(107,174,138,0.4); flex-shrink: 0;
          padding-top: 3px; transition: color 0.2s;
        }
        .faq-item:hover .faq-num,
        .faq-item.faq-item--open .faq-num { color: #6BAE8A; }
        .faq-q {
          flex: 1; font-family: 'Playfair Display', serif; font-style: italic;
          font-size: 1.02rem; line-height: 1.55; color: #4a6275; transition: color 0.2s;
        }
        .faq-item:hover .faq-q,
        .faq-item.faq-item--open .faq-q { color: #1a2b3c; }
        .faq-icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          border: 1px solid rgba(107,174,138,0.2); background: rgba(107,174,138,0.05);
          color: rgba(107,174,138,0.55); display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .faq-item.faq-item--open .faq-icon {
          border-color: rgba(107,174,138,0.45); background: rgba(107,174,138,0.1); color: #6BAE8A;
        }
        .faq-panel { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1); }
        .faq-item.faq-item--open .faq-panel { max-height: 600px; }
        .faq-answer-content {
          display: flex; align-items: flex-start; gap: 0.8rem;
          padding: 1rem 1.2rem 1.1rem 1.4rem;
          background: rgba(107,174,138,0.04); border-left: 3px solid rgba(107,174,138,0.32);
        }
        .faq-a-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px; min-width: 24px;
          background: rgba(107,174,138,0.09); border: 1px solid rgba(107,174,138,0.26);
          border-radius: 7px; color: #4e9e74; font-weight: 700; font-size: 0.7rem; margin-top: 1px;
        }
        .faq-answer-text { color: #5c7080; font-size: 0.985rem; line-height: 1.8; margin: 0; }

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
          .faq-trigger { padding: 0.9rem 1rem 0.9rem 1.1rem; }
        }
      `}</style>
    </div>
  );
}
