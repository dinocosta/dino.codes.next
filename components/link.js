import * as NextLink from 'next/link'

export default function Link({ children, href }) {
  return (
    <NextLink
      className="hover:text-accent-light hover:dark:text-accent-dark decoration-accent-light dark:decoration-accent-dark underline decoration-wavy"
      href={href}
    >
      {children}
    </NextLink>
  )
}
