/**
 * Skills & Tools Data for Arjun Dabhi Portfolio
 * Verified real skills only. No unconfirmed technologies or invented percentages.
 */

export const skillCategories = [
  {
    id: 'frontend',
    category: 'Frontend & Programming',
    tag: '01 / ARCHITECTURE',
    description:
      'Building responsive, high-performance web interfaces with clean structure, modern component design, and functional logic.',
    skills: [
      { name: 'HTML', type: 'Structure' },
      { name: 'CSS', type: 'Styling & Layout' },
      { name: 'JavaScript', type: 'Logic & Interactivity' },
      { name: 'React', type: 'Component UI' },
      { name: 'Tailwind CSS', type: 'Utility Styling' },
      { name: 'Python', type: 'Scripting & Basics' },
    ],
  },
  {
    id: 'animation',
    category: 'Animation & Motion',
    tag: '02 / INTERACTION',
    description:
      'Creating cinematic scroll-driven storytelling, timeline sequences, and micro-interactions that make interfaces feel alive.',
    skills: [
      { name: 'GSAP', type: 'ScrollTrigger & Timelines' },
    ],
  },
  {
    id: 'workflow',
    category: 'Development Workflow',
    tag: '03 / TOOLING',
    description:
      'Structured version control, rapid bundling pipelines, and modular project organization for scalable development.',
    skills: [
      { name: 'Git', type: 'Version Control' },
      { name: 'GitHub', type: 'Code Repository' },
      { name: 'Vite', type: 'Modern Build Tool' },
    ],
  },
];

export const everydayTools = [
  {
    id: 'vscode',
    name: 'VS Code',
    badge: 'Code Editor',
    detail: 'Primary development environment for writing clean, modular code.',
    iconName: 'Code2',
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    badge: 'Agentic AI IDE',
    detail: 'Advanced agentic IDE empowering rapid iteration and workflow automation.',
    iconName: 'Sparkles',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    badge: 'AI & Research',
    detail: 'AI-assisted research, debugging, logic exploration, and continuous learning.',
    iconName: 'Bot',
  },
];
