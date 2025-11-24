import type {FC} from 'react'
import {
  baseSectionStyles,
  cardStyles,
  cardsGridStyles,
  headingStyles,
  mutedTextStyles,
} from './sharedStyles'
import {theme} from '../theme'

const differentiators = [
  '100% personalised',
  'Friendly, supportive approach',
  'Flexible scheduling',
  'Clear tools you can use straight away',
  'No fluff, no overwhelm',
  'Results-driven',
  'Proven frameworks',
  'Let’s build momentum together',
]

export const WhyChooseMeSection: FC = () => (
  <section
    style={{
      ...baseSectionStyles,
      backgroundColor: theme.colors.background,
      borderRadius: '32px',
    }}
  >
    <h2 style={headingStyles}>Why clients stick around</h2>
    <p style={mutedTextStyles}>
      Logical reasons to trust the process — pick the ones that match your strengths.
    </p>
    <div style={cardsGridStyles}>
      {differentiators.map(point => (
        <article
          key={point}
          style={{
            ...cardStyles,
            minHeight: '140px',
            backgroundColor: theme.colors.surfaceMuted,
            borderColor: theme.colors.borderStrong,
          }}
        >
          <p style={{fontWeight: 600, color: theme.colors.textPrimary}}>{point}</p>
        </article>
      ))}
    </div>
  </section>
)

