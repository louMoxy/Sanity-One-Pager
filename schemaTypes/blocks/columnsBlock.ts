import {defineType, defineField} from 'sanity'

export const columnsBlock = defineType({
  name: 'columnsBlock',
  title: 'Columns Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'columnsPerRow',
      title: 'Columns Per Row',
      type: 'number',
      initialValue: 3,
      validation: (rule) => rule.min(1).max(3),
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'emoji',
              title: 'Emoji',
              type: 'string',
              description: 'Alternative to image',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'variant',
              title: 'Card Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Bordered', value: 'bordered'},
                  {title: 'Shadow', value: 'shadow'},
                  {title: 'Outline', value: 'outline'},
                  {title: 'Plain', value: 'plain'},
                ],
              },
              initialValue: 'bordered',
            }),
            defineField({
              name: 'align',
              title: 'Text Alignment',
              type: 'string',
              options: {
                list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
                ],
              },
              initialValue: 'left',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
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
        title: title || 'Columns Section',
      }
    },
  },
})

