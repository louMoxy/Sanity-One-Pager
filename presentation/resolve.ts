import {defineDocuments, defineLocations} from 'sanity/presentation'

export const locations = {
  pageBuilder: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled Page',
          href: doc?.slug ? `/${doc.slug}` : '/',
        },
      ],
    }),
  }),
}

export const mainDocuments = defineDocuments([
  {
    route: '/:slug',
    filter: `_type == "pageBuilder" && slug.current == $slug`,
  },
  {
    route: '/',
    filter: `_type == "pageBuilder" && slug.current == "home"`,
  },
])
