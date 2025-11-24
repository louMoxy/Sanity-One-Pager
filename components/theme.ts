export const theme = {
  colors: {
    background: '#fff9f4',
    backgroundDark: '#0f172a',
    surface: '#ffffff',
    surfaceMuted: '#fff2e6',
    textPrimary: '#1d1b20',
    textSecondary: '#5c5a65',
    textMuted: '#807a86',
    accent: '#f97316',
    accentDark: '#db5a05',
    accentSoft: '#ffe0c0',
    action: '#111827',
    actionText: '#ffffff',
    border: '#f0d5c4',
    borderStrong: '#e2b99b',
    gradientFrom: '#f97316',
    gradientTo: '#f43f5e',
    badgeBg: '#fff5eb',
    badgeBorder: '#f8cba5',
  },
  fonts: {
    heading: '"Poppins", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  shadows: {
    card: '0 12px 30px rgba(249, 115, 22, 0.15)',
    hero: '0 25px 65px rgba(244, 63, 94, 0.3)',
  },
}

export type Theme = typeof theme

