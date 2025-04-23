import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <head>
        <title>My Custom AI Assistant</title>
        <meta name="description" content="A powerful AI assistant customized for your needs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full font-['Inter',sans-serif]">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px] flex flex-col">
            {children}
            <footer className="custom-footer">
              <p>© 2025 My Custom Chat - Powered by Dify</p>
              <p className="mt-1">
                <a href="https://example.com/privacy" className="text-purple-600 hover:text-purple-800">Privacy Policy</a>
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
