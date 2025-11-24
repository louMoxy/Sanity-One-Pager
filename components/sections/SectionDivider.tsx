import type {FC} from 'react'
import {baseSectionStyles, buttonStyles, mutedTextStyles} from './sharedStyles'
import {theme} from '../theme'

export const SectionDivider: FC = () => (
  <section
    style={{
      ...baseSectionStyles,
      textAlign: 'center',
      background: `linear-gradient(120deg, ${theme.colors.gradientFrom}, ${theme.colors.gradientTo})`,
      borderRadius: '32px',
      color: theme.colors.actionText,
    }}
  >
    <p style={{...mutedTextStyles, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors.badgeBg}}>
      Subtle Upsell
    </p>
    <h2 style={{fontSize: '2rem', margin: '12px 0', color: theme.colors.actionText}}>
      Love this template? Want a fully custom version in 7 days?
    </h2>
    <a
      href="https://moxiethemes.com/launch"
      style={{...buttonStyles, backgroundColor: theme.colors.surface, color: theme.colors.textPrimary}}
    >
      See the 7-Day Launch Package
    </a>
  </section>
)

