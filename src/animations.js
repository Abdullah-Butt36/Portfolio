// Shared Framer Motion page animation variants
// Ultra-slow and dramatic "fade-up" effect for maximum smoothness

export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 150 // Even more pronounced starting position
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.8, // Ultra-slow cinematic duration
      ease: [0.19, 1, 0.22, 1] // Custom "Ease Out Expo" for the smoothest possible finish
    },
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeInOut" 
    }
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeUp = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.5, 
      ease: [0.19, 1, 0.22, 1] 
    },
  },
};
