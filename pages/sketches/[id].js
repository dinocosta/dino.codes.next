import Layout from '@/components/layout'
import dynamic from 'next/dynamic'
import { getSketchesData } from '@/lib/sketches'

export async function getStaticPaths() {
  const sketchesData = await getSketchesData()

	const paths = sketchesData.map(({ id }) => {
		return {
			params: { id: id }
		}
	})

	return {
		paths: paths,
		fallback: false
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
    <Layout>
      <div>
        <Sketch />
      </div>
    </Layout>
  )
}
