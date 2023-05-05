import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout'
import SketchPreview from '@/components/sketch_preview'
import { getSketchesData } from '@/lib/sketches'

export async function getStaticProps() {
  const sketchesData = getSketchesData()

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
        <h1 className="mb-8 block text-2xl font-medium text-tangerine">Sketches</h1>
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
