const fs = require('fs');

const masterCard = {
  id: "piers-master",
  title: "About Piers Day & The Method",
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
  { "title": "The NLP Fast Phobia Cure - How To Overcome Phobias Quickly - Piers Day", "videoId": "iqK9m_j6Bf4", "views": 7900 },
  { "title": "Affirmations - Use These Specific Words & Specific Timing For Affirmations To Work - Piers Day", "videoId": "aJyuXFxt3n4", "views": 5100 },
  { "title": "Affirmations For Positive Thinking - How To Be More Positive With Affirmations - Piers Day", "videoId": "a7734gds4ZA", "views": 4200 },
  { "title": "Why Affirmations Don't Work (And What To Do That Does) -  Piers Day", "videoId": "Uzx2tQJp65w", "views": 3200 },
  { "title": "Rapport & Building Rapport (How To Build Rapport)", "videoId": "_A8DkQTlCF4", "views": 1800 },
  { "title": "Representational Systems NLP - NLP Techniques - Piers Day", "videoId": "agbGMYZ3pQc", "views": 1600 },
  { "title": "How To Set Goals And Achieve Them 9 Key Steps To Achieve Your Goals - Piers Day", "videoId": "3EqebsXPt78", "views": 1100 },
  { "title": "NLP (Neuro Linguistic Programming) What It Is & How It Can Help Me - NLP", "videoId": "4p-GBqw8FB4", "views": 855 },
  { "title": "How To Stop Panic Attacks Fast Using This ONE NLP Technique - Piers Day", "videoId": "Uq23a_M6TXY", "views": 702 },
  { "title": "How To Read Anyone Quickly With These NLP Techniques - Piers Day", "videoId": "TKgLnQUot2M", "views": 581 },
  { "title": "New Behaviour Generator - NLP Technique To Change Human Behaviours", "videoId": "AbORxlyjzsU", "views": 530 },
  { "title": "How To Stay Motivated With These NLP Techniques - Motivation", "videoId": "SmXI8O1Wtbc", "views": 443 },
  { "title": "NLP Circle of Excellence (NLP Technique) - Piers Day", "videoId": "KvWE8awLSKw", "views": 326 },
  { "title": "Change Anxiety Into Calmness With This NLP Technique - Piers Day", "videoId": "SthCaIBt3pI", "views": 306 },
  { "title": "Tapping To Keep You Calm - EFT Tapping For Anxiety - Piers Day", "videoId": "DJQ2FB9AbOg", "views": 269 },
  { "title": "Anxiety Relief In 3 Simple Steps - How To Deal With Anxiety With NLP Technique", "videoId": "SdkvY2LvNlE", "views": 226 },
  { "title": "Change The Voices In Your Head (NLP Technique) - Piers Day", "videoId": "iK9zjV9NmKg", "views": 196 },
  { "title": "Change The View Of The World - Powerful NLP Technique", "videoId": "VoLfycdXbsc", "views": 193 },
  { "title": "3 Top Tips To Stop Anxiety & Nervousness With These NLP Techniques  - Piers Day", "videoId": "BoyH98ULYcY", "views": 164 },
  { "title": "NLP Anchoring - Anchoring Powerful States with NLP -  Piers Day", "videoId": "pdPagBs54cc", "views": 145 },
  { "title": "How To Get Rid Of Anxiety With These NLP Techniques - Stress & Anxiety", "videoId": "1j7EIu8vhMA", "views": 104 },
  { "title": "NLP - Be Careful what you say to people", "videoId": "wDl-240Vb1Y", "views": 89 },
  { "title": "NLP Looking at the Big Picture", "videoId": "1Wqb4z1kz9M", "views": 73 },
  { "title": "How To Change Negative Feelings In 3 SImple Steps - Piers Day", "videoId": "g81M5DICkDg", "views": 69 },
  { "title": "Erase negative thoughts instantly", "videoId": "kSvwWtIdGbE", "views": 67 },
  { "title": "How to change your thoughts and mood", "videoId": "5wCqbbNSvVo", "views": 66 },
  { "title": "EFT Tapping - Emotional Freedom Technique to Overcome Limiting Beliefs", "videoId": "TUyIH_a0XuY", "views": 61 },
  { "title": "Rep Systems - How To Use Representational Systems Every Day - Piers Day", "videoId": "kTsLtu0k6yg", "views": 60 },
  { "title": "Remove The Fear of Needles Part 2", "videoId": "imBuFVQklUs", "views": 42 },
  { "title": "NLP  Removing the Fear of Injections Part 1", "videoId": "cS3A-p3sCJc", "views": 41 },
  { "title": "How To Remove Emotional Pain In 3 Easy Steps - Piers Day", "videoId": "alExXXSvKVM", "views": 36 },
  { "title": "Communicate More Effectively With These NLP Techniques  -  Piers Day", "videoId": "j4MHD-QvZi8", "views": 31 }
];

const generatedTopics = [masterCard];

videos.forEach((vid, i) => {
    let cleanTitle = vid.title.replace(' - Piers Day', '').replace(' -  Piers Day', '').trim();
    
    // Generate some contextual text based on keywords
    let tag = "Mindset";
    let headline = "Reprogramming Your Mind for Success";
    let content = `The concepts discussed in this video "${cleanTitle}" are designed to help you take control of your subconscious patterns. When you understand how your internal programming works, you can easily shift out of limiting states and into empowering ones.\n\nNLP and Hypnotherapy allow us to bypass the critical, conscious mind and speak directly to the emotional center that drives your habits. This provides a shortcut to rapid, permanent change without relying on exhausting willpower.`;
    
    if (cleanTitle.toLowerCase().includes('anxiety') || cleanTitle.toLowerCase().includes('panic') || cleanTitle.toLowerCase().includes('calmness') || cleanTitle.toLowerCase().includes('calm')) {
        tag = "Anxiety & Stress";
        headline = "Turn Off the Fight-or-Flight Response";
        content = `Anxiety is simply your primitive brain running a faulty survival program. If you know you are safe but your body is reacting with panic, you cannot "out-think" the feeling.\n\nBy using the techniques outlined in this video "${cleanTitle}", you can learn to manually intercept the anxiety loop before it spirals out of control. In clinical practice, we take this a step further by reprogramming the root trigger so the anxiety response isn't fired in the first place.`;
    } else if (cleanTitle.toLowerCase().includes('phobia') || cleanTitle.toLowerCase().includes('fear')) {
        tag = "Overcoming Phobias";
        headline = "Erase Irrational Fears Instantly";
        content = `Phobias are dramatic examples of the brain working perfectly—it learns extremely quickly that something is "dangerous" and physically prevents you from going near it. The problem is, the danger is usually imagined or exaggerated.\n\nIn "${cleanTitle}", we explore how to safely detach the intense negative emotion from the trigger. Once the emotional charge is gone, the fear simply collapses and you regain your freedom.`;
    } else if (cleanTitle.toLowerCase().includes('affirmations') || cleanTitle.toLowerCase().includes('positive')) {
        tag = "Positive Thinking";
        headline = "Making Affirmations Actually Work";
        content = `Most generic affirmations fail because they clash with deeply held subconscious beliefs. If your subconscious believes you are unworthy, repeating "I am successful" will only create internal conflict and resistance.\n\nAs explained in "${cleanTitle}", the key is to use the right language structure and timing. When combined with deep trance states, we can bypass the conscious filter and install new, empowering beliefs that stick.`;
    } else if (cleanTitle.toLowerCase().includes('pain') || cleanTitle.toLowerCase().includes('negative')) {
        tag = "Trauma Relief";
        headline = "Breaking the Cycle of Past Trauma";
        content = `Emotional pain is often a physical response to a memory. When we experience something traumatic, our brain encodes the emotional intensity along with the factual memory. Days, months, or even years later, simply thinking about the event can trigger the exact same biological stress response.\n\nUsing advanced Neuro-Linguistic Programming (NLP) and hypnotherapy techniques, we do not erase the memory—that is impossible. Instead, we detach the negative emotional charge from the memory so you can finally move forward.`;
    } else if (cleanTitle.toLowerCase().includes('goal') || cleanTitle.toLowerCase().includes('motivation')) {
        tag = "Performance";
        headline = "Aligning Your Subconscious for Success";
        content = `Most people fail to reach their goals because their conscious desires are out of alignment with their subconscious programming. Consciously, you may want to start a business or lose weight, but if your subconscious associates success with danger or stress, it will sabotage you.\n\nTo achieve your goals effortlessly, you need internal alignment. Through specific hypnotherapy and NLP principles, we can align your deep unconscious drivers with your conscious targets, making motivation automatic.`;
    } else if (cleanTitle.toLowerCase().includes('nlp')) {
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

const fileContent = fs.readFileSync('app/blog/page.js', 'utf8');
const beforeTopics = fileContent.split('const topics = [')[0];
const afterTopicsSection = fileContent.split('];\n\n  // State to track which cards are showing the full article view');

if(afterTopicsSection.length > 1) {
    const finalFileContent = beforeTopics + `const topics = ${JSON.stringify(generatedTopics, null, 2)};\n\n  // State to track which cards are showing the full article view` + afterTopicsSection[1];
    fs.writeFileSync('app/blog/page.js', finalFileContent);
    console.log('Successfully updated the topics array with ' + generatedTopics.length + ' items.');
} else {
    console.log('Error: Could not find the end of the topics array');
}
