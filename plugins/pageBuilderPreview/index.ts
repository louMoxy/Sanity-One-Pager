import {definePlugin} from 'sanity'
import {PageBuilderTool} from './PageBuilderTool'

export const pageBuilderPreviewPlugin = definePlugin({
  name: 'page-builder-preview',
  tools: [
    {
      name: 'pageBuilder',
      title: 'Page Builder Preview',
      component: PageBuilderTool,
    },
  ],
})

