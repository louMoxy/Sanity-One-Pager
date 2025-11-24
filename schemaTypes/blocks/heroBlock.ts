import {defineType, defineField} from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Book a Call',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '#cta',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Subtext (optional)',
      type: 'string',
      description: 'Small text under the button (e.g., "Free 20-minute intro call")',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subtext',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || 'No subtext',
      }
    },
  },
})

