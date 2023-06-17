import StaticSketch from '@/components/static_sketch'

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

export default function Sketch() {
	return (
		<div>
			<StaticSketch sketch={sketch} fileName="terrain_generation"/>

			<p className="text-center">Press the button above to generate a different image, with the border of the squares varying in thickness.</p>
		</div>
	)
}
