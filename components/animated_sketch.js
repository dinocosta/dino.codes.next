import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'

const settings = { dimensions: [1080, 1080], animate: true, styleCanvas: false }

function getCanvasDimensions() {
	const dimension = 0.75 * Math.min(window.innerWidth, window.innerHeight)

	return { width: dimension, height: dimension }
}

export default function AnimatedSketch({ sketch }) {
	const { width: width, height: height } = getCanvasDimensions()
	const ref = useRef(null)

	useEffect(() => {
		canvasSketch(sketch, { ...settings, canvas: ref.current })
	}, [sketch, ref])

	// Whenever the browser's window is resized the canvas' width and height style must be updated
	// so it does not end up taking too much vertical or horizontal space, which can be an issue in wider screens.
	window.addEventListener('resize', () => {
		const { width: width, height: height } = getCanvasDimensions()
		const canvas = document.getElementById('canvas')
		canvas.style.width = `${width}px`
		canvas.style.height = `${height}px`
	})

	return <canvas ref={ref} id="canvas" className="mx-auto rounded-md mb-4" style={{ width: width, height: height }} />
}
