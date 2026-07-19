export const typographyTokens = {
  display: {
    fontFamily: "'Aref Ruqaa', serif",
    fontSize: '4.0rem',
    lineHeight: '1.15',
    letterSpacing: '0',
    fontWeight: 700,
    tailwindClass: 'text-display'
  },
  h1: {
    fontFamily: "'Aref Ruqaa', serif",
    fontSize: '3.0rem',
    lineHeight: '1.20',
    letterSpacing: '0',
    fontWeight: 700,
    tailwindClass: 'text-h1'
  },
  h2: {
    fontFamily: "'Aref Ruqaa', serif",
    fontSize: '2.25rem',
    lineHeight: '1.25',
    letterSpacing: '0',
    fontWeight: 700,
    tailwindClass: 'text-h2'
  },
  h3: {
    fontFamily: "'Cairo', sans-serif",
    fontSize: '1.4rem',
    lineHeight: '1.35',
    letterSpacing: '0',
    fontWeight: 700,
    tailwindClass: 'text-h3'
  },
  body: {
    fontFamily: "'Cairo', sans-serif",
    fontSize: '1.0rem',
    lineHeight: '1.70',
    letterSpacing: '0',
    fontWeight: 400,
    tailwindClass: 'text-body-std'
  },
  caption: {
    fontFamily: "'Cairo', sans-serif",
    fontSize: '0.8rem',
    lineHeight: '1.50',
    letterSpacing: '0',
    fontWeight: 600,
    tailwindClass: 'text-caption-std'
  }
} as const

export const colorTokens = {
  primary: '#c8932b',
  secondary: '#6b4226',
  accent: '#e3b75e',
  background: '#2b1810',
  surface: 'rgba(58, 36, 23, 0.65)',
  border: 'rgba(200, 147, 43, 0.18)',
  muted: '#ecd9bd',
  success: '#1ebe5d',
  warning: '#c8932b',
  danger: '#e14d4d',
  // Reif El-Good specific tokens
  dark: '#2b1810',
  dark2: '#3a2417',
  cocoa: '#6b4226',
  walnut: '#8a5a32',
  tan: '#c08a52',
  beige: '#f4e8d8',
  beige2: '#ecd9bd',
  cream: '#fdf8f0',
  gold: '#c8932b',
  gold2: '#e3b75e'
} as const

export const spacingTokens = {
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  32: '32px',
  48: '48px',
  64: '64px',
  96: '96px'
} as const

export const radiusTokens = {
  small: '10px',
  medium: '14px',
  large: '18px',
  xl: '28px',
  xxl: '36px'
} as const

export const shadowTokens = {
  light: '0 3px 10px rgba(43, 24, 16, 0.15)',
  medium: '0 12px 30px rgba(43, 24, 16, 0.35), 0 4px 12px rgba(200, 147, 43, 0.15)',
  heavy: '0 25px 60px rgba(43, 24, 16, 0.65), 0 0 45px rgba(200, 147, 43, 0.25)'
} as const
