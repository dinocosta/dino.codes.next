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
      <canvas
        ref={ref}
        id="canvas"
        className="mx-auto mb-4 rounded-md"
        style={{ width: width, height: height }}
      />

      <div className="align-items justify-content flex">
        <div className="mx-auto inline-flex">
          <PillButton
            onClick={() =>
              canvasSketch(sketch, { ...settings, canvas: ref.current })
            }
            className="mb-4 mr-4 flex"
          >
            <span className="mr-2">Regenerate</span>
            <ArrowPathIcon className="fill-text-dark dark:fill-text-light h-6 w-6" />
          </PillButton>

          <SketchDownload fileName={fileName} />
        </div>
      </div>
    </div>
  )
}
