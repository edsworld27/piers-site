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
    <main className="pt-32 pb-24 relative z-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <div className="container max-w-5xl">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="mb-4 text-gradient-gold">Resources & Freebies</h1>
          <p className="hero-sub mx-auto">
            Explore our extensive library of hypnotherapy and NLP resources.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container mb-16 fade-in-up" style={{animationDelay: "0.1s"}}>
          <div className="search-wrapper glass-panel">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search for 'anxiety', 'phobia', 'nlp'..." 
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Content Filter Tabs */}
        <div className="filter-tabs fade-in-up" style={{animationDelay: "0.15s"}}>
          {[
            { key: 'all',     icon: '✦', label: 'All'     },
            { key: 'video',   icon: '▶', label: 'Video'   },
            { key: 'article', icon: '✎', label: 'Article' },
            { key: 'faq',     icon: '?', label: 'FAQ'     },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              onClick={() => setContentFilter(key)}
              className={`filter-tab${contentFilter === key ? ' filter-tab--active' : ''}`}
            >
              <span className="filter-tab-icon">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Results Stream (Mega Cards) */}
        <div className="topic-stream fade-in-up" style={{animationDelay: "0.2s"}}>
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id} className={`mega-card glass-panel mb-8 transition-all duration-500 ${expandedCards[item.id] ? 'expanded' : 'collapsed'}`}>
                <div 
                  className={`card-header border-b pb-6 mb-2 cursor-pointer transition-all duration-500 flex justify-between items-center group ${expandedCards[item.id] ? 'items-start' : 'items-center'}`}
                  onClick={() => toggleCardExpansion(item.id)}
                >
                  <div className={`flex transition-all duration-500 ${expandedCards[item.id] ? 'flex-col items-start gap-3' : 'flex-row items-center gap-3'}`}>
                    <span className="tag-badge text-[10px] md:text-xs py-1 px-3 bg-accent-gold/5 border-accent-gold/20 leading-none">{item.tag}</span>
                    {!expandedCards[item.id] && <span className="text-gray-500 font-light opacity-50 hidden md:inline">—</span>}
                    <h2 className={`title text-gradient-light m-0 group-hover:text-gold transition-all duration-500 leading-tight ${expandedCards[item.id] ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-base md:text-lg lg:text-xl'}`}>
                      {item.title}
                    </h2>
                  </div>
                  {!expandedCards[item.id] && (
                    <div className="content-chips">
                      {item.videoId && <span className="content-chip content-chip--video">▶ Video</span>}
                      {item.article && <span className="content-chip content-chip--article">✎ Article</span>}
                      {item.faqs && item.faqs.length > 0 && <span className="content-chip content-chip--faq">? FAQ</span>}
                    </div>
                  )}
                  <div className={`expand-indicator text-accent-gold transition-transform duration-300 ${expandedCards[item.id] ? 'rotate-180' : ''}`}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                {expandedCards[item.id] && (
                  <div className="card-body-content pt-4 fade-in-up">
                    {/* CONDITIONAL RENDERING: Article View vs Video/FAQ View */}
                    {activeArticleViews[item.id] && item.article ? (
                      <div className="article-view">
                         <button 
                           onClick={() => toggleArticleView(item.id)}
                           className="back-btn mb-6 flex items-center gap-2"
                         >
                           <span className="text-xl">←</span> Back to Summary
                         </button>
                         <div className="article-content max-w-3xl mx-auto text-left">
                            <h3 className="text-2xl text-gradient-gold mb-6">{item.article.headline}</h3>
                            <div className="prose text-gray leading-relaxed space-y-4">
                              {item.article.content.split('\n\n').map((paragraph, idx) => (
                                 <p key={idx} className="mb-4 text-base md:text-lg">{paragraph}</p>
                              ))}
                            </div>
                            
                            {/* Inline Conversion CTA */}
                            <div className="article-cta mt-12 p-8 rounded-xl border border-accent-gold/20 bg-accent-gold/5 flex flex-col items-center text-center">
                              <h4 className="text-2xl text-gradient-gold mb-3">Ready to take control?</h4>
                              <p className="text-gray mb-8 max-w-lg">If you related to anything in this article, you don't have to keep struggling alone.</p>
                              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold tracking-wide">
                                Talk To Piers Today →
                              </Link>
                            </div>
                         </div>
                      </div>
                    ) : (
                      <div className="layered-summary-view">
                        {/* Layer 1: Video (Conditional) */}
                        {item.videoId && (contentFilter === 'all' || contentFilter === 'video') && (
                          <div className="video-section mb-10 max-w-4xl mx-auto text-left">
                            <div className="video-embed rounded-xl overflow-hidden border border-white/10" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.5)' }}>
                              <iframe 
                                src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                loading="lazy"
                              ></iframe>
                            </div>
                          </div>
                        )}
                        
                        {/* Layer 2: Article Excerpt (Conditional) */}
                        {item.article && (contentFilter === 'all' || contentFilter === 'article') && (
                          <div className="article-section mb-12 text-left max-w-4xl mx-auto">
                             <h3 className="text-xl text-white mb-4">{item.article.headline}</h3>
                             <p className="text-gray text-base mb-8 leading-relaxed max-w-3xl">
                               {item.article.content.substring(0, 240)}...
                             </p>
                             <button 
                               onClick={() => toggleArticleView(item.id)}
                               className="read-more-btn"
                              >
                               Read Full Article →
                             </button>
                          </div>
                        )}
                        
                        {/* Layer 3: FAQs (Conditional) */}
                        {item.faqs && item.faqs.length > 0 && (contentFilter === 'all' || contentFilter === 'faq') && (
                          <div className="faq-section-container">
                            <div className="faq-section-header">
                              <div className="faq-section-icon">?</div>
                              <div className="faq-section-title-group">
                                <h4 className="faq-section-title">Frequently Asked Questions</h4>
                                <p className="faq-section-subtitle">Quick answers about this topic</p>
                              </div>
                            </div>
                            <div className="faq-list">
                              {item.faqs.map((faq, idx) => (
                                 <FAQAccordion key={idx} faq={faq} index={idx} />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* No-content notice when filter is 'video' but card has no video */}
                        {contentFilter === 'video' && !item.videoId && (
                          <div className="filter-empty-notice">
                            <span className="filter-empty-icon">▶</span>
                            <p>No video available for this topic.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results max-w-3xl mx-auto mt-12 p-10 rounded-2xl border border-accent-gold/30 bg-[rgba(10,17,40,0.8)] flex flex-col items-center text-center fade-in-up">
              <span className="text-4xl mb-6">🔍</span>
              <h3 className="text-3xl text-gradient-light mb-4">No specific resources found.</h3>
              <p className="text-gray text-lg mb-8 max-w-xl leading-relaxed">If you can't find the exact topic you're looking for, contact Piers directly below.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold tracking-wide">
                Ask Piers Directly
              </Link>
            </div>
          )}
        </div>

        {/* Load More Control */}
        {visibleLimit < filteredTopics.length && (
          <div className="load-more-container flex justify-center mt-12 pb-12 fade-in-up">
            <button
              onClick={() => setVisibleLimit(prev => prev + incrementCount)}
              className="btn btn-primary"
            >
              Load More Resources &darr;
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .pt-32 { padding-top: 8rem; }
        .pb-24 { padding-bottom: 6rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-12 { margin-top: 3rem; }
        .pb-6 { padding-bottom: 1.5rem; }
        .pt-10 { padding-top: 2.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .border-b { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .border-t { border-top: 1px solid rgba(255,255,255,0.05); }
        .m-0 { margin: 0; }
        .text-center { text-align: center; }
        .text-3xl { font-size: 2rem; }
        .text-xl { font-size: 1.25rem; }
        .text-sm { font-size: 0.875rem; }
        .text-white { color: white; }
        .text-gray { color: var(--color-text-muted); }
        .text-accent-gold { color: var(--color-accent-gold); }
        .hero-sub { font-size: 1.25rem; color: var(--color-text-muted); max-width: 800px; line-height: 1.6; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-xl { max-width: 36rem; }
        .max-w-lg { max-width: 32rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-5xl { max-width: 64rem; }
        .p-4 { padding: 1rem; }
        .p-5 { padding: 1.25rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .p-10 { padding: 2.5rem; }
        .flex { display: flex; }
        .flex-1 { flex: 1 1 0%; }
        .flex-col { flex-direction: column; }
        .justify-between { justify-content: space-between; }
        .justify-start { justify-content: flex-start; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .rounded-md { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .border { border-width: 1px; }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .border-gray-200 { border-color: #E5E7EB; }
        .border-accent-gold\\/20 { border-color: rgba(107,174,138,0.2); }
        .border-accent-gold\\/30 { border-color: rgba(107,174,138,0.3); }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .bg-accent-gold\\/5 { background-color: rgba(107,174,138,0.05); }
        .bg-\\[\\#f8f9fc\\] { background-color: #f8f9fc; }
        .text-\\[\\#1A202C\\] { color: #1A202C; }
        .text-gray-600 { color: #4B5563; }
        .text-gray-700 { color: #374151; }
        .tracking-widest { letter-spacing: 0.1em; }
        .tracking-wide { letter-spacing: 0.025em; }
        .uppercase { text-transform: uppercase; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .inline-block { display: inline-block; }
        .inline-flex { display: inline-flex; }
        .text-left { text-align: left; }
        .pr-4 { padding-right: 1rem; }
        .pt-0 { padding-top: 0; }
        .pt-4 { padding-top: 1rem; }
        .mt-2 { margin-top: 0.5rem; }
        .leading-relaxed { line-height: 1.625; }
        .flex-shrink-0 { flex-shrink: 0; }
        .cursor-pointer { cursor: pointer; }
        .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }

        .search-container {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .search-wrapper {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .search-wrapper:focus-within {
          border-color: var(--color-accent-gold);
          background: rgba(255, 255, 255, 0.1);
        }
        .search-icon { font-size: 1.25rem; margin-right: 0.75rem; opacity: 0.7; }
        .search-input { flex-grow: 1; background: transparent; border: none; color: white; font-size: 1.125rem; padding: 0.75rem 0; outline: none; font-family: inherit; }
        .search-input::placeholder { color: rgba(255, 255, 255, 0.4); }

        .bg-gold { background-color: var(--color-accent-gold); }
        .text-navy-deep { color: var(--color-bg-deep); }
        .rotate-180 { transform: rotate(180deg); }
        .scale-110 { transform: scale(1.1); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }

        .topic-stream {
          display: flex;
          flex-direction: column;
        }
        .mega-card {
          padding: var(--space-8);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mega-card.collapsed {
          padding-bottom: 1.5rem;
        }
        .mega-card.collapsed .card-header {
           border-bottom: none;
           margin-bottom: 0;
           padding-bottom: 0;
        }
        .mega-card.collapsed .title {
           font-size: 1.125rem;
           letter-spacing: 0.5px;
        }
        .mega-card:hover {
          border-color: rgba(107, 174, 138, 0.4);
        }
        .tag-badge {
          background: rgba(107, 174, 138, 0.1);
          color: var(--color-accent-gold);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(107, 174, 138, 0.2);
        }
        
        .read-more-btn {
          background: transparent;
          color: var(--color-text-main);
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding: 0 0 2px 0;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .read-more-btn:hover {
          color: var(--color-accent-gold);
          border-color: var(--color-accent-gold);
        }

        .back-btn {
          background: transparent;
          color: var(--color-text-muted);
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .back-btn:hover {
          color: var(--color-white);
        }
        
        .prose p {
          color: var(--color-text-muted);
        }

        .pagination-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .pagination-btn:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-accent-gold);
        }

        /* ===== FAQ SECTION CONTAINER ===== */
        .faq-section-container {
          max-width: 56rem;
          margin: 3rem auto 0;
          padding: 2rem;
          background: rgba(10, 17, 40, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .faq-section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .faq-section-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-20), var(--accent-10));
          border: 1px solid var(--accent-30);
          border-radius: 12px;
          color: var(--color-accent);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .faq-section-title-group {
          flex: 1;
        }

        .faq-section-title {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-white);
          letter-spacing: 0.02em;
        }

        .faq-section-subtitle {
          margin: 0;
          font-size: 0.875rem;
          color: var(--color-text-55);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }

        /* ===== FAQ ITEMS ===== */
        .faq-item {
          position: relative;
          margin-bottom: 0.6rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(12, 27, 46, 0.45);
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .faq-item:last-child { margin-bottom: 0; }

        /* left accent bar */
        .faq-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 0.3s ease;
          border-radius: 14px 0 0 14px;
        }
        .faq-item:hover { border-color: rgba(107,174,138,0.18); background: rgba(12,27,46,0.6); }
        .faq-item:hover::before { background: rgba(107,174,138,0.3); }
        .faq-item.faq-item--open {
          border-color: rgba(107,174,138,0.28);
          background: rgba(12,27,46,0.65);
          box-shadow: 0 8px 32px rgba(107,174,138,0.07);
        }
        .faq-item.faq-item--open::before {
          background: linear-gradient(to bottom, #6BAE8A, rgba(107,174,138,0.35));
        }

        /* trigger button */
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.35rem 1.4rem 1.35rem 1.6rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .faq-item.faq-item--open .faq-trigger {
          border-bottom: 1px solid rgba(107,174,138,0.1);
          padding-bottom: 1.1rem;
        }

        /* number label */
        .faq-num {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(107,174,138,0.4);
          flex-shrink: 0;
          font-variant-numeric: tabular-nums;
          align-self: flex-start;
          padding-top: 4px;
          transition: color 0.25s ease;
        }
        .faq-item:hover .faq-num,
        .faq-item.faq-item--open .faq-num { color: rgba(107,174,138,0.85); }

        /* question text — Playfair italic */
        .faq-q {
          flex: 1;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.05rem;
          line-height: 1.55;
          color: rgba(237,233,227,0.6);
          letter-spacing: 0.01em;
          transition: color 0.25s ease;
        }
        .faq-item:hover .faq-q,
        .faq-item.faq-item--open .faq-q { color: #EDE9E3; }

        /* + / × toggle icon */
        .faq-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid rgba(107,174,138,0.2);
          background: rgba(107,174,138,0.05);
          color: rgba(107,174,138,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .faq-item:hover .faq-icon {
          border-color: rgba(107,174,138,0.4);
          color: rgba(107,174,138,0.9);
          background: rgba(107,174,138,0.1);
        }
        .faq-item.faq-item--open .faq-icon {
          border-color: rgba(107,174,138,0.5);
          color: #6BAE8A;
          background: rgba(107,174,138,0.14);
        }

        /* answer slide panel */
        .faq-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-item.faq-item--open .faq-panel { max-height: 600px; }

        /* answer content — keep existing design */
        .faq-answer-content {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 1.1rem 1.4rem 1.4rem 1.6rem;
          background: rgba(0,0,0,0.18);
          border-left: 3px solid rgba(94,155,181,0.4);
        }

        .faq-a-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          min-width: 28px;
          background: rgba(94,155,181,0.12);
          border: 1px solid rgba(94,155,181,0.3);
          border-radius: 8px;
          color: #5E9BB5;
          font-weight: 700;
          font-size: 0.75rem;
          margin-top: 1px;
        }

        .faq-answer-text {
          color: #8AAAB8;
          font-size: 0.975rem;
          line-height: 1.8;
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .faq-header-box {
          background: linear-gradient(135deg, rgba(107,174,138,0.1), rgba(107,174,138,0.05));
          border: 1px solid rgba(107,174,138,0.2);
        }

        @media (max-width: 640px) {
          .faq-trigger { padding: 1.1rem 1.2rem 1.1rem 1.3rem; }
          .faq-q { font-size: 0.97rem; }
          .faq-answer-text { font-size: 0.875rem; line-height: 1.7; }
          .faq-a-badge { width: 24px; height: 24px; min-width: 24px; font-size: 0.65rem; }
        }

        /* ===== CONTENT FILTER TABS ===== */
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .filter-tab:hover {
          border-color: rgba(107, 174, 138, 0.35);
          background: rgba(107, 174, 138, 0.07);
          color: rgba(255, 255, 255, 0.8);
        }
        .filter-tab--active {
          border-color: rgba(107, 174, 138, 0.6);
          background: rgba(107, 174, 138, 0.14);
          color: #6BAE8A;
          box-shadow: 0 0 16px rgba(107, 174, 138, 0.12);
        }
        .filter-tab-icon {
          font-style: normal;
          font-size: 0.7rem;
          opacity: 0.85;
        }

        /* ===== CLOSED CARD CONTENT CHIPS ===== */
        .content-chips {
          display: flex;
          gap: 0.35rem;
          align-items: center;
          flex-shrink: 0;
          margin-left: auto;
          margin-right: 0.75rem;
        }

        .content-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .content-chip--video {
          border: 1px solid rgba(94, 155, 181, 0.35);
          background: rgba(94, 155, 181, 0.08);
          color: #5E9BB5;
        }
        .content-chip--article {
          border: 1px solid rgba(201, 144, 106, 0.35);
          background: rgba(201, 144, 106, 0.08);
          color: #C4906A;
        }
        .content-chip--faq {
          border: 1px solid rgba(107, 174, 138, 0.35);
          background: rgba(107, 174, 138, 0.08);
          color: #6BAE8A;
        }

        /* ===== FILTER EMPTY NOTICE ===== */
        .filter-empty-notice {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 2.5rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.3);
        }
        .filter-empty-icon {
          font-size: 1.5rem;
          opacity: 0.4;
        }
        .filter-empty-notice p {
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .content-chips { display: none; }
          .filter-tabs { gap: 0.4rem; }
          .filter-tab { padding: 0.5rem 0.9rem; font-size: 0.72rem; }
        }

        @media (min-width: 768px) {
          .md\\:p-6 { padding: 1.5rem; }
          .md\\:text-base { font-size: 1rem; }
          .md\\:text-lg { font-size: 1.125rem; }
        }
      `}</style>
    </main>
  );
}
