import type {FC} from 'react'
import {
  baseSectionStyles,
  cardStyles,
  cardsGridStyles,
  headingStyles,
  mutedTextStyles,
} from './sharedStyles'
import {theme} from '../theme'

type Step = {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Step 1: Book a Call',
    description: 'We chat about your goals and whether we’re a good fit.',
  },
  {
    title: 'Step 2: Your Personal Plan',
    description: 'A clear roadmap based on your needs.',
  },
  {
    title: 'Step 3: Weekly Support',
    description: 'We meet regularly and adjust as you grow.',
  },
  {
    title: 'Step 4: Results & Accountability',
    description: 'I help you stay consistent and actually enjoy the process.',
  },
]

export const ProcessSection: FC = () => (
  <section style={{...baseSectionStyles, backgroundColor: theme.colors.surface}}>
    <h2 style={headingStyles}>How it works</h2>
    <p style={mutedTextStyles}>Show the roadmap so people can picture the journey.</p>
    <div style={cardsGridStyles}>
      {steps.map(step => (
        <article
          key={step.title}
          style={{...cardStyles, borderColor: theme.colors.border, backgroundColor: theme.colors.surfaceMuted}}
        >
          <p style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: theme.colors.textPrimary}}>
            {step.title}
          </p>
          <p style={mutedTextStyles}>{step.description}</p>
        </article>
      ))}
    </div>
  </section>
)

