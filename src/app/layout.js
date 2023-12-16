import './globals.css'
import Providers from "@/app/providers";


export const metadata = {
  title: 'آموزشگاه ای تی سان',
  description: 'آموزشگاه باحال',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-theme="light">
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
