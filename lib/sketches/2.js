import { useEffect, useRef } from 'react';
import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: "a4",
  pixelsPerInch: 300,
  units: "in"
};

const sketch = ({}) => {
  //Basic example from canvas-sketch repo
  return ({ context, width, height }) => {
    // Margin in inches
    const margin = 1 / 4;

    // Off-white background
    context.fillStyle = "hsl(0, 0%, 98%)";
    context.fillRect(0, 0, width, height);

    // Gradient foreground
    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, "blue");
    fill.addColorStop(1, "red");

    // Fill rectangle
    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);
  };
};

const Sketch = () => {
  const ref = useRef(null);

  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current
    });
  }, [ref]);

  return (
		<div>
      {/* Using 'mx-auto' class here allows us to center the skecth content inside the canvas tag. */}
			<canvas ref={ref} className='mx-auto'/>
		</div>
	);
};

export default Sketch;
