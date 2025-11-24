import {createClient} from '@sanity/client'
import {projectId, dataset} from './env'

export const sanityClient = createClient({
  projectId: projectId || '',
  dataset: dataset || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

