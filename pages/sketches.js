import SketchPreview from '../components/sketch_preview'
import { getSketchesData } from '../lib/sketches'

export async function getStaticProps() {
	const sketchesData = getSketchesData()
	
	return {
		props: {
			sketchesData,
		}
	}
}

export default function Sketches({ sketchesData }) {
	return (
		<div className="lg:pt-20 md:pt-10 pt-5">
			<h1 className="block font-medium text-6xl lg:text-9xl mb-20">Sketches</h1>
				{sketchesData.map(({ id, image, description }) => 
					<SketchPreview id={id} image={image} description={description} />
				)}
		</div>
	)
}

