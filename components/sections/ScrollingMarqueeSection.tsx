import type {CSSProperties, FC} from 'react'
import {useId, useMemo} from 'react'
import {baseSectionStyles, headingStyles, mutedTextStyles, subheadingStyles} from './sharedStyles'
import {theme} from '../theme'

type MarqueeItem = {
  title: string
  description?: string
  emoji?: string
}

type ScrollingMarqueeSectionProps = {
  heading?: string
  description?: string
  items: MarqueeItem[]
  variant?: 'text' | 'card'
  speedSeconds?: number
  background?: 'surface' | 'muted' | 'transparent'
}

const textItemStyles: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 20px',
  borderRadius: '999px',
  border: `1px solid ${theme.colors.badgeBorder}`,
  backgroundColor: theme.colors.badgeBg,
  fontWeight: 600,
  color: theme.colors.textPrimary,
  whiteSpace: 'nowrap',
}

const cardItemStyles: CSSProperties = {
  minWidth: '240px',
  maxWidth: '320px',
  padding: '20px',
  borderRadius: '20px',
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.surface,
  boxShadow: theme.shadows.card,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

const renderItem = (item: MarqueeItem, variant: 'text' | 'card') => {
  if (variant === 'text') {
    return (
      <span style={textItemStyles}>
        {item.emoji ? <span style={{fontSize: '1.25rem'}}>{item.emoji}</span> : null}
        {item.title}
      </span>
    )
  }

  return (
    <article style={cardItemStyles}>
      <p style={{margin: 0, fontWeight: 600, color: theme.colors.textPrimary}}>
        {item.emoji ? `${item.emoji} ` : ''}
        {item.title}
      </p>
      {item.description ? (
        <p style={{...mutedTextStyles, margin: 0, color: theme.colors.textSecondary}}>
          {item.description}
        </p>
      ) : null}
    </article>
  )
}

export const ScrollingMarqueeSection: FC<ScrollingMarqueeSectionProps> = ({
  heading = 'Client love on repeat',
  description = 'Use this marquee for testimonials, signature offers, or core philosophies.',
  items,
  variant = 'card',
  speedSeconds = 30,
  background = 'transparent',
}) => {
  const uniqueId = useId().replace(/:/g, '')
  const className = `marquee-${uniqueId}`
  const animationName = `${className}-scroll`

  const backgroundColor =
    background === 'surface'
      ? theme.colors.surface
      : background === 'muted'
        ? theme.colors.surfaceMuted
        : 'transparent'

  const marqueeCss = useMemo(
    () => `
      @keyframes ${animationName} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .${className} {
        display: flex;
        flex-wrap: nowrap;
        gap: 24px;
        animation: ${animationName} ${speedSeconds}s linear infinite;
        width: max-content;
      }
      .${className}__wrapper {
        width: 100%;
        overflow: hidden;
      }
    `,
    [animationName, className, speedSeconds],
  )

  const trackItems = [...items, ...items]

  return (
    <section
      style={{
        ...baseSectionStyles,
        backgroundColor,
        borderRadius: background === 'transparent' ? '0px' : '32px',
      }}
    >
      <style>{marqueeCss}</style>
      <div style={{marginBottom: '32px'}}>
        <h2 style={headingStyles}>{heading}</h2>
        {description ? <p style={{...subheadingStyles, maxWidth: '640px'}}>{description}</p> : null}
      </div>
      <div className={`${className}__wrapper`}>
        <div className={className}>
          {trackItems.map((item, index) => (
            <div key={`${item.title}-${index}`} style={{flex: '0 0 auto'}}>
              {renderItem(item, variant)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollingMarqueeSection

