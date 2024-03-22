import "../globals.css"
import { Tektur } from "next/font/google";
const inter = Tektur({ subsets: ["latin"] });

export const metadata = {
  title: 'Feed pet | Login',
  description: 'Login your account on feed pet',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
