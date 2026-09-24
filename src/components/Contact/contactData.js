// Contact Configuration and Real Data
// CRITICAL RULE: Only render verified and configured contact information.
// Fields left as empty strings will be gracefully omitted from the UI.
export const contactInfo = {
  email: '',
  linkedin: '',
  github: 'https://github.com/Abhioswald',
  location: '',
};

// Safe factual highlight blocks for the bottom info strip
export const bottomInfoBlocks = [
  {
    number: '01',
    title: "LET'S CONNECT",
    description: 'Have an idea? Start a conversation.',
    iconName: 'MessageSquare',
  },
  {
    number: '02',
    title: 'PROJECTS',
    description: 'I enjoy turning ideas into interactive experiences.',
    iconName: 'Code2',
  },
  {
    number: '03',
    title: 'LEARNING',
    description: 'Always exploring new technologies and better ways to build.',
    iconName: 'Compass',
  },
  {
    number: '04',
    title: 'CREATE',
    description: 'Let’s make something meaningful.',
    iconName: 'Sparkles',
  },
];
