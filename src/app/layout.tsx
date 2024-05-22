import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minerva-ChatRadio',
  description: 'Minerva-ChatRadio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}