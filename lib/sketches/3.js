import { useEffect, useRef } from 'react'
import canvasSketch from 'canvas-sketch'
import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const animate = () => {
  requestAnimationFrame(animate);
}
// animate();

const numberOfAgents = 40;

const sketch = ({ context, width, height }) => {
  const agents = [];

  for (let i = 0; i < numberOfAgents; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  };

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Draw connecting lines between agents.
    for (let i = 0; i < numberOfAgents; i++) {
      const sourceAgent = agents[i];

      for (let j = i + 1; j < numberOfAgents; j++) {
        const targetAgent = agents[j];
        const distance = sourceAgent.getDistance(targetAgent);

        if (distance < 200) {
          context.lineWidth = math.mapRange(distance, 0, 200, 8, 1);
          context.beginPath();
          context.moveTo(sourceAgent.position.x, sourceAgent.position.y);
          context.lineTo(targetAgent.position.x, targetAgent.position.y);
          context.stroke();
        }
      }
    }

    // Draw agents.
    agents.forEach(agent => { 
      agent.wrap(width, height);
      agent.update();
      agent.draw(context) 
    });
  };
};

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(4, 10);
  }

  bounce(width, height) {
    if (this.position.x <= 0 || this.position.x >= width) this.velocity.x *= -1;
    if (this.position.y <= 0 || this.position.y >= height) this.velocity.y *= -1;
  }

  wrap(width, height) {
    if (this.position.x < 0) this.position.x = width;
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  getDistance(agent) {
    const distanceX = this.position.x - agent.position.x;
    const distanceY = this.position.y - agent.position.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }

  draw(context) {
    context.lineWidth = 4;
    context.save();

    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
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
      <canvas ref={ref} className="mx-auto rounded-md" />
    </div>
  )
}

export default Sketch
