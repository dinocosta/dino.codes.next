import PillButton from '@/components/pill_button'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { downloadSketch } from '@/lib/utilities'

// A simple download button which can be used in sketches to automatically allow download
// of sketches as a PNG file.
export default function SketchDownload({ fileName }) {
  const classNames =
    'my-4 py-2 px-4 border-2 border-muted-light dark:border-muted-dark w-fit rounded-full mx-auto flex mb-4'

  return (
    <button className={classNames} onClick={() => downloadSketch(fileName)}>
      <span className="mr-2">Download</span>
      <ArrowDownTrayIcon className="h-6 w-6 fill-orange-500 dark:fill-yellow-300" />
    </button>
  )
}
