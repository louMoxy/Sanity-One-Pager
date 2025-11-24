import type {FC} from 'react'
import {baseSectionStyles, buttonStyles, headingStyles, mutedTextStyles} from './sharedStyles'
import {theme} from '../theme'

export const PdfChecklistCta: FC = () => (
  <section
    style={{
      ...baseSectionStyles,
      textAlign: 'center',
      backgroundColor: theme.colors.surfaceMuted,
      borderRadius: '32px',
      border: `1px solid ${theme.colors.border}`,
    }}
  >
    <h2 style={headingStyles}>Download the Website Launch Checklist</h2>
    <p style={{...mutedTextStyles, marginBottom: '24px'}}>
      Grow your email list and warm future clients to your offers with a valuable free resource.
    </p>
    <a
      href="https://moxiethemes.com/checklist.pdf"
      style={{...buttonStyles, backgroundColor: theme.colors.accent, boxShadow: '0 18px 40px rgba(249, 115, 22, 0.35)'}}
    >
      Download the Checklist
    </a>
  </section>
)

