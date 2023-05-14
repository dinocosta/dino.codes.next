import Layout from '@/components/layout'
import SketchPreview from '@/components/sketch_preview'
import PageTitle from '@/components/page_title'
import { getSketchesData } from '@/lib/sketches'

export async function getStaticProps() {
  const sketchesData = await getSketchesData()

  return {
    props: {
      sketchesData,
    },
  }
}

export default function Sketches({ sketchesData }) {
  return (
    <Layout>
      <div>
				<PageTitle title='Sketches' />
        <div className="grid gap-2 grid-cols-2">
          {sketchesData.map(({ id, image, description }) => (
            <SketchPreview
							className="sketch-preview"
              key={id}
              id={id}
              image={image}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
