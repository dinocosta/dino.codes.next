// Helper function to handle resizing of the canvas page so that the canvas element does not end up taking too much 
// vertical or horizontal space.
//
// This relies on the canvas element id being set to 'canvas', otherwise it won't work.
export function handleResize() {
	const { width: width, height: height } = getCanvasDimensions()
	const canvas = document.getElementById('canvas')
	canvas.style.width = `${width}px`
	canvas.style.height = `${height}px`
}

// Returns the canvas' width and height to be used in order to style the canvas taking 
// into account the window's inner width and height, picking whichever size is lowest, 
// if only the window's `innerWidth` is used there's a chance that the canvas will end 
// up taking too much vertical space in wider monitors.
export function getCanvasDimensions() {
	const dimension = 0.75 * Math.min(window.innerWidth, window.innerHeight)

	return { width: dimension, height: dimension }
}
