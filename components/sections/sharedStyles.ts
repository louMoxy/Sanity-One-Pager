import type {CSSProperties} from 'react'
import {theme} from '../theme'

export const baseSectionStyles: CSSProperties = {
  padding: '64px 24px',
  margin: '0 auto',
  maxWidth: '960px',
  fontFamily: theme.fonts.body,
  color: theme.colors.textPrimary,
}

export const headingStyles: CSSProperties = {
  fontFamily: theme.fonts.heading,
  fontSize: '2.5rem',
  marginBottom: '16px',
  lineHeight: 1.2,
  fontWeight: 600,
  color: theme.colors.textPrimary,
}

export const subheadingStyles: CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: 1.7,
  color: theme.colors.textSecondary,
}

export const buttonStyles: CSSProperties = {
  padding: '14px 28px',
  backgroundColor: theme.colors.action,
  color: theme.colors.actionText,
  borderRadius: '999px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'transform 160ms ease, box-shadow 160ms ease',
  boxShadow: '0 12px 20px rgba(17, 24, 39, 0.18)',
}

export const buttonHoverStyles: CSSProperties = {
  transform: 'translateY(-1px)',
  boxShadow: '0 18px 30px rgba(17, 24, 39, 0.18)',
}

export const cardsGridStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '24px',
  marginTop: '32px',
}

export const cardStyles: CSSProperties = {
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '20px',
  padding: '24px',
  backgroundColor: theme.colors.surface,
  boxShadow: theme.shadows.card,
}

export const mutedTextStyles: CSSProperties = {
  fontSize: '0.95rem',
  color: theme.colors.textMuted,
}

export const tagStyles: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 14px',
  borderRadius: '999px',
  border: `1px solid ${theme.colors.badgeBorder}`,
  backgroundColor: theme.colors.badgeBg,
  color: theme.colors.textSecondary,
  fontSize: '0.85rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}
