'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
interface IRoute {
	path: string;
	name: string;
}
const ROUTE: IRoute[] = [
	{ path: '/', name: 'home' },
	{ path: '/about', name: 'about' },
];
const Navbar = () => {
	const pathName = usePathname();

	return (
		<nav>
			{ROUTE.map((routes, index) => (
				<Link
					key={index}
					href={routes.path}
					className={`${
						pathName === routes.path ? 'text-red-300' : null
					}`}>
					{routes.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
