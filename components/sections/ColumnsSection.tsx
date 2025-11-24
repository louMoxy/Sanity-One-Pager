import type {CSSProperties, FC} from 'react'
import {
  baseSectionStyles,
  buttonStyles,
  headingStyles,
  mutedTextStyles,
  subheadingStyles,
} from './sharedStyles'
import {theme} from '../theme'

type ColumnButton = {
  label: string
  href: string
}

type ColumnImage = {
  src: string
  alt?: string
}

type ColumnCardVariant = 'bordered' | 'shadow' | 'plain' | 'outline'

type ColumnConfig = {
  title: string
  description?: string
  emoji?: string
  image?: ColumnImage
  button?: ColumnButton
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
  variant?: ColumnCardVariant
}

type ColumnsSectionProps = {
  eyebrow?: string
  heading?: string
  description?: string
  columns: ColumnConfig[]
  columnsPerRow?: 1 | 2 | 3
  defaultVariant?: ColumnCardVariant
  background?: 'surface' | 'muted' | 'transparent'
  gap?: 'tight' | 'normal' | 'loose'
  align?: 'left' | 'center'
}

const gapMap: Record<NonNullable<ColumnsSectionProps['gap']>, string> = {
  tight: '16px',
  normal: '24px',
  loose: '40px',
}

const paddingMap: Record<'sm' | 'md' | 'lg', string> = {
  sm: '16px',
  md: '24px',
  lg: '32px',
}

const backgroundMap: Record<NonNullable<ColumnsSectionProps['background']>, string> = {
  surface: theme.colors.surface,
  muted: theme.colors.surfaceMuted,
  transparent: 'transparent',
}

const variantStyles: Record<ColumnCardVariant, CSSProperties> = {
  bordered: {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: '24px',
    boxShadow: 'none',
  },
  shadow: {
    backgroundColor: theme.colors.surface,
    border: '1px solid transparent',
    borderRadius: '24px',
    boxShadow: theme.shadows.card,
  },
  plain: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0px',
    boxShadow: 'none',
    padding: '0px',
  },
  outline: {
    backgroundColor: theme.colors.surfaceMuted,
    border: `2px dashed ${theme.colors.borderStrong}`,
    borderRadius: '28px',
    boxShadow: 'none',
  },
}

const getColumnAlignment = (align?: 'left' | 'center'): CSSProperties =>
  align === 'center'
    ? {
        textAlign: 'center',
        alignItems: 'center',
      }
    : {
        textAlign: 'left',
        alignItems: 'flex-start',
      }

const renderMedia = (column: ColumnConfig) => {
  if (column.image) {
    return (
      <img
        src={column.image.src}
        alt={column.image.alt ?? ''}
        style={{
          width: '100%',
          borderRadius: '18px',
          marginBottom: '16px',
          objectFit: 'cover',
          maxHeight: '220px',
        }}
      />
    )
  }

  if (column.emoji) {
    return (
      <div
        style={{
          fontSize: '2.5rem',
          marginBottom: '16px',
        }}
      >
        {column.emoji}
      </div>
    )
  }

  return null
}

export const ColumnsSection: FC<ColumnsSectionProps> = ({
  eyebrow = 'Flexible layout',
  heading = 'Modular columns for any use-case',
  description = 'Mix and match cards with images, buttons, emoji, borders, or shadows.',
  columns,
  columnsPerRow = 3,
  defaultVariant = 'bordered',
  background = 'transparent',
  gap = 'normal',
  align = 'left',
}) => {
  const limitedColumns = Math.min(Math.max(columnsPerRow, 1), 3)
  const sectionBackground = backgroundMap[background]
  const sectionAlignment = align === 'center' ? 'center' : 'flex-start'

  return (
    <section
      style={{
        ...baseSectionStyles,
        backgroundColor: sectionBackground,
        borderRadius: sectionBackground === 'transparent' ? '0px' : '32px',
      }}
    >
      <div style={{display: 'flex', flexDirection: 'column', alignItems: sectionAlignment}}>
        <span
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: theme.colors.textSecondary,
            marginBottom: '8px',
          }}
        >
          {eyebrow}
        </span>
        <h2 style={{...headingStyles, textAlign: align}}>{heading}</h2>
        <p style={{...subheadingStyles, maxWidth: '640px', textAlign: align}}>{description}</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${limitedColumns}, minmax(0, 1fr))`,
          gap: gapMap[gap],
          marginTop: '40px',
        }}
      >
        {columns.map((column, index) => {
          const variant = column.variant ?? defaultVariant
          const columnPadding = paddingMap[column.size ?? 'md']
          const cardBaseStyles = variantStyles[variant]
          const alignmentStyles = getColumnAlignment(column.align ?? align)

          const cardStyle: CSSProperties =
            variant === 'plain'
              ? {...alignmentStyles}
              : {
                  padding: columnPadding,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  ...alignmentStyles,
                  ...cardBaseStyles,
                }

          return (
            <article key={`${column.title}-${index}`} style={cardStyle}>
              {renderMedia(column)}
              <h3
                style={{
                  fontSize: '1.25rem',
                  margin: '0',
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.textPrimary,
                }}
              >
                {column.title}
              </h3>
              {column.description ? (
                <p style={{...mutedTextStyles, margin: 0, color: theme.colors.textSecondary}}>
                  {column.description}
                </p>
              ) : null}
              {column.button ? (
                <a
                  href={column.button.href}
                  style={{
                    ...buttonStyles,
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.actionText,
                    width: column.align === 'center' ? 'auto' : 'fit-content',
                  }}
                >
                  {column.button.label}
                </a>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ColumnsSection

