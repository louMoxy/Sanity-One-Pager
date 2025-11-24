import type {FC, ReactNode} from 'react'
import {createElement} from 'react'
import {HeroSection} from './sections/HeroSection'
import {AboutSection, type AboutSectionData} from './sections/AboutSection'
import {ServicesSection} from './sections/ServicesSection'
import {ColumnsSection} from './sections/ColumnsSection'
import {FAQSection} from './sections/FAQSection'
import {theme} from './theme'
import type {CSSProperties} from 'react'
import {buildImageUrl} from '../utils/imageUrl'

type Block = {
  _type: string
  _key: string
  [key: string]: any
}

type PageBuilderProps = {
  sections?: Block[]
}

const mainStyles: CSSProperties = {
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  padding: '40px 0 80px',
}

const renderBlock = (block: Block, index: number): ReactNode | null => {
  switch (block._type) {
    case 'heroBlock': {
      const imageUrl = block.image?.asset?._ref
        ? buildImageUrl(block.image.asset._ref, 1200)
        : null
      return createElement(
        'section',
        {
          key: block._key || `hero-${index}`,
          style: {
            ...mainStyles,
            background: imageUrl
              ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageUrl})`
              : theme.colors.background,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            textAlign: 'center',
            padding: '120px 24px',
          },
        },
        createElement('h1', {style: {fontSize: '3rem', marginBottom: '16px'}}, block.headline),
        block.subtext &&
          createElement('p', {style: {fontSize: '1.25rem', marginBottom: '32px'}}, block.subtext),
        createElement(
          'a',
          {
            href: block.ctaHref || '#cta',
            style: {
              padding: '14px 28px',
              backgroundColor: theme.colors.accent,
              color: '#ffffff',
              borderRadius: '999px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: 600,
            },
          },
          block.ctaLabel || 'Book a Call',
        ),
        block.ctaSubtext &&
          createElement(
            'p',
            {style: {marginTop: '12px', fontSize: '0.9rem', opacity: 0.9}},
            block.ctaSubtext,
          ),
      )
    }

    case 'aboutBlock': {
      const aboutData: AboutSectionData = {
        label: block.label,
        heading: block.heading,
        description: block.description,
        belief: block.belief,
        credibility: block.credibility,
        image: block.image,
      }
      return createElement(AboutSection, {
        key: block._key || `about-${index}`,
        data: aboutData,
      })
    }

    case 'servicesBlock': {
      const services = (block.services || []).map((service: any) => ({
        name: service.name,
        description: service.description,
        bullets: service.bullets || [],
        priceLabel: service.priceLabel,
        badge: service.badge,
      }))
      return createElement(ServicesSection, {
        key: block._key || `services-${index}`,
        heading: block.heading,
        description: block.description,
        services,
      })
    }

    case 'columnsBlock': {
      const columns = (block.columns || []).map((col: any) => ({
        title: col.title,
        description: col.description,
        image: col.image?.asset?._ref ? {src: buildImageUrl(col.image.asset._ref, 600)} : undefined,
        emoji: col.emoji,
        button: col.button,
        variant: col.variant || 'bordered',
        align: col.align || 'left',
      }))
      return createElement(ColumnsSection, {
        key: block._key || `columns-${index}`,
        heading: block.heading,
        description: block.description,
        columns,
        columnsPerRow: block.columnsPerRow || 3,
      })
    }

    case 'faqBlock': {
      const items = (block.items || []).map((item: any) => ({
        question: item.question,
        answer: item.answer,
      }))
      return createElement(FAQSection, {
        key: block._key || `faq-${index}`,
        heading: block.heading,
        description: block.description,
        items,
        allowMultipleOpen: block.allowMultipleOpen || false,
      })
    }

    default:
      console.warn(`Unknown block type: ${block._type}`)
      return null
  }
}

export const PageBuilder: FC<PageBuilderProps> = ({sections = []}) => {
  const renderedSections = sections.map((block, index) => renderBlock(block, index)).filter(Boolean)

  return createElement('main', {style: mainStyles}, ...renderedSections)
}

