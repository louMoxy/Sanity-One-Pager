import type {CSSProperties, FC} from 'react'
import {useState} from 'react'
import {baseSectionStyles, headingStyles, subheadingStyles} from './sharedStyles'
import {theme} from '../theme'

export type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  heading?: string
  description?: string
  items: FAQItem[]
  allowMultipleOpen?: boolean
}

const faqContainerStyles: CSSProperties = {
  ...baseSectionStyles,
}

const faqListStyles: CSSProperties = {
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

const faqItemStyles: CSSProperties = {
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '16px',
  backgroundColor: theme.colors.surface,
  overflow: 'hidden',
  transition: 'all 200ms ease',
}

const faqItemExpandedStyles: CSSProperties = {
  boxShadow: theme.shadows.card,
  borderColor: theme.colors.accent,
}

const faqButtonStyles: CSSProperties = {
  width: '100%',
  padding: '20px 24px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'left',
  fontFamily: theme.fonts.body,
  fontSize: '1.1rem',
  fontWeight: 600,
  color: theme.colors.textPrimary,
  transition: 'color 200ms ease',
}

const faqButtonHoverStyles: CSSProperties = {
  color: theme.colors.accent,
}

const faqIconStyles: CSSProperties = {
  fontSize: '1.5rem',
  color: theme.colors.accent,
  transition: 'transform 200ms ease',
  flexShrink: 0,
  marginLeft: '16px',
}

const faqIconExpandedStyles: CSSProperties = {
  transform: 'rotate(180deg)',
}

const faqAnswerStyles: CSSProperties = {
  padding: '0 24px 20px 24px',
  color: theme.colors.textSecondary,
  lineHeight: 1.7,
  fontSize: '1rem',
  fontFamily: theme.fonts.body,
}

const faqAnswerInnerStyles: CSSProperties = {
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 300ms ease, padding 300ms ease',
}

const faqAnswerExpandedStyles: CSSProperties = {
  maxHeight: '500px',
  paddingTop: '8px',
}

type FAQItemComponentProps = {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

const FAQItemComponent: FC<FAQItemComponentProps> = ({item, isOpen, onToggle}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      style={{
        ...faqItemStyles,
        ...(isOpen ? faqItemExpandedStyles : {}),
      }}
    >
      <button
        style={{
          ...faqButtonStyles,
          ...(isHovered ? faqButtonHoverStyles : {}),
        }}
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span
          style={{
            ...faqIconStyles,
            ...(isOpen ? faqIconExpandedStyles : {}),
          }}
        >
          ▼
        </span>
      </button>
      <div
        style={{
          ...faqAnswerInnerStyles,
          ...(isOpen ? faqAnswerExpandedStyles : {}),
        }}
      >
        <div style={faqAnswerStyles}>{item.answer}</div>
      </div>
    </article>
  )
}

export const FAQSection: FC<FAQSectionProps> = ({
  heading = 'Frequently Asked Questions',
  description,
  items,
  allowMultipleOpen = false,
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        if (!allowMultipleOpen) {
          next.clear()
        }
        next.add(index)
      }
      return next
    })
  }

  return (
    <section style={faqContainerStyles}>
      <h2 style={headingStyles}>{heading}</h2>
      {description && <p style={subheadingStyles}>{description}</p>}
      <div style={faqListStyles}>
        {items.map((item, index) => (
          <FAQItemComponent
            key={index}
            item={item}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  )
}

