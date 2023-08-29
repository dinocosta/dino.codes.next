import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import PillButton from '@/components/pill_button'
import SketchDownload from '@/components/sketch_download'

const settings = { dimensions: [2048, 2048], styleCanvas: false }

function getCanvasDimensions() {
	const dimension = 0.55 * Math.min(window.innerWidth, window.innerHeight)

	return { width: dimension, height: dimension }
}

export default function StaticSketch({ sketch, fileName }) {
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

	return (
		<div>
			<canvas ref={ref} id="canvas" className="mx-auto rounded-md mb-4" style={{ width: width, height: height }} />

			<div className="flex align-items justify-content">
				<div className="inline-flex mx-auto">
					<PillButton onClick={() => canvasSketch(sketch, { ...settings, canvas: ref.current, })} className="flex mb-4 mr-4">
						<span className="mr-2">Regenerate</span>
						<ArrowPathIcon className="h-6 w-6 fill-orange-800 dark:fill-yellow-800" />
					</PillButton>

					<SketchDownload fileName={fileName} />
				</div>
			</div>
		</div>
	)
}
