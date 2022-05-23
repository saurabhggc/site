import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

const LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'GitHub', href: 'https://github.com/saurabhggc' },
  { name: 'Twitter', href: 'https://twitter.com/saurabh_ggc' },
]

const Header = () => {
  return (
    <header>
      <div
        className="
          mx-auto
          flex
          max-w-screen-lg
          flex-col
          items-center
          justify-between
          gap-4
          p-6
          md:flex-row
          md:p-10
        "
      >
        <Logo />

        <nav>
          <ul className="flex items-center justify-center gap-6 text-lg font-medium md:gap-8 md:text-xl">
            {LINKS.map(({ name, href }) => {
              const isLinkExternal = href.startsWith('http')

              return (
                <li key={href}>
                  {isLinkExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="my-underline hover:text-gray-700"
                    >
                      {name}
                    </a>
                  ) : (
                    <NavLink href={href}>{name}</NavLink>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

type LinkProps = { children: React.ReactNode; href: string }

const NavLink = ({ children, href }: LinkProps) => {
  const { pathname } = useRouter()
  const isActive = href === pathname || pathname.startsWith(`${href}/`)

  return (
    <Link href={href}>
      <a
        className={clsx(
          'my-underline hover:text-gray-700',
          isActive && 'active !text-accent'
        )}
      >
        {children}
      </a>
    </Link>
  )
}

const Logo = () => (
  <Link href="/">
    <a
      className="text-3xl font-bold tracking-tight hover:text-gray-700"
      style={{
        fontFeatureSettings: "'ss02'",
      }}
    >
      Saurabh
    </a>
  </Link>
)
