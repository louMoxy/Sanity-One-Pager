import type {FC} from 'react'
import {
  baseSectionStyles,
  buttonStyles,
  headingStyles,
  mutedTextStyles,
  subheadingStyles,
} from './sharedStyles'
import {theme} from '../theme'

export const FinalCtaSection: FC = () => (
  <section
    id="cta"
    style={{
      ...baseSectionStyles,
      textAlign: 'center',
      backgroundColor: theme.colors.backgroundDark,
      color: theme.colors.actionText,
      borderRadius: '32px',
    }}
  >
    <h2 style={{...headingStyles, color: theme.colors.actionText}}>Ready to start feeling better?</h2>
    <p style={{...subheadingStyles, margin: '0 auto 24px', maxWidth: '520px', color: theme.colors.accentSoft}}>
      Book your free intro call below — I’ll guide you through the next best step.
    </p>
    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'}}>
      <a href="mailto:hello@moxiethemes.com?subject=Free%20Intro%20Call" style={buttonStyles}>
        Book Your Free Call
      </a>
      <span style={{...mutedTextStyles, color: theme.colors.badgeBg}}>
        Prefer to chat first? Email me.
      </span>
    </div>
    <p style={{...mutedTextStyles, marginTop: '24px', fontStyle: 'italic', color: theme.colors.badgeBg}}>
      If you want this turned into a full multi-page website, I can help!
    </p>
  </section>
)

