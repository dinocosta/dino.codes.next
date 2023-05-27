// Helper function to be used in sketches which allows a sketch image to be download, 
// assuming the canvas where the sketch is draw has `id` set to `canvas`.
export function downloadSketch(fileName) {
	// Fetch the `canvas` element so we call the `toDataURL` function.
	const canvas = document.getElementById('canvas')

	// Create a link element while setting `display` to `none` so it never shows in the
	// page. The `href` value is set to the result of calling `canvas.toDataURL` as we want
	// to download the canvas image.
	// Lastly, the `download` field is set to the file name provided in the function
	// arguments, the `.png` extension will be automatically added.
	const link = document.createElement('a')
	link.style.display = 'none'
	link.href = canvas.toDataURL()
	link.download = fileName

	// Apped link element to the DOM so we can call `click` on it.
	document.body.appendChild(link)
	link.click()

	// To make this work on Firefox we need to wait
	// a little while before removing it.
	setTimeout(() => {
		URL.revokeObjectURL(link.href)
		link.parentNode.removeChild(link)
	}, 0)
}
