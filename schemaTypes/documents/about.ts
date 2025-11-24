import {defineType, defineField} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Small label text above the heading (e.g., "About")',
      initialValue: 'About',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description paragraph',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'belief',
      title: 'Belief Statement',
      type: 'text',
      description: 'Personal belief statement (e.g., "I believe...")',
      rows: 2,
    }),
    defineField({
      name: 'credibility',
      title: 'Credibility Snapshot',
      type: 'string',
      description: 'Credibility line (e.g., "ICF Certified · 8+ years coaching")',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional image for the about section',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Section',
      }
    },
  },
})

