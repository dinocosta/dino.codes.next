import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

export async function getStaticPaths() {
  // TODO: Create function in `lib/sketches.js` which returns all the valid identifiers for the paths and
  // make sure that this function is used by both this page and the `pages/sketches.js` file so
  // that we always have both in sync.
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { sketchId: params.id },
  }
}

export default function Sketch({ sketchId }) {
  // Dynamically import the `.js` files by adding the identifier in the path to
  // the folder where the sketches should be saved, for example, with identifer
  // `1` the file that will be dynamically imported is the one in
  // `lib/sketches/1.js`.
  const Sketch = dynamic(() => import(`../../lib/sketches/${sketchId}`), {
    loading: () => <p>Loading...</p>,
  })

  return (
    <div>
      <Link href="/sketches" className="my-8 block">
        <Image
          src="/svg/left-arrow.svg"
          height="24"
          width="24"
          alt="Back button"
        />
      </Link>

      <Sketch />
    </div>
  )
}
