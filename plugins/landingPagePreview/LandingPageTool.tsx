import type {CSSProperties, FC} from 'react'
import {useEffect, useState} from 'react'
import {useClient} from 'sanity'
import {SinglePage} from '../../index'
import {theme} from '../../components/theme'
import type {AboutSectionData} from '../../components/sections/AboutSection'

const containerStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  backgroundColor: theme.colors.background,
}

export const LandingPageTool: FC = () => {
  const client = useClient({apiVersion: '2024-01-01'})
  const [aboutData, setAboutData] = useState<AboutSectionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await client.fetch<AboutSectionData | null>(
          `*[_type == "about"][0]`,
        )
        setAboutData(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAboutData()

    // Subscribe to changes
    const subscription = client
      .listen(`*[_type == "about"][0]`)
      .subscribe((update) => {
        if (update.result) {
          setAboutData(update.result as AboutSectionData)
        }
      })

    return () => subscription.unsubscribe()
  }, [client])

  return (
    <div style={containerStyles}>
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
        <SinglePage aboutData={aboutData || undefined} />
      )}
    </div>
  )
}

