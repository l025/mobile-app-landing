import "@/styles/globals.css"
import { PageProvider } from "@/context/page-context"
import data from "@/../data/app.json"

export const metadata = {
  title: data.app.title,
  description: data.app.desc,
}

export default function RootLayout({ children }) {
  return (
    <html lang={data.style.lang} dir={data.style.dir}>
      <head>
        <link rel="shortcut icon" href={data.app.favicon} />
      </head>
      <body>
        <PageProvider>{children}</PageProvider>
      </body>
    </html>
  )
}
