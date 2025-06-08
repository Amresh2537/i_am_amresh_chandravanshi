import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amresh Kumar - Business Automation Expert & Data Analyst',
  description: 'Freelancer specializing in business automation, data analysis, and Google Workspace development. Transform your manual tasks into streamlined digital workflows.',
  keywords: 'Business Automation, Data Analyst, Google Workspace, Next.js Developer, Freelancer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}
