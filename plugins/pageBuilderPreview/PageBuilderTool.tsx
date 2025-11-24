import type {CSSProperties, FC} from 'react'
import {useEffect, useState} from 'react'
import {useClient} from 'sanity'
import {PageBuilder} from '../../components/PageBuilder'
import {theme} from '../../components/theme'

const containerStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  backgroundColor: theme.colors.background,
}

type PageBuilderData = {
  sections?: any[]
}

export const PageBuilderTool: FC = () => {
  const client = useClient({apiVersion: '2024-01-01'})
  const [pageData, setPageData] = useState<PageBuilderData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null)
  const [availablePages, setAvailablePages] = useState<Array<{_id: string; title: string}>>([])

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const pages = await client.fetch<Array<{_id: string; title: string}>>(
          `*[_type == "pageBuilder"]{_id, title}`,
        )
        setAvailablePages(pages)
        if (pages.length > 0 && !selectedPageId) {
          setSelectedPageId(pages[0]._id)
        }
      } catch (error) {
        console.error('Error fetching pages:', error)
      }
    }

    fetchPages()
  }, [client, selectedPageId])

  useEffect(() => {
    if (!selectedPageId) return

    const fetchPageData = async () => {
      setIsLoading(true)
      try {
        const data = await client.fetch<PageBuilderData>(
          `*[_type == "pageBuilder" && _id == $id][0]{sections}`,
          {id: selectedPageId},
        )
        setPageData(data)
      } catch (error) {
        console.error('Error fetching page data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPageData()

    // Subscribe to changes
    const subscription = client
      .listen(`*[_type == "pageBuilder" && _id == $id][0]{sections}`, {id: selectedPageId})
      .subscribe((update) => {
        if (update.result) {
          setPageData(update.result as PageBuilderData)
        }
      })

    return () => subscription.unsubscribe()
  }, [client, selectedPageId])

  if (availablePages.length === 0) {
    return (
      <div style={containerStyles}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flexDirection: 'column',
            gap: '16px',
            color: theme.colors.textSecondary,
            padding: '40px',
          }}
        >
          <p style={{fontSize: '1.1rem', fontWeight: 600}}>No Page Builder pages found</p>
          <p style={{textAlign: 'center', maxWidth: '400px'}}>
            Create a new "Page Builder" document in the Content section to start building your page
            with blocks.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={containerStyles}>
      {availablePages.length > 1 && (
        <div
          style={{
            padding: '16px 24px',
            borderBottom: `1px solid ${theme.colors.border}`,
            backgroundColor: theme.colors.surface,
          }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.9rem',
              color: theme.colors.textSecondary,
            }}
          >
            <span>View Page:</span>
            <select
              value={selectedPageId || ''}
              onChange={(e) => setSelectedPageId(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.surface,
                color: theme.colors.textPrimary,
                fontFamily: theme.fonts.body,
                fontSize: '0.9rem',
              }}
            >
              {availablePages.map((page) => (
                <option key={page._id} value={page._id}>
                  {page.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: theme.colors.textSecondary,
          }}
        >
          Loading...
        </div>
      ) : (
        <PageBuilder sections={pageData?.sections || []} />
      )}
    </div>
  )
}

