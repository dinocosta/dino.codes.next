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
        <h1 className="mb-8 block text-2xl font-medium">Sketches</h1>
        <div className="grid grid-cols-3 lg:grid-cols-6">
          {sketchesData.map(({ id, image, description }) => (
            <SketchPreview
              key={id}
              id={id}
              image={image}
              description={description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
