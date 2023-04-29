const sketchesData = [
	{
		id: 1,
		image: '/images/sketch_1.png',
		description: `First experiments with using canvas-sketch and drawing reactive sketches. The sketch will change
		everytime you refresh the sketch\'s page.`
	},
	{
		id: 2,
		image: '/images/sketch_2.jpeg',
		description: `A second sketch, with colors and arcs.`
	}
]

export function getSketchesData() {
	return sketchesData
}