import Image from 'next/image'
import Link from 'next/link'

export default function SketchPreview({ id, image, description }) {
  return (
    <Link href={`/sketches/${id}`} className="mt-auto">
      <div
        key={`${id}_image`}
        className="relative col-span-2 mb-2 aspect-square w-full"
      >
        <Image
          src={image}
          fill="true"
          className="rounded-md opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
          alt="Sketch preview."
        />
      </div>
    </Link>
  )
}
