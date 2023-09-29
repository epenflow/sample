import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import { Metadata } from 'next';
export const metadat: Metadata = {
	title: 'home',
};
async function getProduct() {
	const res = await fetch('https://dummyjson.com/products/');

	if (!res) {
		throw new Error('failed to fetch data');
	}
	return res.json();
}
export interface IProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	dscountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}
type TProduct = {
	products: Array<IProduct>;
	total: number;
	skip: number;
	limit: number;
};
const setPrice = (numer: number) => {
	return Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(numer);
};
export default async function Home() {
	const product: TProduct = await getProduct();
	return (
		<main>
			<h1>home page</h1>
			<div className='flex flex-wrap overflow-hidden gap-3  justify-center'>
				{product.products.map((val) => (
					<section
						key={val.id}
						className='h-96 w-80 bg-blue-300 flex flex-col p-2  items-center'>
						<h1 className='font-medium text-base text-start w-[100%]'>
							{val.title}
						</h1>

						<img
							src={val.images[0]}
							alt=''
							className='w-60 h-60 object-contain object-center'
						/>

						<p>Price : {setPrice(val.price)}</p>
						<button className=' bg-green-600 rounded-full p-2 box-content text-white'>
							<Link
								href={`https://wa.me/62895330148034?text=Saya%20mau%20order%20${val.title}%0Ahttps://sample-eosin.vercel.app/about/${val.id}`}>
								order to whatsapp
							</Link>
						</button>
					</section>
				))}
			</div>
		</main>
	);
}
