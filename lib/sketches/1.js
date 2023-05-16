import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'
import PillButton from '@/components/pill_button'

const settings = {
	dimensions: [1080, 1080],
}

const sketch = ({ }) => {
	return ({ context, width, height }) => {
		context.fillStyle = 'black'
		context.fillRect(0, 0, width, height)

		context.lineWidth = width * 0.015
		context.strokeStyle = 'white'

		const squareHeight = height * 0.1
		const squareWidth = width * 0.1
		const gap = width * 0.03
		const initialX = width * 0.17
		const initialY = height * 0.17
		const offset = width * 0.02

		let x, y

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				x = initialX + (squareWidth + gap) * i
				y = initialY + (squareHeight + gap) * j

				context.beginPath()
				context.rect(x, y, squareWidth, squareHeight)
				context.stroke()

				if (Math.random() > 0.5) {
					context.beginPath()
					context.rect(
						x + offset / 2,
						y + offset / 2,
						squareWidth - offset,
						squareHeight - offset
					)
					context.stroke()
				}
			}
		}
	}
}

const Sketch = () => {
	const ref = useRef(null)

	useEffect(() => {
		canvasSketch(sketch, {
			...settings,
			canvas: ref.current,
		})
	}, [ref])

	return (
		<div>
			{/* Using 'mx-auto' class here allows us to center the skecth content inside the canvas tag. */}
			<canvas ref={ref} className="mx-auto rounded-md mb-4" />

			<div className="grid grid-cols-1">
				<p className="text-center">Press the button below to generate a different image, with the border of the squares varying in thickness.</p>
				<PillButton onClick={() => canvasSketch(sketch, { ...settings, canvas: ref.current, })} className="mx-auto">Regenerate</PillButton>
			</div>
		</div>
	)
}

export default Sketch
