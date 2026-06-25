const ease = [0.25, 0.46, 0.45, 0.94]

// ── Hero: animate on mount, delay for page fade-in ──────────────────────────
export const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

export const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

// ── Scroll-triggered: stagger children on viewport entry ────────────────────
export const viewContainer = (stagger = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
})

// Fade + slide up
export const up = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

// Fade + slide from left (for list rows)
export const left = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
}

// Shared viewport options
export const vp = { once: true, margin: '-60px' }
