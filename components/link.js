import * as NextLink from 'next/link'

export default function Link({ children, href }) {
	return <NextLink className="text-orange-500 dark:text-yellow-300" href={href}>{children}</NextLink>
}
