import Image from 'next/image'
import Link from '@/components/link'
import PageTitle from '@/components/page_title'

const links = [
  { href: 'https://soundcloud.com/dino-costa-180136083', text: 'Soundcloud' },
  {
    href: 'https://www.goodreads.com/user/show/61047559-jo-o-costa',
    text: 'Goodreads',
  },
  { href: 'https://twitter.com/joaofcosta_', text: 'Twitter' },
  { href: 'https://github.com/joaofcosta', text: 'Github' },
]

export default function About() {
  return (
		<div>
      <PageTitle title="About" />

      <div className="mx-auto relative h-80 md:h-96 lg:h-112 max-w-lg">
        <Image
          fill
          src="/about.jpg"
					alt="dino"
          className="rounded-md object-cover"
        />
      </div>
      <br />
      <p className="py-2">Hi There!</p>
      <p className="py-2">
        My name is Dino and I’m a Software Engineer based in Lisbon, Portugal 🇵🇹
      </p>
      <p className="py-2">
        I’m currently working at{' '}
        <Link href="https://remote.com">
          Remote
        </Link>
        , but I’ve previously worked at{' '}
        <Link href="https://onfido.com">
          Onfido
        </Link>{' '}
        and{' '}
        <Link href="https://unbabel.com">
          Unbabel
        </Link>
        .
      </p>
      <p className="py-2">
        Although in my past experiences I’ve mainly worked with Python I’m now
        heavily invested in using Elixir, which I’ve been loving so far!
        <br />
        In my free time I do like to mess around with synthesizers and music
        related stuff, I also like to read and to surf when the time allows it.
      </p>
      <p className="py-2">
        Finally, I’m currently an Elixir mentor at{' '}
        <Link href="https://exercism.org">
          Exercism
        </Link>
        , which does help me to get better at explaining concepts and ideas to
        other people, it also forces me to reinforce some learnings because you
        want to make sure you’re not giving incorrect information to the people
        whose solution you’re reviewing! Overall it’s a very rewarding
        experience!
      </p>

      <h2 className="mt-4 block text-xl">Where to find me</h2>
      <p className="py-2">Feel free to find me in any of these platforms!</p>
			<ul className="ml-5 list-disc">
				{links.map(({ href, text }) => (
					<li key={`link-text`}>
						<Link href={href}>
							{text}
						</Link>
					</li>
				))}
			</ul>
		</div>
  )
}
