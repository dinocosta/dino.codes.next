// Mapping between window's width and what the canva's width should be set to.
// Order matters as we want to find the first size that's smaller than the window width.
const sizes = {
	1536: 1024,
	1280: 1024,
	1024: 768,
	768: 640,
	640: 512
}

// Helper function to handle resizing of the canvas page so that the canvas element does not end up taking too much 
// vertical or horizontal space.
//
// This relies on the canvas element id being set to 'canvas', otherwise it won't work.
export function handleResize() {
	const canvasDimensions = getCanvasDimensions()
	const canvas = document.getElementById('canvas')
	canvas.style.width = `${canvasDimensions.width}px`
	canvas.style.height = `${canvasDimensions.height}px`
}

// Returns the canvas' width and height to be used in order to style the canvas taking 
// into account the window's inner width and height.
export function getCanvasDimensions() {
	const key =
		Object.keys(sizes)
			.map(key => { return parseInt(key) })
			.sort((a, b) => { return b - a })
			.find(size => size < window.innerWidth)

	// If a window's innerWidth is less than 640 pixels then `key` will be set to `null` so we need to check for that 
	// specific condition and return a default value if that happens.
	const dimension = sizes[key] || 256

	return {
		width: dimension,
		height: dimension
	}
}
