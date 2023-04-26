import Image from 'next/image'
import Link from 'next/link'

export default function SketchPreview({ id, image, description }) {
	return [
		<div className='relative w-full aspect-square col-span-1 mb-10'>
			<Image src={image} fill='true' className='rounded-md' />
		</div>,
		<div className='flex flex-col col-span-2 px-10 mb-10'>
			<Link href={`/sketches/${id}`} className='mt-auto'>
				<h2 className='font-medium text-xl'>Sketch {id}</h2>
			</Link>
			<p className='text-gray'>{description}</p>
		</div>
	]
}
