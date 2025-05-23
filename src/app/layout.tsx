import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import theme from '@/theme/theme';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'ArrowFlicks',
  description: 'ArrowFlicks website',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} style={{ height: '100%' }}>
      <head>
        <ColorSchemeScript />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <GoogleAnalytics gaId="G-0JQDYRL8H6" />
      </head>
      <body style={{ height: '100%' }}>
        <MantineProvider withGlobalClasses theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
