import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import BaseLayout from './src/layouts/BaseLayout'
import { ReactNode, useContext } from 'react'
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material'
import { withEmotionCache } from '@emotion/react'
import theme from './src/theme'
import ClientStyleContext from './src/context/ClientStyleContext'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

interface DocumentProps {
  children: ReactNode
  title?: string
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext)

    useEnhancedEffect(() => {
      emotionCache.sheet.container = document.head
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      clientStyleData.reset()
    }, [])

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  },
)

export default function App() {
  return (
    <Document>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </Document>
  )
}
