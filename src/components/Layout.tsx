import Header from './Header'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
export default Layout

export type LayoutProps = {
  children: React.ReactNode
}
