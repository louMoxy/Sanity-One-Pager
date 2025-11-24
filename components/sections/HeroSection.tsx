import type {CSSProperties, FC} from 'react'
import {
  baseSectionStyles,
  buttonStyles,
  headingStyles,
  mutedTextStyles,
  subheadingStyles,
} from './sharedStyles'
import {theme} from '../theme'

const heroSectionStyles: CSSProperties = {
  ...baseSectionStyles,
  textAlign: 'center',
  paddingTop: '96px',
  paddingBottom: '96px',
  background: `linear-gradient(180deg, ${theme.colors.background} 0%, #ffffff 100%)`,
  borderRadius: '32px',
}

const accentBarStyles: CSSProperties = {
  width: '160px',
  height: '5px',
  backgroundColor: theme.colors.accent,
  margin: '0 auto 24px',
  borderRadius: '999px',
}

const heroImageStyles: CSSProperties = {
  width: '100%',
  maxWidth: '420px',
  margin: '48px auto 0',
  borderRadius: '32px',
  background: `linear-gradient(120deg, ${theme.colors.gradientFrom} 0%, ${theme.colors.gradientTo} 100%)`,
  height: '260px',
  boxShadow: theme.shadows.hero,
}

export const HeroSection: FC = () => (
  <section style={heroSectionStyles}>
    <div style={accentBarStyles} />
    <p
      style={{
        ...mutedTextStyles,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: theme.colors.textSecondary,
      }}
    >
      Intentional wellness
    </p>
    <h1 style={headingStyles}>I help busy mums create healthy routines they actually enjoy.</h1>
    <p style={{...subheadingStyles, maxWidth: '640px', margin: '0 auto 32px'}}>
      A supportive, straight-talking approach to habit change that feels human, flexible, and
      genuinely sustainable.
    </p>
    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'}}>
      <a href="#cta" style={buttonStyles}>
        Book a Call
      </a>
      <span style={{...mutedTextStyles, fontSize: '0.9rem'}}>
        Free 20-minute intro call, zero pressure.
      </span>
    </div>
    <div style={heroImageStyles} aria-hidden="true" />
  </section>
)

