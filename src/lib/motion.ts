// ── Easing curves ──────────────────────────────────────────────────────────
export const easeOut   = [0.16, 1, 0.3, 1]   as const; // expo-like decel
export const easeInOut = [0.4, 0, 0.2, 1]    as const; // material standard
export const easeExpo  = [0.19, 1, 0.22, 1]  as const; // dramatic cinematic

// ── Base enter variants ────────────────────────────────────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0  },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -22 },
  visible: { opacity: 1,  y:  0 },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x:  0 },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1,  x:   0 },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1    },
};

export const slideUp = {
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y:  0 },
};

// ── Stagger containers ─────────────────────────────────────────────────────
export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04 } },
};

export const staggerSlow = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } },
};
