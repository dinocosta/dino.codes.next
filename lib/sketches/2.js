import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'
import math from 'canvas-sketch-util/math'
import random from 'canvas-sketch-util/random'
import PillButton from '@/components/pill_button'

const settings = {
  dimensions: [1080, 1080],
}

const backgroundColor = '#52D2A4'
const foregroundColors = ['#F7D13D', '#FDDD57', '#D9AD0D', '#B38A02']

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = backgroundColor
    context.beginPath()
    context.rect(0, 0, width, height)
    context.fill()

    const cx = 0
    const cy = 0

    const w = width * 0.01
    const h = height * 0.1
    let x, y
    let color

    const number = 180
    const radius = width * 0.75

    for (let i = 0; i < number; i++) {
      const slice = math.degToRad(360 / number)
      const angle = slice * i

      x = cx + radius * Math.sin(angle)
      y = cy + radius * Math.cos(angle)

      color = foregroundColors[random.rangeFloor(0, foregroundColors.length)]
      context.fillStyle = color
      context.strokeStyle = color

      context.save()
      context.translate(x, y)
      context.rotate(-angle)
      context.scale(random.range(0.1, 2), random.range(-2, 3))
      context.beginPath()
      context.rect(-w * 0.5, random.range(h * 0.5, -h * 0.5), w, h)
      context.fill()
      context.restore()

      context.lineWidth = random.range(5, 15)

      context.save()
      context.translate(cx, cy)
      context.rotate(-angle)
      context.beginPath()
      context.arc(
        0,
        0,
        radius * random.range(0.25, 1.75),
        slice * random.range(1, -8),
        slice * random.range(1, 15)
      )
      context.stroke()
      context.restore()
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
				<p className="mx-auto">Press the button below to generate a different image, with the border of the squares varying in thickness.</p>
				<PillButton onClick={() => canvasSketch(sketch, { ...settings, canvas: ref.current, })} className="mx-auto">Regenerate</PillButton>
			</div>
    </div>
  )
}

export default Sketch
