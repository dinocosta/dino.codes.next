import Image from 'next/image'
import Link from 'next/link'
import SketchPreview from '../components/sketch_preview'
import { getSketchesData } from '../lib/sketches'

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
    <div>
      <Link href="/" className="my-8 block">
        <Image
          src="/svg/left-arrow.svg"
          height="24"
          width="24"
          alt="Back button"
        />
      </Link>
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
  )
}
