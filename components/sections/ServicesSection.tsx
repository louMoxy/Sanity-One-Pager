import type {FC} from 'react'
import {
  baseSectionStyles,
  cardStyles,
  cardsGridStyles,
  headingStyles,
  mutedTextStyles,
  subheadingStyles,
  tagStyles,
} from './sharedStyles'
import {theme} from '../theme'

export type Service = {
  name: string
  description: string
  bullets: string[]
  priceLabel: string
  badge?: string
}

type ServicesSectionProps = {
  heading?: string
  description?: string
  services?: Service[]
}

const defaultServices: Service[] = [
  {
    name: '1:1 Coaching',
    description: 'Weekly support tailored around your goals.',
    bullets: ['60-minute sessions', 'Practical tools & checklists', 'Voxer access'],
    priceLabel: 'From £150/month',
    badge: 'Flagship',
  },
  {
    name: 'Power Hour',
    description: 'Get clarity on one issue fast.',
    bullets: ['60 minutes focused on one challenge', 'Action plan within 24 hours'],
    priceLabel: '£90 flat',
    badge: 'Quick Win',
  },
  {
    name: 'Done-For-You Package',
    description: 'I take care of everything for you.',
    bullets: ['Strategy + implementation', 'Systems set-up', 'Accountability built in'],
    priceLabel: 'Custom proposal',
    badge: 'Premium',
  },
]

export const ServicesSection: FC<ServicesSectionProps> = ({
  heading = 'Ways we can work together',
  description = 'Simple offers that make it crystal clear how you can plug me in.',
  services = defaultServices,
}) => (
  <section style={{...baseSectionStyles, backgroundColor: theme.colors.surface}}>
    <h2 style={headingStyles}>{heading}</h2>
    {description && <p style={subheadingStyles}>{description}</p>}
    <div style={cardsGridStyles}>
      {services.map(service => (
        <article key={service.name} style={{...cardStyles, borderColor: theme.colors.borderStrong}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
            <h3 style={{margin: '0 0 8px', fontSize: '1.25rem', fontFamily: theme.fonts.heading}}>
              {service.name}
            </h3>
            {service.badge && <span style={tagStyles}>{service.badge}</span>}
          </div>
          <p style={{...mutedTextStyles, marginBottom: '16px'}}>{service.description}</p>
          <ul style={{paddingLeft: '20px', marginBottom: '16px', color: theme.colors.textPrimary}}>
            {service.bullets.map(point => (
              <li key={point} style={{marginBottom: '6px'}}>
                {point}
              </li>
            ))}
          </ul>
          <p style={{fontWeight: 600, color: theme.colors.accent}}>{service.priceLabel}</p>
        </article>
      ))}
    </div>
  </section>
)

