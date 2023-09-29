import { IProduct } from '@/app/page';
import { Metadata } from 'next';

async function getId(id: string) {
	const res = await fetch(`https://dummyjson.com/products/${id}`);

	if (!res) {
		throw new Error('failed to fetch data');
	}
	return res.json();
}
export default async function AboutId({ params }: { params: { id: string } }) {
	const getData: IProduct = await getId(params.id);
	console.info(getData);
	return (
		<main className='flex justify-center'>
			<div className='w-1/2 bg-gray-400 p-2'>
				<h1>{getData.title}</h1>
				<div className='flex flex-wrap flex-row gap-2 w-full justify-center'>
					{getData.images.map((val, index) => (
						<img
							src={val}
							alt={getData.title}
							key={index}
							className='h-[240px] w-[240px] object-contain'
						/>
					))}
				</div>
				<p>{getData.description}</p>
			</div>
		</main>
	);
}
