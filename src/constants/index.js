export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Wunderkind',
    pos: 'Marketing Web Developer',
    duration: '2022 - Present',
    title: "Wunderkind is a global performance marketing solution that helps brands acquire new customers at scale and keep them loyal for life. My work revolves around everything Wunderkind website related.",
    icon: '/assets/wknd-favicon.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CDA',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "CDA is an agile, full-service agency specializing in creative, digital, and media services, handlingeach step of the process, from audience definition to creative and media execution, basing every decision on analysis of your target and how they’ll respond",
    icon: '/assets/cda-logo.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'CookCasa',
    pos: 'Web Developer',
    duration: '2019 - 2020',
    title: "Cook Casa is a platform that connects people who love to cook with people who love to eat.",
    icon: '/assets/cook-casa-logo.png',
    animation: 'salute',
  },
];
