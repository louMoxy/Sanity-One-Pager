import {defineType, defineField} from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'FAQ Item',
                subtitle: subtitle ? subtitle.substring(0, 60) + '...' : 'No answer',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'allowMultipleOpen',
      title: 'Allow Multiple Items Open',
      type: 'boolean',
      initialValue: false,
      description: 'If enabled, multiple FAQ items can be open at once',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'FAQ Section',
      }
    },
  },
})

