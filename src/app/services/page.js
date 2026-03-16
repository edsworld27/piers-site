import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "How I Can Help | Hypnotherapy for Anxiety, Fears, Habits & More | Piers Day",
  description: "Clinical hypnotherapy for anxiety, phobias, trauma, confidence, smoking, weight loss, sleep, OCD, grief, and hundreds of specific fears. Online & Bury St Edmunds.",
  alternates: { canonical: "https://www.piersday.com/services" },
  openGraph: {
    title: "How I Can Help | Piers Day Hypnotherapy",
    description: "A complete list of every condition, fear, and challenge Piers Day treats with clinical hypnotherapy.",
    url: "https://www.piersday.com/services",
    type: "website",
  },
};

const CATEGORIES = [
  {
    id: "anxiety",
    label: "Anxiety & Worry",
    items: [
      "Generalised anxiety disorder (GAD)",
      "Panic attacks",
      "Social anxiety",
      "Health anxiety / hypochondria",
      "Separation anxiety",
      "Anticipatory anxiety",
      "Morning anxiety",
      "Anxiety in pregnancy",
      "Postpartum anxiety",
      "Performance anxiety",
      "Relationship anxiety",
      "Existential anxiety",
      "Intrusive thoughts",
      "Constant overthinking",
      "Worry spirals",
      "Fear of the future",
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
      "Fear of dogs (cynophobia)",
      "Fear of heights (acrophobia)",
      "Fear of driving",
      "Fear of dentists",
      "Fear of doctors / hospitals",
      "Fear of death (thanatophobia)",
      "Fear of choking",
      "Fear of the dark",
      "Fear of open spaces (agoraphobia)",
      "Fear of enclosed spaces (claustrophobia)",
      "Fear of water",
      "Fear of crowds",
      "Fear of loud noises",
      "Fear of blood",
      "Fear of buttons (koumpounophobia)",
      "Fear of birds",
      "Fear of cats",
      "Fear of being sick in public",
      "Fear of losing control",
      "Fear of abandonment",
      "Fear of failure",
      "Fear of success",
      "Fear of rejection",
      "Fear of judgement",
      "Fear of making decisions",
      "Fear of being alone",
    ],
  },
  {
    id: "trauma",
    label: "Trauma & PTSD",
    items: [
      "Post-traumatic stress disorder (PTSD)",
      "Complex PTSD (C-PTSD)",
      "Childhood trauma",
      "Emotional abuse recovery",
      "Physical abuse recovery",
      "Sexual trauma recovery",
      "Medical trauma",
      "Birth trauma",
      "Accident trauma",
      "Bereavement & grief",
      "Sudden loss",
      "Divorce & relationship breakdown",
      "Workplace trauma",
      "Bullying recovery",
      "Emotional flashbacks",
      "Dissociation",
    ],
  },
  {
    id: "habits",
    label: "Habits & Addictions",
    items: [
      "Stop smoking",
      "Quit vaping",
      "Alcohol reduction",
      "Drug dependency support",
      "Gambling addiction",
      "Pornography addiction",
      "Social media addiction",
      "Nail biting",
      "Hair pulling (trichotillomania)",
      "Skin picking (dermatillomania)",
      "Teeth grinding (bruxism)",
      "Thumb sucking",
      "Compulsive lying",
      "Compulsive checking",
      "Hoarding behaviours",
      "Shopping addiction",
    ],
  },
  {
    id: "weight",
    label: "Weight, Food & Body",
    items: [
      "Emotional eating",
      "Comfort eating",
      "Binge eating disorder",
      "Sugar cravings",
      "Overeating",
      "Weight loss motivation",
      "Food aversions",
      "Fear of certain foods",
      "Anorexia support (adjunct)",
      "Bulimia support (adjunct)",
      "Body dysmorphia",
      "Poor body image",
      "Intuitive eating",
      "Exercise motivation",
    ],
  },
  {
    id: "sleep",
    label: "Sleep & Rest",
    items: [
      "Insomnia",
      "Difficulty falling asleep",
      "Early morning waking",
      "Sleep anxiety",
      "Nightmares & night terrors",
      "Teeth grinding at night",
      "Restless legs syndrome support",
      "Broken sleep patterns",
      "Shift work sleep issues",
      "Jet lag reset",
    ],
  },
  {
    id: "confidence",
    label: "Confidence & Self-Worth",
    items: [
      "Low self-esteem",
      "Imposter syndrome",
      "Self-doubt",
      "People pleasing",
      "Inability to say no",
      "Fear of conflict",
      "Public speaking anxiety",
      "Interview nerves",
      "Social confidence",
      "Body confidence",
      "Confidence in relationships",
      "Confidence after redundancy",
      "Confidence after illness",
      "Assertiveness",
    ],
  },
  {
    id: "performance",
    label: "Performance & Achievement",
    items: [
      "Sports performance",
      "Golf mental game",
      "Tennis performance",
      "Exam nerves & test anxiety",
      "Driving test anxiety",
      "Presentation skills",
      "Stage fright",
      "Creative blocks",
      "Writer's block",
      "Procrastination",
      "Perfectionism",
      "Fear of feedback",
      "Business performance anxiety",
      "Sales confidence",
      "Leadership presence",
    ],
  },
  {
    id: "mental-health",
    label: "Mental Health & Mood",
    items: [
      "Depression (mild to moderate)",
      "Low mood",
      "Burnout & exhaustion",
      "Stress management",
      "Emotional regulation",
      "Anger management",
      "OCD (obsessive-compulsive disorder)",
      "Seasonal affective disorder (SAD)",
      "Loneliness",
      "Lack of motivation",
      "Apathy",
      "Emotional numbness",
      "Negative self-talk",
      "Shame & guilt",
    ],
  },
  {
    id: "relationships",
    label: "Relationships & Intimacy",
    items: [
      "Fear of intimacy",
      "Attachment issues (anxious/avoidant)",
      "Fear of commitment",
      "Jealousy",
      "Controlling behaviours",
      "Co-dependency",
      "Recovering from a toxic relationship",
      "Sexual anxiety",
      "Vaginismus support",
      "Erectile dysfunction (psychological)",
      "Trust issues",
      "Infidelity recovery",
      "Divorce recovery",
    ],
  },
  {
    id: "health",
    label: "Health & Medical",
    items: [
      "Chronic pain management",
      "IBS & gut-brain axis",
      "Fibromyalgia support",
      "Skin conditions (psychosomatic)",
      "Tinnitus relief",
      "Preparation for surgery",
      "Recovery after surgery",
      "Cancer care support",
      "Fertility & IVF stress",
      "Chronic fatigue syndrome support",
      "Immune system support",
      "Migraines (tension-based)",
      "High blood pressure (stress-related)",
      "Fear of medical procedures",
    ],
  },
  {
    id: "life",
    label: "Life Transitions",
    items: [
      "Career change anxiety",
      "Redundancy recovery",
      "Retirement adjustment",
      "Moving country / relocation stress",
      "Empty nest syndrome",
      "New parent anxiety",
      "Menopause support",
      "Midlife identity crisis",
      "Returning to work after illness",
      "Starting a business (fear & doubt)",
      "Leaving a cult or high-control group",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page-wrap">

      {/* Header */}
      <section className="page-header">
        <div className="container-inner">
          <span className="eyebrow-label">How I Can Help</span>
          <h1>Everything I Work With</h1>
          <p className="muted-text">
            25+ years of clinical practice. If something is holding you back — whether it's on this list or not — get in touch. If hypnotherapy can help, I'll tell you honestly.
          </p>
          <hr className="gold-hr" />
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro-section">
        <div className="container-inner">
          <p className="services-intro-text">
            Below is a comprehensive list of the conditions, fears, habits, and challenges I work with using clinical hypnotherapy. This isn't exhaustive — the subconscious mind underlies almost every pattern of thought and behaviour. If you don't see your specific issue, <Link href="/contact">reach out</Link> and we'll talk it through.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-categories">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="services-category">
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
