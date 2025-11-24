import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure/index'
import {locations, mainDocuments} from './presentation/resolve'

//Utils
import {projectId, dataset} from './utils/env'

//Plugins
import {media} from 'sanity-plugin-media-i18n'
import {languageFilter} from '@sanity/language-filter'
import {baseLanguage, supportedLanguages} from './utils/localization'
import {pageBuilderPreviewPlugin} from './plugins/pageBuilderPreview'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['home', 'about'])

export default defineConfig({
  name: 'default',
  title: 'Sanity Starter',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    media(),
    presentationTool({
      name: 'preview',
      title: 'Visual Editing',
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
      resolve: {
        locations,
        mainDocuments,
      },
    }),
    pageBuilderPreviewPlugin(),
    languageFilter({
      supportedLanguages,
      defaultLanguages: [baseLanguage?.id],
      filterField: (enclosingType, member, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(member.name),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },

  scheduledPublishing: {
    enabled: false,
  },

  tasks: {
    enabled: false,
  },
})
