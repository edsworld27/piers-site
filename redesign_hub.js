const fs = require('fs');

const masterCard = {
  id: "piers-master",
  title: "Who is Piers Day?",
  tag: "The Foundation",
  videoId: null,
  article: {
    headline: "One Solution. Hundreds of Applications.",
    content: "I do one thing: I give you back control of your mind by erasing limiting beliefs. But I apply this one skill in hundreds of ways.\n\nWhether you are struggling with crushing panic attacks, a 40-a-day smoking habit, or an inability to lose weight, the root cause is almost always the same: a subconscious mind running a faulty survival program.\n\nMy approach isn't about traditional 'talk therapy' where we spend years discussing your childhood. It's about direct, rapid intervention. By accessing the subconscious, we update the software that is driving your unwanted behaviors and emotions. Once the root belief is changed, the symptom (anxiety, addiction, self-doubt) simply collapses.\n\nWe stop managing symptoms and start eliminating the cause."
  },
  faqs: [
    { question: "How does the unconscious mind affect me?", answer: "Neuroscience shows the conscious mind is responsible for only 5-10% of mental activity. The remaining 90-95% operates unconsciously. It constantly scans for safety and meaning, shaping how you react before conscious thought catches up." },
    { question: "What does Piers Day help with, and what issues can hypnotherapy treat?", answer: "I specialise in treating anxiety, panic attacks, depression, trauma, PTSD, addiction (smoking/vaping), weight management, and deep-seated phobias." },
    { question: "What exactly is hypnotherapy, and is it scientifically proven?", answer: "Yes. Clinical hypnotherapy is recognized by the British Medical Association and neuro-imaging studies show clear changes in brain activity during a trance state." },
    { question: "What can I expect in a hypnotherapy session?", answer: "You will be completely awake and aware. We will first discuss exactly what you want to change. Then, I will guide you into a state of deep physical and mental relaxation. You are always in control and can open your eyes at any time." },
    { question: "How many sessions will I need?", answer: "Unlike traditional therapy, we aim for rapid resolution. Many issues like smoking cessation take only a single session. More complex issues like deep trauma may take 3-4 sessions." },
    { question: "Can anyone be hypnotised?", answer: "Yes. As long as you are willing and capable of following simple instructions, you can enter a state of hypnosis." },
    { question: "Is hypnotherapy safe for children?", answer: "Yes, and often highly effective. Children naturally spend much of their time in theta brainwave states, making them excellent candidates for rapid subconscious change." },
    { question: "Where are the sessions held?", answer: "Sessions are held predominantly online via Zoom, allowing you to experience the therapy in the safety and comfort of your own home. Face-to-face sessions can be arranged at my Suffolk clinic under special circumstances." }
  ]
};

const videos = [
  { "title": "Can Phobias be Cured Quickly?", "videoId": "iqK9m_j6Bf4" },
  { "title": "How do I make Affirmations work?", "videoId": "aJyuXFxt3n4" },
  { "title": "How can I be more Positive?", "videoId": "a7734gds4ZA" },
  { "title": "Why aren't my Affirmations working?", "videoId": "Uzx2tQJp65w" },
  { "title": "How do I build Rapport?", "videoId": "_A8DkQTlCF4" },
  { "title": "What are Rep Systems?", "videoId": "agbGMYZ3pQc" },
  { "title": "How do I achieve my Goals?", "videoId": "3EqebsXPt78" },
  { "title": "How does NLP actually work?", "videoId": "4p-GBqw8FB4" },
  { "title": "Can I stop a Panic Attack fast?", "videoId": "Uq23a_M6TXY" },
  { "title": "How do I read people quickly?", "videoId": "TKgLnQUot2M" },
  { "title": "How do I change my Behaviours?", "videoId": "AbORxlyjzsU" },
  { "title": "How do I stay Motivated?", "videoId": "SmXI8O1Wtbc" },
  { "title": "What is the Circle of Excellence?", "videoId": "KvWE8awLSKw" },
  { "title": "Can I turn Anxiety into Calm?", "videoId": "SthCaIBt3pI" },
  { "title": "Does Tapping work for Anxiety?", "videoId": "DJQ2FB9AbOg" },
  { "title": "Can Anxiety be relieved in 3 steps?", "videoId": "SdkvY2LvNlE" },
  { "title": "How do I change the Voices in my head?", "videoId": "iK9zjV9NmKg" },
  { "title": "How do I change my view of the World?", "videoId": "VoLfycdXbsc" },
  { "title": "Can I stop Nervousness fast?", "videoId": "BoyH98ULYcY" },
  { "title": "What is NLP Anchoring?", "videoId": "pdPagBs54cc" },
  { "title": "How do I get rid of Stress?", "videoId": "1j7EIu8vhMA" },
  { "title": "Are my words affecting others?", "videoId": "wDl-240Vb1Y" },
  { "title": "Am I looking at the Big Picture?", "videoId": "1Wqb4z1kz9M" },
  { "title": "Can I change Negative Feelings?", "videoId": "g81M5DICkDg" },
  { "title": "Can I erase Negative Thoughts?", "videoId": "kSvwWtIdGbE" },
  { "title": "How do I change my Mood?", "videoId": "5wCqbbNSvVo" },
  { "title": "How do I overcome Limiting Beliefs?", "videoId": "TUyIH_a0XuY" },
  { "title": "How do I use Rep Systems daily?", "videoId": "kTsLtu0k6yg" },
  { "title": "Can I remove the fear of Needles?", "videoId": "imBuFVQklUs" },
  { "title": "Can I remove the fear of Injections?", "videoId": "cS3A-p3sCJc" },
  { "title": "How do I remove Emotional Pain?", "videoId": "alExXXSvKVM" },
  { "title": "How do I communicate effectively?", "videoId": "j4MHD-QvZi8" }
];

const generatedTopics = [masterCard];

videos.forEach((vid, i) => {
    let cleanTitle = vid.title;
    
    // Generate some contextual text based on keywords
    let tag = "Mindset";
    let headline = "Reprogramming Your Mind for Success";
    let content = `The concepts discussed in this video "${cleanTitle}" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower.`;
    
    if (cleanTitle.toLowerCase().includes('anxiety') || cleanTitle.toLowerCase().includes('panic') || cleanTitle.toLowerCase().includes('calm') || cleanTitle.toLowerCase().includes('nervousness') || cleanTitle.toLowerCase().includes('stress')) {
        tag = "Anxiety & Stress";
        headline = "Turn Off the Fight-or-Flight Response";
        content = `Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot "out-think" the feeling.\n\nBy using the techniques outlined in this video "${cleanTitle}", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place.`;
    } else if (cleanTitle.toLowerCase().includes('phobia') || cleanTitle.toLowerCase().includes('fear') || cleanTitle.toLowerCase().includes('needle') || cleanTitle.toLowerCase().includes('injection')) {
        tag = "Overcoming Phobias";
        headline = "Erase Irrational Fears Instantly";
        content = `Phobias are dramatic examples of the brain working perfectly—it learns extremely quickly that something is "dangerous" and physically prevents you from going near it. The problem is, the danger is usually imagined or exaggerated.\n\nIn "${cleanTitle}", we explore how to safely detach the intense negative emotion from the trigger. Once the emotional charge is gone, the fear simply collapses and you regain your freedom.`;
    } else if (cleanTitle.toLowerCase().includes('affirmations') || cleanTitle.toLowerCase().includes('positive')) {
        tag = "Positive Thinking";
        headline = "Making Affirmations Actually Work";
        content = `Most generic affirmations fail because they clash with deeply held subconscious beliefs. If your subconscious believes you are unworthy, repeating "I am successful" will only create internal conflict and resistance.\n\nAs explained in "${cleanTitle}", the key is to use the right language structure and timing. When combined with deep trance states, we can bypass the conscious filter and install new, empowering beliefs that stick.`;
    } else if (cleanTitle.toLowerCase().includes('pain') || cleanTitle.toLowerCase().includes('negative') || cleanTitle.toLowerCase().includes('belief') || cleanTitle.toLowerCase().includes('voice') || cleanTitle.toLowerCase().includes('mood')) {
        tag = "Trauma Relief";
        headline = "Breaking the Cycle of Past Trauma";
        content = `Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward.`;
    } else if (cleanTitle.toLowerCase().includes('goal') || cleanTitle.toLowerCase().includes('motivation') || cleanTitle.toLowerCase().includes('behaviour')) {
        tag = "Performance";
        headline = "Aligning Your Subconscious for Success";
        content = `Most people fail to reach their goals because their conscious desires are out of alignment with their subconscious programming. Consciously, you may want to start a business or lose weight, but if your subconscious associates success with danger or stress, it will sabotage you.\n\nTo achieve your goals effortlessly, you need internal alignment. Through specific hypnotherapy and NLP principles, we can align your deep unconscious drivers with your conscious targets, making motivation automatic.`;
    } else if (cleanTitle.toLowerCase().includes('nlp') || cleanTitle.toLowerCase().includes('rep system') || cleanTitle.toLowerCase().includes('read people') || cleanTitle.toLowerCase().includes('communicate')) {
        tag = "The Science";
        headline = "Decoding the Language of Your Mind";
        content = `Neuro-Linguistic Programming (NLP) is essentially the user manual for your brain. 'Neuro' refers to your nervous system, 'Linguistic' refers to how you code experiences, and 'Programming' refers to the patterns you run.\n\nIn "${cleanTitle}", we explore how changing these internal representations can create massive, rapid change in how you feel and behave.`;
    }

    generatedTopics.push({
        id: `vid-${vid.videoId}`,
        title: cleanTitle,
        tag: tag,
        videoId: vid.videoId,
        article: {
            headline: headline,
            content: content
        },
        faqs: [
            { question: "How can I apply the concepts from this video?", answer: "The fastest way to apply these concepts is to practice them when you are calm, not just when you are stressed. Repetition builds the neural pathways." },
            { question: "Can hypnotherapy accelerate this process?", answer: "Yes. While these NLP techniques are powerful on their own, doing them while in a state of hypnosis allows the changes to bypass conscious resistance and become automatic much faster." },
            { question: "Do I need to understand NLP fully for it to work?", answer: "Not at all. Just like you don't need to be a mechanic to drive a car, you don't need to be a neuroscientist to use these practical mental tools." }
        ]
    });
});

let fileContent = fs.readFileSync('app/blog/page.js', 'utf8');

// 1. Update Topics Array
const beforeTopics = fileContent.split('const topics = [')[0];
const afterTopicsSection = fileContent.split('];\n\n  // State for pagination');
if(afterTopicsSection.length > 1) {
    fileContent = beforeTopics + `const topics = ${JSON.stringify(generatedTopics, null, 2)};\n\n  // State for pagination` + afterTopicsSection[1];
}

// 2. Update Pagination logic to Load More
fileContent = fileContent.replace(
    /const \[currentPage, setCurrentPage\] = useState\(1\);\n  const itemsPerPage = 6;/,
    "const [visibleLimit, setVisibleLimit] = useState(8);\n  const incrementCount = 8;"
);

fileContent = fileContent.replace(
    /const totalPages = Math\.ceil\(filteredTopics\.length \/ itemsPerPage\);\n  const currentItems = filteredTopics\.slice\(\(currentPage - 1\) \* itemsPerPage, currentPage \* itemsPerPage\);/,
    "const currentItems = filteredTopics.slice(0, visibleLimit);"
);

fileContent = fileContent.replace(
    /const handleSearchChange = \(e\) => \{\n    setSearchQuery\(e.target.value\);\n    setCurrentPage\(1\);\n    \/\/ When searching, we might want to auto-expand many items or keep them collapsed\n    \/\/ For now, let's keep them collapsed but searchable\.\n  \};/,
    "const handleSearchChange = (e) => {\n    setSearchQuery(e.target.value);\n    setVisibleLimit(8);\n  };"
);

// 3. Update Titles CSS and Pagination UI
fileContent = fileContent.replace(
    /<h2 className="title text-gradient-light text-2xl m-0 group-hover:text-gold transition-colors">\{item\.title\}<\/h2>/,
    '<h2 className="title text-gradient-light text-xl md:text-2xl m-0 group-hover:text-gold transition-colors">{item.title}</h2>'
);

// Replace pagination UI with Load More button
const paginationBlockRegex = /\{\/\* Pagination Controls \*\/\}[\s\S]*?\{totalPages > 1 && \([\s\S]*?<\/div>\s*?\)\}/;
const loadMoreUI = `{/* Load More Control */}
        {visibleLimit < filteredTopics.length && (
          <div className="load-more-container flex justify-center mt-12 pb-12 fade-in-up">
            <button 
              onClick={() => setVisibleLimit(prev => prev + incrementCount)}
              className="btn-primary px-10 py-4 font-bold tracking-widest text-sm uppercase flex items-center gap-3 active:scale-95 transition-all shadow-[0_0_20px_rgba(244,162,97,0.2)]"
            >
              Load More Resources
              <span className="text-lg">↓</span>
            </button>
          </div>
        )}`;

fileContent = fileContent.replace(paginationBlockRegex, loadMoreUI);

// 4. Update CSS for smaller titles and cleaner collapsed state
fileContent = fileContent.replace(
    /\.mega-card\.collapsed \{\n          padding-bottom: 2rem;\n        \}/,
    `.mega-card.collapsed {
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
        }`
);

fs.writeFileSync('app/blog/page.js', fileContent);
console.log('Successfully updated the Resources Hub with Question UI and Load More flow.');
