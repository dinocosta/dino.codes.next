import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import PillButton from '@/components/pill_button'
import SketchDownload from '@/components/sketch_download'

const settings = {
	dimensions: [2048, 2048],
	styleCanvas: false
}

// Mapping between window's width and what the canva's width should be set to.
// Order matters as we want to find the first size that's smaller than the window width.
const sizes = {
	1536: 1024,
	1280: 1024,
	1024: 768,
	768: 640,
	640: 512
}

// List of floor level colors, going from darkest to lightest so that we can easily use the map's index value to fetch the color.
const levelColors = [
	// Yellow Colorschem
	// '#422006', '#713f12',
	// '#854d0e',
	// '#a16207',
	// '#ca8a04',
	// '#eab308',
	// '#facc15',
	// '#fde047',
	// '#fef08a',
	// '#fef9c3',
	// '#fefce8'

	// Black and White colorscheme
	'#09090b',
	'#18181b',
	'#27272a',
	'#3f3f46',
	'#52525b',
	'#71717a',
	'#a1a1aa',
	'#d4d4d8',
	'#e4e4e7',
	'#f4f4f5',
	'#fafafa',
]

// The initial floor level to start the drawing at, make sure this value is >= 0 but lower than the length o levelColors.
const initialLevel = Math.floor(levelColors.length / 2)
// How many times, without counting the normal floor should the algorithm be run.
const depth = 4

function getCanvasWidth() {
	const key =
		Object.keys(sizes)
			.map(key => { return parseInt(key) })
			.sort((a, b) => { return b - a })
			.find(size => size < window.innerWidth)

	// If a window's innerWidth is less than 640 pixels then `key` will be set to `null` so we need to check for that 
	// specific condition and return a default value if that happens.
	if (key) { return sizes[key] } else { return 256 }
}

const fillSpace = (context, x, y, width, height, level, depth) => {
	if (depth == 0) {
		// We only need to draw when we reach depth 0, otherwise we would be drawing over existing rectangles, this way we can reduce the
		// number of times we call context.fillRect.
		context.fillStyle = levelColors[level]
		context.fillRect(x, y, width, height)
	} else {
		// Go up or down one level, while making sure the new floor level is not less than 0 nor higher than the length of `levelColors`.
		const newLevel = Math.random() >= 0.6 ? Math.min(level + 1, levelColors.length) : Math.max(level - 1, 0)

		fillSpace(context, x, y, width / 2, height / 2, newLevel, depth - 1)
		fillSpace(context, x, y + (height / 2), width / 2, height / 2, newLevel, depth - 1)
		fillSpace(context, x + (width / 2), y, width / 2, height / 2, newLevel, depth - 1)
		fillSpace(context, x + (width / 2), y + (height / 2), width / 2, height / 2, newLevel, depth - 1)
	}
}

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = 'white'
		context.fillRect(0, 0, width, height)

		// Determine the initial minimum and maximum x and y values taking into consideration the number of pixels to use for padding.
		const padding = 80
		const minX = padding
		const maxX = width - minX
		const usableWidth = maxX - minX
		const minY = padding
		const maxY = height - minY
		const usableHeight = maxY - minY

		fillSpace(context, minX, minY, usableWidth / 2, usableHeight / 2, initialLevel, depth)
		fillSpace(context, minX, minY + (usableHeight / 2), usableWidth / 2, usableHeight / 2, initialLevel, depth)
		fillSpace(context, minX + (usableWidth / 2), minY, usableWidth / 2, usableHeight / 2, initialLevel, depth)
		fillSpace(context, minX + (usableWidth / 2), minY + (usableHeight / 2), usableWidth / 2, usableHeight / 2, initialLevel, depth)
	}
}

const Sketch = () => {
	const canvasWidth = getCanvasWidth()
	const ref = useRef(null)

	useEffect(() => {
		canvasSketch(sketch, {
			...settings,
			canvas: ref.current,
		})
	}, [ref])

	// Whenever the window is resized we want to determine the new height and width for the canvas element.
	window.addEventListener('resize', () => {
		const canvasWidth = getCanvasWidth()
		const canvas = document.getElementById('canvas')
		canvas.style.width = `${canvasWidth}px`
		canvas.style.height = `${canvasWidth}px`
	})

	return (
		<div>
			{/* Using 'mx-auto' class here allows us to center the skecth content inside the canvas tag. */}
			<canvas id="canvas" ref={ref} className="rounded-md mx-auto mb-4" style={{ width: canvasWidth, height: canvasWidth }} />

			<div className="flex align-items justify-content">
				<div className="inline-flex mx-auto">
					<PillButton onClick={() => canvasSketch(sketch, { ...settings, canvas: ref.current, })} className="flex mb-4 mr-4">
						<span className="mr-2">Regenerate</span>
						<ArrowPathIcon className="h-6 w-6 fill-orange-800 dark:fill-yellow-800" />
					</PillButton>

					<SketchDownload fileName="terrain_generation" />
				</div>
			</div>

			<p className="text-center">Press the button above to generate a different image, with the border of the squares varying in thickness.</p>
		</div>
	)
}

export default Sketch
