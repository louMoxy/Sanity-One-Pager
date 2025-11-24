import type {FC} from 'react'
import {baseSectionStyles, mutedTextStyles} from './sharedStyles'
import {theme} from '../theme'

const footerStyles = {
  ...baseSectionStyles,
  paddingBottom: '40px',
  borderTop: `1px solid ${theme.colors.border}`,
  textAlign: 'center' as const,
  backgroundColor: theme.colors.surface,
}

export const Footer: FC = () => (
  <footer style={footerStyles}>
    <p style={{fontWeight: 600, color: theme.colors.textPrimary}}>Lauren Reed Coaching</p>
    <p style={{...mutedTextStyles, margin: '8px 0'}}>hello@moxiethemes.com · @moxiethemes</p>
    <p style={mutedTextStyles}>© {new Date().getFullYear()} All rights reserved.</p>
    <p style={{marginTop: '16px', fontWeight: 600}}>Website by Moxie Themes</p>
    <div style={{marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
      <span style={{fontSize: '0.85rem', letterSpacing: '0.08em', color: theme.colors.textSecondary}}>
        A Moxie Themes Template
      </span>
      <span
        style={{
          padding: '4px 12px',
          borderRadius: '999px',
          border: `1px solid ${theme.colors.badgeBorder}`,
          backgroundColor: theme.colors.badgeBg,
          fontSize: '0.8rem',
        }}
      >
        Template Badge
      </span>
    </div>
  </footer>
)

