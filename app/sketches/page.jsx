import Link from '@/components/link'
import SketchPreview from '@/components/sketch_preview'
import PageTitle from '@/components/page_title'
import { getSketchesData } from '@/lib/sketches'

export async function generateMetadata() {
	return {
		title: '[dino.codes] Sketches'
	}
}

export default async function Sketches() {
	const sketchesData = await getSketchesData()

  return (
		<div>
			<PageTitle title='Sketches' />

			<p className="mb-4">
				A collection of computer-generated images or animations built using <Link href="https://github.com/mattdesl/canvas-sketch">canvas-sketch</Link>.
			</p>

			<div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
  )
}
