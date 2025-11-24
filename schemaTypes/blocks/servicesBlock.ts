import {defineType, defineField} from 'sanity'

export const servicesBlock = defineType({
  name: 'servicesBlock',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Ways we can work together',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Service Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'bullets',
              title: 'Key Points',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              name: 'priceLabel',
              title: 'Price Label',
              type: 'string',
              description: 'e.g., "From £150/month" or "£90 flat"',
            }),
            defineField({
              name: 'badge',
              title: 'Badge (optional)',
              type: 'string',
              description: 'Optional badge text (e.g., "Flagship", "Premium")',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'priceLabel',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Services Section',
      }
    },
  },
})

