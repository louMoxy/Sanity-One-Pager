import {projectId, dataset} from './env'

/**
 * Builds a Sanity CDN image URL from an image reference
 * Handles both _ref format (e.g., "image-abc123-1920x1080-jpg") and direct IDs
 */
export const buildImageUrl = (imageRef: string, width?: number, height?: number): string => {
  if (!projectId || !dataset || !imageRef) {
    return ''
  }

  // Sanity image references are in format: image-{id}-{dimensions}-{format}
  // Extract the parts
  const parts = imageRef.replace('image-', '').split('-')
  const imageId = parts[0]
  
  // Try to determine format from the reference, default to jpg
  let format = 'jpg'
  if (imageRef.includes('-png')) format = 'png'
  else if (imageRef.includes('-webp')) format = 'webp'
  else if (imageRef.includes('-gif')) format = 'gif'

  let url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}.${format}`

  // Add query parameters for width/height if specified
  if (width || height) {
    const params = new URLSearchParams()
    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    url += `?${params.toString()}`
  }

  return url
}

