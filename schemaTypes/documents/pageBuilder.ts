import {defineType, defineField} from 'sanity'

// Import all block types
import {heroBlock} from '../blocks/heroBlock'
import {aboutBlock} from '../blocks/aboutBlock'
import {servicesBlock} from '../blocks/servicesBlock'
import {columnsBlock} from '../blocks/columnsBlock'
import {faqBlock} from '../blocks/faqBlock'

export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type: 'heroBlock'},
        {type: 'aboutBlock'},
        {type: 'servicesBlock'},
        {type: 'columnsBlock'},
        {type: 'faqBlock'},
        // Add more block types here as you create them
      ],
      description: 'Add, remove, and reorder sections to build your page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title: title || 'Untitled Page',
        subtitle: slug ? `/${slug}` : 'No slug',
      }
    },
  },
})

