/* ================= BASE CONFIG ================= */

const baseTransition = {
   duration: 0.4,
   ease: "easeOut" as const,
};

/* ================= STAGGER ================= */

export const stagger = {
   hidden: {},
   show: {
      transition: {
         staggerChildren: 0.08,
      },
   },
};

export const createStagger = (delay = 0.08) => ({
   hidden: {},
   show: {
      transition: {
         staggerChildren: delay,
      },
   },
});

/* ================= FADE ================= */

export const fadeIn = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: baseTransition,
   },
};

export const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
   },
};

export const fadeDown = {
   hidden: { opacity: 0, y: -24 },
   show: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
   },
};

/* ================= SCALE ================= */

export const scaleUp = {
   hidden: { opacity: 0, scale: 0.94 },
   show: {
      opacity: 1,
      scale: 1,
      transition: {
         ...baseTransition,
         duration: 0.3,
      },
   },
};

/* ================= SLIDE ================= */

export const slideUp = {
   hidden: { opacity: 0, y: 40 },
   show: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
   },
};

export const slideDown = {
   hidden: { opacity: 0, y: -40 },
   show: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
   },
};

export const slideLeft = {
   hidden: { opacity: 0, x: 40 },
   show: {
      opacity: 1,
      x: 0,
      transition: baseTransition,
   },
};

export const slideRight = {
   hidden: { opacity: 0, x: -40 },
   show: {
      opacity: 1,
      x: 0,
      transition: baseTransition,
   },
};

/* ================= VIEWPORT HELPERS ================= */

export const viewportOnce = {
   once: true,
   margin: "-80px",
};

export const viewportRepeat = {
   once: false,
   margin: "-80px",
};

/* ================= FADE SIDE ================= */

export const fadeLeft = {
   hidden: { opacity: 0, x: 24 },
   show: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.4,
         ease: "easeOut" as const,
      },
   },
};

export const fadeRight = {
   hidden: { opacity: 0, x: -24 },
   show: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.4,
         ease: "easeOut" as const,
      },
   },
};