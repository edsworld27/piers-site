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

  // State for pagination
  const [visibleLimit, setVisibleLimit] = useState(8);
  const incrementCount = 8;

  // State to track which cards are showing the full article view
  const [activeArticleViews, setActiveArticleViews] = useState({});

  // New state to track which cards are expanded (summary view vs collapsed view)
  const [expandedCards, setExpandedCards] = useState({});

  // Content filter: 'all' | 'video' | 'article' | 'faq'
  const [contentFilter, setContentFilter] = useState('all');

  const toggleCardExpansion = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleArticleView = (id) => {
    setActiveArticleViews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter topics based on search input
  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.article && t.article.headline.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (t.article && t.article.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (t.faqs && t.faqs.some(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  // Pagination logic
  const currentItems = filteredTopics.slice(0, visibleLimit);

  // If search query changes, reset to page 1
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleLimit(8);
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
            <p className="res-hero-sub">Videos, articles and answers on hypnotherapy, NLP, and the science of lasting change.</p>
          </div>
          <div className="res-search fade-in-up" style={{ transitionDelay: "0.2s" }}>
            <span className="res-search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search 'anxiety', 'phobia', 'NLP'…"
              className="res-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="res-body">
        <div className="res-container">

          {/* Filter tabs */}
          <div className="res-tabs fade-in-up">
            {[
              { key: 'all',     icon: '✦', label: 'All'     },
              { key: 'video',   icon: '▶', label: 'Video'   },
              { key: 'article', icon: '✎', label: 'Article' },
              { key: 'faq',     icon: '?', label: 'FAQ'     },
            ].map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setContentFilter(key)}
                className={`res-tab${contentFilter === key ? ' res-tab--active' : ''}`}
              >
                <span className="res-tab-icon">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Card stream */}
          <div className="res-stream">
            {currentItems.length > 0 ? currentItems.map((item, streamIdx) => (
              <div
                key={item.id}
                className={`res-card anim-up${expandedCards[item.id] ? ' res-card--open' : ''}`}
                style={{ transitionDelay: `${(streamIdx % 4) * 0.05}s` }}
              >
                <div className="res-card-header" onClick={() => toggleCardExpansion(item.id)}>
                  <div className="res-card-meta">
                    <span className="res-card-tag">{item.tag}</span>
                    <h2 className="res-card-title">{item.title}</h2>
                  </div>
                  <div className="res-card-right">
                    {!expandedCards[item.id] && (
                      <div className="res-chips">
                        {item.videoId && <span className="res-chip res-chip--video">▶ Video</span>}
                        {item.article && <span className="res-chip res-chip--article">✎ Article</span>}
                        {item.faqs && item.faqs.length > 0 && <span className="res-chip res-chip--faq">? FAQ</span>}
                      </div>
                    )}
                    <span className={`res-chevron${expandedCards[item.id] ? ' res-chevron--open' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {expandedCards[item.id] && (
                  <div className="res-card-body">
                    {activeArticleViews[item.id] && item.article ? (
                      <div className="res-article-full">
                        <button onClick={() => toggleArticleView(item.id)} className="res-back-btn">
                          ← Back to summary
                        </button>
                        <h3 className="res-article-headline">{item.article.headline}</h3>
                        <div className="res-article-prose">
                          {item.article.content.split('\n\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                        <div className="res-article-cta">
                          <h4>Ready to take the next step?</h4>
                          <p>If you related to anything in this article, a free conversation is the best place to start.</p>
                          <Link href="/contact" className="btn btn-primary">Talk to Piers Today →</Link>
                        </div>
                      </div>
                    ) : (
                      <div className="res-layered">
                        {item.videoId && (contentFilter === 'all' || contentFilter === 'video') && (
                          <div className="res-video-wrap">
                            <div className="res-video-embed">
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
                        {item.article && (contentFilter === 'all' || contentFilter === 'article') && (
                          <div className="res-excerpt">
                            <span className="res-section-eyebrow">Article</span>
                            <h3 className="res-excerpt-headline">{item.article.headline}</h3>
                            <p className="res-excerpt-body">{item.article.content.substring(0, 240)}…</p>
                            <button onClick={() => toggleArticleView(item.id)} className="res-read-more">
                              Read full article →
                            </button>
                          </div>
                        )}
                        {item.faqs && item.faqs.length > 0 && (contentFilter === 'all' || contentFilter === 'faq') && (
                          <div className="res-faqs">
                            <div className="res-faqs-header">
                              <span className="res-section-eyebrow">FAQs</span>
                              <h3 className="res-faqs-title">Frequently Asked Questions</h3>
                            </div>
                            <div className="res-faq-list">
                              {item.faqs.map((faq, idx) => (
                                <FAQAccordion key={idx} faq={faq} index={idx} />
                              ))}
                            </div>
                          </div>
                        )}
                        {contentFilter === 'video' && !item.videoId && (
                          <div className="res-empty-notice"><p>No video available for this topic.</p></div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )) : (
              <div className="res-no-results fade-in-up">
                <div className="res-no-results-inner">
                  <span className="res-no-results-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </span>
                  <h2>No resources found</h2>
                  <p>Can&apos;t find what you&apos;re looking for? Ask Piers directly.</p>
                  <Link href="/contact" className="btn btn-primary">Contact Piers →</Link>
                </div>
              </div>
            )}
          </div>

          {visibleLimit < filteredTopics.length && (
            <div className="res-load-more">
              <button onClick={() => setVisibleLimit(prev => prev + incrementCount)} className="btn btn-primary">
                Load More Resources ↓
              </button>
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
          transition: border-color 0.25s ease, background 0.25s ease;
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
        .res-container { max-width: 860px; margin: 0 auto; }

        /* ── FILTER TABS ───────────────────────────────────────── */
        .res-tabs {
          display: flex; justify-content: center; gap: 0.5rem;
          margin-bottom: 2.25rem; flex-wrap: wrap;
        }
        .res-tab {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.5rem 1.1rem; border-radius: 9999px;
          border: 1px solid rgba(107,174,138,0.2); background: #fff;
          color: #6b7f8e; font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .res-tab:hover { border-color: rgba(107,174,138,0.45); color: #1a2b3c; }
        .res-tab--active {
          border-color: rgba(107,174,138,0.55);
          background: rgba(107,174,138,0.1); color: #1a2b3c;
        }
        .res-tab-icon { font-style: normal; opacity: 0.75; }

        /* ── STREAM ────────────────────────────────────────────── */
        .res-stream { display: flex; flex-direction: column; gap: 0.7rem; }

        /* ── MEGA CARD ─────────────────────────────────────────── */
        .res-card {
          background: #fff;
          border: 1px solid rgba(107,174,138,0.15);
          border-radius: 12px; overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .res-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: transparent; transition: background 0.25s ease;
        }
        .res-card:hover {
          border-color: rgba(107,174,138,0.4);
          box-shadow: 0 4px 24px rgba(107,174,138,0.08);
        }
        .res-card:hover::before,
        .res-card--open::before {
          background: linear-gradient(to bottom, #6BAE8A, rgba(107,174,138,0.3));
        }
        .res-card--open {
          border-color: rgba(107,174,138,0.35);
          box-shadow: 0 6px 36px rgba(107,174,138,0.1);
        }

        /* Card header */
        .res-card-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; padding: 1.1rem 1.4rem 1.1rem 1.6rem;
          cursor: pointer; user-select: none;
        }
        .res-card--open .res-card-header {
          border-bottom: 1px solid rgba(107,174,138,0.12);
        }
        .res-card-meta {
          display: flex; align-items: center; gap: 0.8rem;
          min-width: 0; flex: 1;
        }
        .res-card--open .res-card-meta { flex-direction: column; align-items: flex-start; gap: 0.45rem; }
        .res-card-tag {
          font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #C4906A;
          background: rgba(196,144,106,0.09); border: 1px solid rgba(196,144,106,0.24);
          padding: 0.18rem 0.6rem; border-radius: 9999px;
          white-space: nowrap; flex-shrink: 0;
        }
        .res-card-title {
          font-family: 'Playfair Display', serif; font-weight: 500;
          font-size: 1.05rem; color: #1a2b3c; margin: 0;
          line-height: 1.3; letter-spacing: -0.01em;
          transition: font-size 0.3s ease;
        }
        .res-card--open .res-card-title { font-size: 1.5rem; letter-spacing: -0.015em; }
        .res-card-right { display: flex; align-items: center; gap: 0.55rem; flex-shrink: 0; }
        .res-chips { display: flex; gap: 0.3rem; align-items: center; }
        .res-chip {
          display: inline-flex; align-items: center; gap: 0.2rem;
          padding: 0.16rem 0.5rem; border-radius: 9999px;
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.07em;
          text-transform: uppercase; white-space: nowrap;
        }
        .res-chip--video  { border: 1px solid rgba(94,155,181,0.3);  background: rgba(94,155,181,0.07);  color: #4a8eaa; }
        .res-chip--article{ border: 1px solid rgba(196,144,106,0.3); background: rgba(196,144,106,0.07); color: #b8835a; }
        .res-chip--faq    { border: 1px solid rgba(107,174,138,0.3); background: rgba(107,174,138,0.07); color: #4e9e74; }
        .res-chevron {
          color: #9ab0be; display: flex; align-items: center;
          transition: transform 0.3s ease, color 0.2s ease;
        }
        .res-chevron--open { transform: rotate(180deg); color: #6BAE8A; }

        /* Card body */
        .res-card-body { padding: 1.75rem 1.6rem 2rem; }

        /* Section eyebrow */
        .res-section-eyebrow {
          display: inline-block; font-size: 0.65rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #6BAE8A; margin-bottom: 0.35rem;
        }

        /* ── VIDEO ─────────────────────────────────────────────── */
        .res-video-wrap { margin-bottom: 1.75rem; }
        .res-video-embed {
          position: relative; padding-bottom: 56.25%; height: 0;
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(26,43,60,0.12);
          border: 1px solid rgba(107,174,138,0.1);
        }
        .res-video-embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

        /* ── ARTICLE EXCERPT ───────────────────────────────────── */
        .res-excerpt {
          padding: 1.4rem 1.5rem; background: #f8fbf9;
          border-radius: 10px; border: 1px solid rgba(107,174,138,0.13);
          margin-bottom: 1.5rem;
        }
        .res-excerpt-headline {
          font-family: 'Playfair Display', serif; font-size: 1.15rem;
          font-weight: 500; color: #1a2b3c; margin: 0 0 0.6rem; line-height: 1.3;
        }
        .res-excerpt-body { color: #6b7f8e; font-size: 0.955rem; line-height: 1.75; margin: 0 0 0.9rem; }
        .res-read-more {
          background: transparent; border: none;
          border-bottom: 1.5px solid rgba(107,174,138,0.45);
          color: #1a2b3c; font-size: 0.875rem; font-weight: 600;
          cursor: pointer; padding: 0 0 2px; font-family: inherit;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .res-read-more:hover { color: #4e9e74; border-color: #6BAE8A; }

        /* ── FAQ ZONE ──────────────────────────────────────────── */
        .res-faqs {
          background: #f4f9f6; border-radius: 12px;
          border: 1px solid rgba(107,174,138,0.14); padding: 1.4rem 1.5rem;
        }
        .res-faqs-header { margin-bottom: 0.9rem; padding-bottom: 0.9rem; border-bottom: 1px solid rgba(107,174,138,0.12); }
        .res-faqs-title {
          font-family: 'Playfair Display', serif; font-size: 1rem;
          font-weight: 500; color: #1a2b3c; margin: 0;
        }
        .res-faq-list { display: flex; flex-direction: column; gap: 0.4rem; }

        /* ── FAQ ITEM (light theme) ────────────────────────────── */
        .faq-item {
          position: relative; border-radius: 9px;
          border: 1px solid rgba(107,174,138,0.13); background: #fff;
          overflow: hidden; transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: transparent; transition: background 0.25s ease;
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
          width: 100%; display: flex; align-items: center; gap: 0.8rem;
          padding: 1rem 1.1rem 1rem 1.3rem;
          background: transparent; border: none; cursor: pointer; text-align: left;
        }
        .faq-item.faq-item--open .faq-trigger {
          border-bottom: 1px solid rgba(107,174,138,0.1); padding-bottom: 0.85rem;
        }
        .faq-num {
          font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(107,174,138,0.4); flex-shrink: 0; align-self: flex-start;
          padding-top: 3px; transition: color 0.2s ease;
        }
        .faq-item:hover .faq-num,
        .faq-item.faq-item--open .faq-num { color: #6BAE8A; }
        .faq-q {
          flex: 1; font-family: 'Playfair Display', serif; font-style: italic;
          font-size: 0.955rem; line-height: 1.55; color: #4a6275; transition: color 0.2s ease;
        }
        .faq-item:hover .faq-q,
        .faq-item.faq-item--open .faq-q { color: #1a2b3c; }
        .faq-icon {
          flex-shrink: 0; width: 26px; height: 26px; border-radius: 7px;
          border: 1px solid rgba(107,174,138,0.2); background: rgba(107,174,138,0.05);
          color: rgba(107,174,138,0.55); display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .faq-item.faq-item--open .faq-icon {
          border-color: rgba(107,174,138,0.45); background: rgba(107,174,138,0.1); color: #6BAE8A;
        }
        .faq-panel { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1); }
        .faq-item.faq-item--open .faq-panel { max-height: 600px; }
        .faq-answer-content {
          display: flex; align-items: flex-start; gap: 0.7rem;
          padding: 0.85rem 1.1rem 1rem 1.3rem;
          background: rgba(107,174,138,0.04); border-left: 3px solid rgba(107,174,138,0.32);
        }
        .faq-a-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px; min-width: 24px;
          background: rgba(107,174,138,0.09); border: 1px solid rgba(107,174,138,0.26);
          border-radius: 7px; color: #4e9e74; font-weight: 700; font-size: 0.68rem; margin-top: 1px;
        }
        .faq-answer-text { color: #6b7f8e; font-size: 0.925rem; line-height: 1.75; margin: 0; }

        /* ── FULL ARTICLE VIEW ─────────────────────────────────── */
        .res-back-btn {
          background: transparent; border: none; color: #6b7f8e;
          font-size: 0.875rem; font-weight: 500; cursor: pointer;
          padding: 0; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s ease; font-family: inherit;
        }
        .res-back-btn:hover { color: #1a2b3c; }
        .res-article-headline {
          font-family: 'Playfair Display', serif; font-size: 1.65rem;
          font-weight: 500; color: #1a2b3c; margin: 0 0 1.25rem; line-height: 1.25;
        }
        .res-article-prose p { color: #4a6275; font-size: 1.02rem; line-height: 1.8; margin-bottom: 1rem; }
        .res-article-cta {
          margin-top: 2.5rem;
          background: linear-gradient(135deg, #0C1B2E 0%, #1A3448 100%);
          border-radius: 14px; padding: 2rem 2rem 2.25rem; text-align: center;
        }
        .res-article-cta h4 {
          font-family: 'Playfair Display', serif; font-size: 1.35rem;
          color: #f5f0e8; margin: 0 0 0.6rem; font-weight: 500;
        }
        .res-article-cta p { color: rgba(245,240,232,0.65); font-size: 0.975rem; margin: 0 0 1.5rem; }

        /* ── EMPTY / NO RESULTS ────────────────────────────────── */
        .res-empty-notice { padding: 2rem; text-align: center; color: #9ab0be; font-size: 0.9rem; }
        .res-no-results { text-align: center; padding: 2rem 0 1rem; }
        .res-no-results-inner {
          display: inline-flex; flex-direction: column; align-items: center; gap: 0.75rem;
          max-width: 400px; padding: 2.5rem 2rem;
          background: #fff; border: 1px solid rgba(107,174,138,0.2); border-radius: 16px;
        }
        .res-no-results-icon { color: rgba(107,174,138,0.5); display: flex; align-items: center; justify-content: center; }
        .res-no-results-inner h2 {
          font-family: 'Playfair Display', serif; font-size: 1.35rem;
          color: #1a2b3c; margin: 0; font-weight: 500;
        }
        .res-no-results-inner p { color: #6b7f8e; font-size: 0.95rem; margin: 0; }

        /* ── LOAD MORE ─────────────────────────────────────────── */
        .res-load-more { display: flex; justify-content: center; margin-top: 2.5rem; }

        /* ── RESPONSIVE ────────────────────────────────────────── */
        @media (max-width: 600px) {
          .res-hero { padding: 7rem 1rem 2.5rem; }
          .res-chips { display: none; }
          .res-card-header { padding: 1rem 1rem 1rem 1.3rem; }
          .res-card--open .res-card-title { font-size: 1.25rem; }
          .res-card-body { padding: 1.25rem 1.1rem 1.5rem; }
          .res-faqs { padding: 1.1rem; }
          .res-article-cta { padding: 1.5rem 1.25rem; }
          .res-excerpt { padding: 1.1rem; }
        }
      `}</style>
    </div>
  );
}
