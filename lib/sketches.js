import fs from 'fs'
import path from 'path'

// All of the sketches' code should live under the `lib/sketches` directory.
const sketchesDirectory = path.join(process.cwd(), 'lib/sketches')

export async function getSketchesData() {
	const fileNames = fs.readdirSync(sketchesDirectory)
	
	return fileNames.map(fileName => {
		const sketchId = fileName.replace('.js', '')
		const sketchPreview = `/images/sketches/${sketchId}.png`
		const sketchPreviewPath = path.join(process.cwd(), `public${sketchPreview}`)

		// Before proceeding we will check if the sketch preview file actually exists, if not
		// we need to raise an error so we can be aware of this at build time.
		if (fs.existsSync(sketchPreviewPath)) {
			return {
				id: sketchId,
				image: sketchPreview
			}
		} else {
			throw new Error(`Missing sketch preview file for sketch ${sketchId} in ${sketchPreview}.`)
		}
	})
}
