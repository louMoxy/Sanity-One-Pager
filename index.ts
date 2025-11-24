import type {CSSProperties, FC, ReactNode} from 'react'
import {createElement} from 'react'

import {AboutSection, type AboutSectionData} from './components/sections/AboutSection'
import {FinalCtaSection} from './components/sections/FinalCtaSection'
import {Footer} from './components/sections/Footer'
import {HeroSection} from './components/sections/HeroSection'
import {PdfChecklistCta} from './components/sections/PdfChecklistCta'
import {ProcessSection} from './components/sections/ProcessSection'
import {SectionDivider} from './components/sections/SectionDivider'
import {ServicesSection} from './components/sections/ServicesSection'
import {TestimonialsSection} from './components/sections/TestimonialsSection'
import {WhyChooseMeSection} from './components/sections/WhyChooseMeSection'
import {ColumnsSection} from './components/sections/ColumnsSection'
import {FAQSection} from './components/sections/FAQSection'
import {ImageGallerySection} from './components/sections/ImageGallerySection'
import {ScrollingMarqueeSection} from './components/sections/ScrollingMarqueeSection'
import {ShowcaseHeroSection} from './components/sections/ShowcaseHeroSection'
import {theme} from './components/theme'

const mainStyles: CSSProperties = {
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.body,
  padding: '40px 0 80px',
}

const columnExamples = [
  {
    title: 'Kickstart Call',
    emoji: '✨',
    description: 'A focused 60-minute clarity session with a tangible action plan.',
    button: {label: 'Book now', href: '#call'},
    variant: 'shadow' as const,
  },
  {
    title: 'Systems Setup',
    image: {src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&q=80'},
    description: 'We co-build the routines, dashboards, and automations that keep you consistent.',
    button: {label: 'See workflow', href: '#systems'},
    variant: 'bordered' as const,
  },
  {
    title: 'VIP Weekend',
    emoji: '🚀',
    description: 'Two intense days to reset habits, structure, and accountability.',
    button: {label: 'Reserve a spot', href: '#vip'},
    variant: 'outline' as const,
    align: 'center' as const,
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    alt: 'Morning mindset session',
    caption: 'Morning mindset session',
    tag: 'Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
    alt: 'Client retreat space',
    caption: 'Client retreat space',
    tag: 'Retreat',
  },
  {
    src: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=700&q=80',
    alt: 'Notebook flat lay',
    caption: 'Weekly planning ritual',
  },
  {
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=700&q=80',
    alt: 'Wellness tools',
    caption: 'Tools & frameworks',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80',
    alt: 'Workshop snapshot',
    caption: 'Live workshop',
    tag: 'Live',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
    alt: 'Home office calm',
    caption: 'Home office calm',
  },
]

const marqueeItems = [
  {
    title: '“I finally feel in control of my week.”',
    description: '– Priya, product lead & mum of 2',
    emoji: '🌿',
  },
  {
    title: '“Systems without shame. Exactly what I needed.”',
    description: '– Cam, creative director',
    emoji: '✨',
  },
  {
    title: 'No fluff, just proven frameworks that scale with you.',
    emoji: '⚡️',
  },
  {
    title: '“Within 30 days, mornings went from chaos to calm.”',
    description: '– Shannon, founder',
    emoji: '🌅',
  },
]

const showcaseImage =
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80'

type SinglePageProps = {
  aboutData?: AboutSectionData
}

const createSectionComponents = (aboutData?: AboutSectionData): ReactNode[] => [
  createElement(HeroSection, {key: 'hero'}),
  createElement(AboutSection, {key: 'about', data: aboutData}),
  createElement(ServicesSection, {key: 'services'}),
  createElement(ColumnsSection, {
    key: 'columns',
    columns: columnExamples,
    columnsPerRow: 3,
    heading: 'Build your own stack',
    description: 'Pick the format that fits how you like to work — cards can show emoji, photos, or sit plain.',
    gap: 'loose',
    background: 'surface',
    defaultVariant: 'bordered',
  }),
  createElement(ImageGallerySection, {
    key: 'gallery',
    images: galleryImages,
    heading: 'Client snapshots',
    description: 'Showcase atmosphere, behind-the-scenes moments, or proof shots. Adjust columns per device for full control.',
    columns: {mobile: 1, tablet: 2, desktop: 3},
    gap: 'regular',
    rounded: 'lg',
  }),
  createElement(WhyChooseMeSection, {key: 'why'}),
  createElement(TestimonialsSection, {key: 'testimonials'}),
  createElement(ProcessSection, {key: 'process'}),
  createElement(FAQSection, {
    key: 'faq',
    heading: 'Common Questions',
    description: 'Everything you need to know before we start working together.',
    items: [
      {
        question: 'How long does a typical coaching engagement last?',
        answer:
          'Most clients work with me for 3-6 months, though some prefer ongoing support. We start with a free intro call to assess fit, then design a plan that matches your goals and timeline. You can pause or adjust at any time.',
      },
      {
        question: 'What makes your approach different?',
        answer:
          'I blend behavioural science with real-world empathy. No rigid templates or one-size-fits-all programs. Every plan is tailored to your life, your schedule, and what actually motivates you. Plus, I keep it practical — you get tools you can use immediately.',
      },
      {
        question: 'Do you work with people outside the UK?',
        answer:
          'Yes! I work with clients globally via video calls. Time zones are flexible, and all sessions are recorded so you can revisit them anytime.',
      },
      {
        question: 'What if I need to reschedule or cancel?',
        answer:
          'Life happens. You can reschedule up to 24 hours before a session with no penalty. For cancellations, we can discuss options based on your package. I aim to be flexible and supportive, not rigid.',
      },
    ],
  }),
  createElement(ScrollingMarqueeSection, {
    key: 'marquee',
    heading: 'Client notes & proof points',
    description: 'Let social proof, philosophies, or service pillars loop endlessly.',
    items: marqueeItems,
    variant: 'card',
    speedSeconds: 28,
    background: 'surface',
  }),
  createElement(ShowcaseHeroSection, {
    key: 'showcase-hero',
    eyebrow: 'Website-in-a-week',
    heading: 'Turn your offers into a scroll-stopping site in just 7 days.',
    description:
      'Strategy, copy prompts, visuals, and development are handled start to finish while you stay focused on client work.',
    imageSrc: showcaseImage,
    imageAlt: 'Laptop and moodboard showing custom landing page',
    primaryCta: {label: 'Book the intensive', href: '#book-intensive'},
    secondaryCta: {label: 'Peek the process', href: '#process'},
    alignment: 'image-right',
  }),
  createElement(SectionDivider, {key: 'divider'}),
  createElement(PdfChecklistCta, {key: 'pdf'}),
  createElement(FinalCtaSection, {key: 'cta'}),
  createElement(Footer, {key: 'footer'}),
]

export const SinglePage: FC<SinglePageProps> = ({aboutData}) =>
  createElement('main', {style: mainStyles}, ...createSectionComponents(aboutData))

export default SinglePage

