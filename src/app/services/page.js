import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "Where I Can Help | Hypnotherapy for Anxiety, Fears, Habits & More | Piers Day",
  description: "Clinical hypnotherapy for anxiety, phobias, trauma, confidence, smoking, weight loss, sleep, OCD, grief, and hundreds of specific fears. Online & Bury St Edmunds.",
  alternates: { canonical: "https://www.piersday.com/services" },
  openGraph: {
    title: "Where I Can Help | Piers Day Hypnotherapy",
    description: "A complete list of every condition, fear, and challenge Piers Day treats with clinical hypnotherapy.",
    url: "https://www.piersday.com/services",
    type: "website",
  },
};

const CATEGORIES = [
  {
    id: "anger",
    label: "Anger & Emotional Regulation",
    items: [
      "Anger management",
      "Rage & explosive reactions",
      "Emotional dysregulation",
      "Road rage",
      "Jealousy & controlling behaviour",
      "Shame & guilt",
      "Emotional numbness",
      "Grief & loss",
    ],
  },
  {
    id: "anxiety",
    label: "Anxiety & Depression",
    items: [
      "Generalised anxiety disorder (GAD)",
      "Panic attacks",
      "Social anxiety",
      "Health anxiety",
      "Depression (mild to moderate)",
      "Low mood & emotional flatness",
      "Burnout & exhaustion",
      "Stress management",
      "Intrusive thoughts",
      "Constant overthinking",
      "Dark or suicidal thoughts",
      "Emotional overwhelm",
      "Morning anxiety",
      "Performance anxiety",
    ],
  },
  {
    id: "business",
    label: "Business & Performance",
    items: [
      "Business owner burnout",
      "Leadership presence",
      "Sales confidence",
      "Procrastination & creative blocks",
      "Perfectionism",
      "Fear of failure or success",
      "Sports performance hypnosis / NLP",
      "Golf mental game",
      "Driving test anxiety",
      "Exam nerves (adults)",
      "Stage fright",
      "Writer's block",
    ],
  },
  {
    id: "children",
    label: "Children & Teenagers",
    items: [
      "Anxiety in children",
      "School refusal",
      "Exam nerves & test anxiety",
      "Panic attacks in teenagers",
      "Bullying & social pressure",
      "Low confidence & self-esteem",
      "Speech anxiety & stammering",
      "Bedwetting (nocturnal enuresis)",
      "Sleep issues in children",
      "Anger & emotional outbursts",
      "OCD in young people",
      "Phobias in children",
      "Teenage depression",
    ],
  },
  {
    id: "confidence",
    label: "Confidence & Self-Worth",
    items: [
      "Low self-esteem",
      "Imposter syndrome",
      "Self-doubt & negative self-talk",
      "People pleasing",
      "Inability to say no",
      "Fear of conflict",
      "Interview nerves",
      "Social confidence",
      "Assertiveness",
      "Confidence after illness or redundancy",
    ],
  },
  {
    id: "habits",
    label: "Habits & Addictions",
    items: [
      "Alcohol reduction",
      "Drug dependency support",
      "Gambling addiction",
      "Pornography addiction",
      "Nail biting",
      "Hair pulling (trichotillomania)",
      "Skin picking (dermatillomania)",
      "Teeth grinding (bruxism)",
      "Compulsive checking",
      "OCD (obsessive-compulsive disorder)",
      "Hoarding behaviours",
      "Social media compulsion",
      "Thumb sucking",
    ],
  },
  {
    id: "health",
    label: "Health & Medical",
    items: [
      "Irritable bowel syndrome (IBS) — registered expert",
      "Chronic pain management",
      "Fibromyalgia support",
      "Preparation for surgery",
      "Recovery after surgery",
      "Cancer care support",
      "Fertility & IVF stress",
      "Chronic fatigue syndrome",
      "Migraines (tension-based)",
      "Tinnitus relief",
      "Skin conditions (psychosomatic)",
      "High blood pressure (stress-related)",
    ],
  },
  {
    id: "hypnobirthing",
    label: "HypnoBirthing® & Pregnancy",
    items: [
      "HypnoBirthing® (registered practitioner)",
      "Fear of childbirth (tokophobia)",
      "Anxiety in pregnancy",
      "Postpartum anxiety",
      "Birth trauma recovery",
      "Fertility & IVF stress",
      "New parent anxiety",
    ],
  },
  {
    id: "phobias",
    label: "Phobias & Specific Fears",
    items: [
      "Fear of flying (aerophobia)",
      "Fear of spiders (arachnophobia)",
      "Fear of needles / injections",
      "Fear of vomiting (emetophobia)",
      "Fear of heights (acrophobia)",
      "Fear of driving",
      "Fear of dentists",
      "Fear of doctors / hospitals",
      "Fear of enclosed spaces (claustrophobia)",
      "Fear of open spaces (agoraphobia)",
      "Fear of death (thanatophobia)",
      "Fear of choking",
      "Fear of blood",
      "Fear of water",
      "Fear of losing control",
    ],
  },
  {
    id: "relationships",
    label: "Relationships & Intimacy",
    items: [
      "Fear of intimacy",
      "Attachment issues (anxious / avoidant)",
      "Sexual anxiety",
      "Erectile dysfunction (psychological)",
      "Vaginismus",
      "Co-dependency",
      "Recovering from a toxic relationship",
      "Trust issues",
      "Divorce recovery",
    ],
  },
  {
    id: "sleep",
    label: "Sleep & Insomnia",
    items: [
      "Insomnia",
      "Difficulty falling or staying asleep",
      "Sleep anxiety",
      "Nightmares & night terrors",
      "Broken sleep patterns",
      "Shift work sleep disruption",
    ],
  },
  {
    id: "speech",
    label: "Speech & Communication",
    items: [
      "Stammering (stuttering)",
      "Speech anxiety",
      "Fear of public speaking",
      "Selective mutism",
      "Presentation nerves",
      "Vocal confidence",
      "Communication in relationships",
    ],
  },
  {
    id: "smoking",
    label: "Stop Smoking & Vaping",
    items: [
      "Stop smoking (1-session intensive)",
      "Quit vaping",
      "Cutting down before stopping",
      "Breaking the stress-smoking link",
      "Preventing weight gain after quitting",
      "Relapse prevention",
    ],
  },
  {
    id: "trauma",
    label: "Trauma & PTSD",
    items: [
      "Post-traumatic stress disorder (PTSD)",
      "Complex PTSD (C-PTSD)",
      "Critical incident debriefing",
      "Childhood trauma",
      "Accident & medical trauma",
      "Birth trauma",
      "Emotional & physical abuse recovery",
      "Sexual trauma recovery",
      "Bereavement & grief",
      "Emotional flashbacks",
      "Dissociation",
      "Bullying recovery",
      "Workplace trauma",
    ],
  },
  {
    id: "weight",
    label: "Weight, Food & Eating",
    items: [
      "Emotional eating",
      "Comfort eating",
      "Binge eating disorder",
      "Food addiction",
      "Sugar cravings",
      "Overeating & portion control",
      "Weight loss motivation",
      "Anorexia support (adjunct therapy)",
      "Bulimia support (adjunct therapy)",
      "Body dysmorphia",
      "Poor body image",
      "Fear of certain foods",
      "Exercise motivation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page-wrap">

      {/* Header */}
      <section className="page-header">
        <div className="container-inner">
          <span className="eyebrow-label">Where I Can Help</span>
          <h1>Everything I Work With</h1>
          <p className="muted-text">
            25+ years of clinical practice. I use hypnotherapy, NLP, EMDR, EFT, and Kinetic Shift — whichever combination gets to the root fastest. If something is holding you back, get in touch and I&apos;ll tell you honestly whether I can help.
          </p>
          <hr className="gold-hr" />

          <div className="services-unsure-callout anim-up" style={{ transitionDelay: "0.3s" }}>
            <p className="services-unsure-main">
              Not sure what to call it?
            </p>
            <p className="services-unsure-body">
              You don't need to put what you're feeling into a box. Sometimes it's just a weight you can't name, a sense that something isn't right. That's enough. The best place to start is a conversation — I'll help you find the words from there.
            </p>
            <Link href="/contact" className="services-unsure-cta">
              Book a free chat →
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro-section">
        <div className="container-inner">
          <p className="services-intro-text">
            I work with adults, teenagers, and children across a wide range of emotional, behavioural, and psychological challenges. My approach draws on clinical hypnotherapy, NLP, EMDR, EFT, and Kinetic Shift — I use whatever combination is most effective for you. If you don&apos;t see your specific issue listed, <Link href="/contact">reach out</Link> — if I can help, I&apos;ll tell you, and if I can&apos;t, I&apos;ll point you to someone who can.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-categories">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="services-category anim-scale"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <h2 className="services-cat-title">{cat.label}</h2>
                <ul className="services-item-list">
                  {cat.items.map(item => (
                    <li key={item} className="services-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6BAE8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="container-inner">
          <h2>Don&rsquo;t see your issue?</h2>
          <p>This list covers the most common presentations — but every person is different. If something is affecting your life and you think hypnotherapy might help, the first step is a conversation.</p>
          <Link href="/contact" className="btn btn-primary">Let&rsquo;s Talk →</Link>
        </div>
      </section>

    </div>
  );
}
