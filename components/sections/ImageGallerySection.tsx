import type {FC} from 'react'
import {useId, useMemo} from 'react'
import {baseSectionStyles, headingStyles, mutedTextStyles, subheadingStyles} from './sharedStyles'
import {theme} from '../theme'

type GalleryImage = {
  src: string
  alt?: string
  caption?: string
  tag?: string
}

type ColumnConfig = {
  mobile?: number
  tablet?: number
  desktop?: number
}

type ImageGallerySectionProps = {
  heading?: string
  description?: string
  images: GalleryImage[]
  columns?: ColumnConfig
  gap?: 'tight' | 'regular' | 'spacious'
  rounded?: 'sm' | 'md' | 'lg'
  showCaptions?: boolean
}

const gapMap: Record<NonNullable<ImageGallerySectionProps['gap']>, string> = {
  tight: '12px',
  regular: '20px',
  spacious: '32px',
}

const radiusMap: Record<NonNullable<ImageGallerySectionProps['rounded']>, string> = {
  sm: '12px',
  md: '18px',
  lg: '26px',
}

const defaultColumns: Required<ColumnConfig> = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
}

export const ImageGallerySection: FC<ImageGallerySectionProps> = ({
  heading = 'Recent work',
  description = 'Drop in lifestyle shots, proof photos, templates, or mockups. Choose how many columns show on each device size.',
  images,
  columns = defaultColumns,
  gap = 'regular',
  rounded = 'md',
  showCaptions = true,
}) => {
  const id = useId().replace(/:/g, '')
  const className = `gallery-${id}`

  const mergedColumns = {...defaultColumns, ...columns}

  const galleryStyles = useMemo(() => {
    return `
      .${className} {
        display: grid;
        gap: ${gapMap[gap]};
        grid-template-columns: repeat(${mergedColumns.mobile}, minmax(0, 1fr));
      }

      @media (min-width: 640px) {
        .${className} {
          grid-template-columns: repeat(${mergedColumns.tablet}, minmax(0, 1fr));
        }
      }

      @media (min-width: 1024px) {
        .${className} {
          grid-template-columns: repeat(${mergedColumns.desktop}, minmax(0, 1fr));
        }
      }
    `
  }, [className, gap, mergedColumns.desktop, mergedColumns.mobile, mergedColumns.tablet])

  return (
    <section
      style={{
        ...baseSectionStyles,
        backgroundColor: theme.colors.surface,
        borderRadius: '32px',
      }}
    >
      <style>{galleryStyles}</style>
      <div style={{marginBottom: '32px'}}>
        <h2 style={headingStyles}>{heading}</h2>
        {description && <p style={{...subheadingStyles, maxWidth: '640px'}}>{description}</p>}
      </div>

      <div className={className}>
        {images.map(image => (
          <figure
            key={`${image.src}-${image.alt ?? ''}`}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: radiusMap[rounded],
              border: `1px solid ${theme.colors.border}`,
              boxShadow: theme.shadows.card,
              backgroundColor: theme.colors.surface,
            }}
          >
            {image.tag ? (
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: theme.colors.badgeBg,
                  border: `1px solid ${theme.colors.badgeBorder}`,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  color: theme.colors.textSecondary,
                }}
              >
                {image.tag}
              </span>
            ) : null}
            <img
              src={image.src}
              alt={image.alt ?? ''}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                aspectRatio: '4 / 5',
              }}
            />
            {showCaptions && (image.caption || image.alt) ? (
              <figcaption
                style={{
                  padding: '16px 20px',
                  borderTop: `1px solid ${theme.colors.border}`,
                  backgroundColor: theme.colors.surfaceMuted,
                }}
              >
                <p style={{margin: 0, fontWeight: 600}}>{image.caption ?? image.alt}</p>
                {image.alt ? <p style={{...mutedTextStyles, margin: '4px 0 0'}}>{image.alt}</p> : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ImageGallerySection

