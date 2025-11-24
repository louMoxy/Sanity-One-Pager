import type {FC} from 'react'
import {
  baseSectionStyles,
  cardStyles,
  cardsGridStyles,
  headingStyles,
  mutedTextStyles,
} from './sharedStyles'
import {theme} from '../theme'

const testimonials = [
  {
    quote:
      '“This is where your client praise goes — keep it short and specific.”',
    client: 'Client Name',
  },
  {
    quote:
      '“Share how you helped them and what changed. Keep it high-impact.”',
    client: 'Client Name',
  },
  {
    quote:
      '“Even a placeholder like this encourages future clients to fill it in.”',
    client: 'Client Name',
  },
]

export const TestimonialsSection: FC = () => (
  <section style={{...baseSectionStyles, backgroundColor: theme.colors.surfaceMuted}}>
    <h2 style={headingStyles}>Proof from real humans</h2>
    <p style={mutedTextStyles}>Use 3 quick quotes with names to build trust.</p>
    <div style={cardsGridStyles}>
      {testimonials.map(testimonial => (
        <article
          key={testimonial.quote}
          style={{
            ...cardStyles,
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.borderStrong,
          }}
        >
          <p style={{fontStyle: 'italic', marginBottom: '12px', color: theme.colors.textSecondary}}>
            {testimonial.quote}
          </p>
          <p style={{fontWeight: 600, color: theme.colors.textPrimary}}>{testimonial.client}</p>
        </article>
      ))}
    </div>
  </section>
)

