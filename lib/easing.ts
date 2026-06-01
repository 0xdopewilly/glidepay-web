/** Ease-out-quint. The single curve every motion in this app uses so every
 * effect has the same "settle." Don't import another easing — match this. */
export const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

/** Same curve, expressed as a CSS cubic-bezier string for use in className /
 * inline style strings. */
export const SMOOTH_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
