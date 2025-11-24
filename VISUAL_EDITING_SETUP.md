# Visual Editing Setup Guide

This project is configured for Sanity's Visual Editing feature. Visual Editing allows content creators to see their changes live and edit content directly from the webpage.

## Current Setup

The Studio is already configured with:
- ✅ Presentation Tool enabled
- ✅ Resolvers configured for Page Builder documents
- ✅ Preview URL resolver set up

## To Enable Visual Editing with Next.js

When you're ready to connect your Next.js frontend, follow these steps:

### 1. Install Required Dependencies

```bash
npm install next-sanity @sanity/visual-editing
```

### 2. Configure Your Sanity Client

In your Next.js app, create a client that enables Content Source Maps:

```typescript
// lib/sanity/client.ts
import { createClient } from 'next-sanity'
import { projectId, dataset } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
})
```

### 3. Add Visual Editing Overlay

In your Next.js app layout or page component:

```typescript
// app/layout.tsx or pages/_app.tsx
import { VisualEditing } from '@sanity/visual-editing'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <VisualEditing />}
      </body>
    </html>
  )
}
```

### 4. Fetch Content with Content Source Maps

When fetching content, make sure to include Content Source Maps:

```typescript
// app/[slug]/page.tsx
import { client } from '@/lib/sanity/client'

export default async function Page({ params }) {
  const page = await client.fetch(
    `*[_type == "pageBuilder" && slug.current == $slug][0]`,
    { slug: params.slug },
    {
      next: { revalidate: 60 },
      perspective: 'published',
      stega: true,
    }
  )

  return <PageBuilder sections={page.sections} />
}
```

### 5. Set Preview URL in Studio

In your `.env` file, set the preview URL to your Next.js app:

```bash
SANITY_STUDIO_PREVIEW_URL="http://localhost:3000"
```

## Features Available

Once set up, content creators can:

- **Live Preview**: See draft content immediately as they edit
- **Click-to-edit**: Click on elements in the preview to jump to the right field in Studio
- **Drag and drop**: Hold `shift` to rearrange page elements
- **Global Preview**: Preview content across the whole site

## Resources

- [Sanity Visual Editing Docs](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)
- [Next.js Visual Editing Guide](https://www.sanity.io/docs/visual-editing/next-js-app-router)
- [Content Source Maps](https://www.sanity.io/docs/visual-editing/content-source-maps)

