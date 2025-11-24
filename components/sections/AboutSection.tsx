import type {FC} from 'react'
import {baseSectionStyles, headingStyles, mutedTextStyles, subheadingStyles} from './sharedStyles'
import {theme} from '../theme'
import {buildImageUrl} from '../../utils/imageUrl'

export type AboutSectionData = {
  label?: string
  heading?: string
  description?: string
  belief?: string
  credibility?: string
  image?: {
    asset?: {
      _ref?: string
      _type?: string
    }
    alt?: string
  }
}

type AboutSectionProps = {
  data?: AboutSectionData
}

const defaultData: AboutSectionData = {
  label: 'About',
  heading: 'A coach who actually listens',
  description:
    "I'm Lauren Reed — certified habit coach, wellness strategist, and mum of two. I specialise in helping busy mums transform chaotic schedules into sustainable routines that feel grounded and joyful. After burning out twice in corporate, I turned my toolkit into a practice that blends behavioural science with real-world empathy.",
  belief: 'I believe everyone deserves support that feels human, not clinical.',
  credibility: 'ICF Certified · 8+ years coaching · Clients featured in Women\'s Health',
}

export const AboutSection: FC<AboutSectionProps> = ({data}) => {
  const content = {...defaultData, ...data}
  const imageUrl = content.image?.asset?._ref
    ? buildImageUrl(content.image.asset._ref, 1200)
    : null

  return (
    <section
      style={{
        ...baseSectionStyles,
        backgroundColor: theme.colors.surfaceMuted,
        borderRadius: '32px',
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      {content.label && (
        <div style={{marginBottom: '16px'}}>
          <span style={{fontSize: '0.85rem', fontWeight: 600, color: theme.colors.textSecondary}}>
            {content.label}
          </span>
        </div>
      )}
      {content.heading && <h2 style={headingStyles}>{content.heading}</h2>}
      {content.description && <p style={subheadingStyles}>{content.description}</p>}
      {content.belief && (
        <p style={{...subheadingStyles, marginTop: '16px', color: theme.colors.textPrimary}}>
          {content.belief}
        </p>
      )}
      {content.credibility && (
        <div
          style={{
            marginTop: '32px',
            padding: '18px 24px',
            borderRadius: '20px',
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.borderStrong}`,
          }}
        >
          <p style={{...mutedTextStyles, marginBottom: '4px'}}>Credibility snapshot</p>
          <p style={{fontWeight: 600, color: theme.colors.textPrimary}}>{content.credibility}</p>
        </div>
      )}
      {imageUrl && (
        <div style={{marginTop: '32px', borderRadius: '20px', overflow: 'hidden'}}>
          <img
            src={imageUrl}
            alt={content.image?.alt || content.heading || 'About'}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      )}
    </section>
  )
}

