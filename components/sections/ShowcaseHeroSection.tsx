import type {CSSProperties, FC} from 'react'
import {
  baseSectionStyles,
  buttonStyles,
  headingStyles,
  mutedTextStyles,
  subheadingStyles,
} from './sharedStyles'
import {theme} from '../theme'

type ShowcaseHeroProps = {
  eyebrow?: string
  heading?: string
  description?: string
  imageSrc: string
  imageAlt?: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  alignment?: 'image-left' | 'image-right'
}

const showcaseWrapperStyles: CSSProperties = {
  ...baseSectionStyles,
  backgroundColor: theme.colors.surface,
  borderRadius: '36px',
  padding: '72px 48px',
}

export const ShowcaseHeroSection: FC<ShowcaseHeroProps> = ({
  eyebrow = 'NEW OFFER JUST DROPPED',
  heading = 'Launch a site that sells in 7 days flat.',
  description = 'Perfect for service providers who crave a studio-level site without the agency price tag. Strategy, copy prompts, and dev-ready build all done for you.',
  imageSrc,
  imageAlt = '',
  primaryCta = {label: 'Book the 7-day build', href: '#book'},
  secondaryCta = {label: 'See what’s inside', href: '#details'},
  alignment = 'image-right',
}) => {
  const isImageRight = alignment === 'image-right'

  return (
    <section style={showcaseWrapperStyles}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          flexDirection: isImageRight ? 'row' : 'row-reverse',
        }}
      >
        <div
          style={{
            order: isImageRight ? 0 : 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: theme.colors.textSecondary,
            }}
          >
            {eyebrow}
          </span>
          <h2 style={{...headingStyles, fontSize: '3rem'}}>{heading}</h2>
          <p style={{...subheadingStyles, fontSize: '1.05rem'}}>{description}</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px'}}>
            {primaryCta ? (
              <a href={primaryCta.href} style={buttonStyles}>
                {primaryCta.label}
              </a>
            ) : null}
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                style={{
                  ...buttonStyles,
                  backgroundColor: 'transparent',
                  color: theme.colors.textPrimary,
                  border: `1px solid ${theme.colors.borderStrong}`,
                  boxShadow: 'none',
                }}
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
          <div style={{display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap'}}>
            <div>
              <p style={{fontSize: '2rem', fontWeight: 600, margin: 0, color: theme.colors.accent}}>
                7 days
              </p>
              <p style={{...mutedTextStyles, margin: 0}}>From idea to polished site</p>
            </div>
            <div>
              <p style={{fontSize: '2rem', fontWeight: 600, margin: 0, color: theme.colors.accent}}>
                20+
              </p>
              <p style={{...mutedTextStyles, margin: 0}}>Custom sections ready to reuse</p>
            </div>
          </div>
        </div>

        <div
          style={{
            order: isImageRight ? 1 : 0,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 'auto 16px -16px',
              height: '100%',
              borderRadius: '32px',
              background: `linear-gradient(120deg, ${theme.colors.gradientFrom}, ${theme.colors.gradientTo})`,
              opacity: 0.25,
              filter: 'blur(45px)',
            }}
            aria-hidden="true"
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: '100%',
              borderRadius: '32px',
              border: `2px solid ${theme.colors.border}`,
              boxShadow: '0 30px 60px rgba(15, 23, 42, 0.25)',
              display: 'block',
              position: 'relative',
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default ShowcaseHeroSection

