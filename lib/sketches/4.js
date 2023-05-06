import { useEffect, useRef, useState } from 'react'
import canvasSketch from 'canvas-sketch'
import math from 'canvas-sketch-util/math'
import random from 'canvas-sketch-util/random'

const settings = {
  dimensions: [1080, 1080],
  animate: true,
}

const params = {
  columns: 10,
  rows: 10,
  scaleMin: 1,
  scaleMax: 30,
  frequency: 0.001,
  amplitude: 0.2,
  animate: true,
  frame: 0,
  lineCap: 'butt',
}

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)

    const columns = params.columns
    const rows = params.rows
    const numberOfCells = columns * rows

    const gridWidth = width * 0.8
    const gridHeight = height * 0.8
    const cellWidth = gridWidth / columns
    const cellHeight = gridHeight / rows
    const marginX = (width - gridWidth) / 2
    const marginY = (height - gridHeight) / 2

    for (let i = 0; i < numberOfCells; i++) {
      const column = i % columns
      const row = Math.floor(i / columns)

      const x = column * cellWidth
      const y = row * cellHeight
      const lineWidth = cellWidth * 0.5
      const lineHeight = cellHeight * 0.5

      const noiseFrame = params.animate ? frame : params.frame

      const noise = random.noise3D(x, y, noiseFrame * 10, params.frequency)
      const angle = noise * Math.PI * params.amplitude
      const scale = math.mapRange(
        noise,
        -1,
        1,
        params.scaleMin,
        params.scaleMax
      )

      context.save()

      context.lineWidth = scale
      context.lineCap = params.lineCap

      context.translate(x, y)
      context.translate(marginX, marginY)
      context.translate(cellWidth * 0.5, cellHeight * 0.5)
      context.rotate(angle)

      context.beginPath()
      context.moveTo(lineWidth * -0.5, 0)
      context.lineTo(lineWidth * 0.5, 0)
      context.stroke()

      context.restore()
    }
  }
}

const updateValues = () => {
  // We're using the `|| params.columns` or `|| params.rows` here because, if the user does not specify new values
  // in the inputs and just clicks on the "Update" button the sketch would disappear, as `.value` would return `null` so
  // this prevents that by returning the current values.
  const numberOfColumns =
    document.querySelector('#numberOfColumns').value || params.columns
  const numberOfRows =
    document.querySelector('#numberOfRows').value || params.rows

  params.rows = numberOfRows
  params.columns = numberOfColumns
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
      <canvas ref={ref} className="mx-auto" />

      <section className="grid">
        <div>
          <label for="numberOfColumns">Columns:</label>
          <input
            type="text"
            name="numberOfColumns"
            placeholder={params.columns}
            id="numberOfColumns"
          />
        </div>

        <div>
          <label for="numberOfRows">Rows:</label>
          <input
            type="text"
            name="numberOfRows"
            placeholder={params.rows}
            id="numberOfRows"
          />
        </div>

        <button onClick={() => updateValues()}>Update</button>
      </section>
    </div>
  )
}

export default Sketch
