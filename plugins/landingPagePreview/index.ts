import {definePlugin} from 'sanity'
import {LandingPageTool} from './LandingPageTool'

export const landingPagePreviewPlugin = definePlugin({
  name: 'landing-page-preview',
  tools: [
    {
      name: 'landingPage',
      title: 'Landing Page',
      component: LandingPageTool,
    },
  ],
})

