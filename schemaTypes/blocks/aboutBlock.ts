import {defineType, defineField} from 'sanity'

export const aboutBlock = defineType({
  name: 'aboutBlock',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      initialValue: 'About',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'belief',
      title: 'Belief Statement',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'credibility',
      title: 'Credibility Snapshot',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'About Section',
        subtitle: subtitle ? subtitle.substring(0, 60) + '...' : 'No description',
      }
    },
  },
})

