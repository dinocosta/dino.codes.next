import Image from 'next/image'
import Link from 'next/link'

export default function SketchPreview({ id, image, description }) {
	return (
		<div key={id} className='grid grid-cols-3 mb-10'>
			<div className='relative w-full aspect-square'>
				<Image src={image} fill='true' className='rounded-md' />
			</div>
			<div className='flex flex-col col-span-2 pl-10'>
				<Link href={`/sketches/${id}`} className='mt-auto'>
					<h2 className='font-medium text-xl'>Sketch {id}</h2>
				</Link>
				<p>{description}</p>
			</div>
		</div>
	)
}
