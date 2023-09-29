export default function AboutId({ params }: { params: { id: string } }) {
	return (
		<main>
			<h1>{params.id}</h1>
		</main>
	);
}
