import { ReactNode } from "react"
import { Head } from "blitz"
import MainAppBar from "./AppBar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title = "Todo app", children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "todo"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <MainAppBar title={title} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
