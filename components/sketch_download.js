import PillButton from '@/components/pill_button'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { downloadSketch } from '@/lib/utilities'

// A simple download button which can be used in sketches to automatically allow download
// of sketches as a PNG file.
export default function SketchDownload({ fileName }) {
	return (
		<PillButton onClick={() => downloadSketch(fileName)} className="mx-auto flex mb-4">
			<span className="mr-2">Download</span>
			<ArrowDownTrayIcon className="h-6 w-6 fill-orange-800 dark:fill-yellow-800" />
		</PillButton>
	)
}
