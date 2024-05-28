import Image from 'next/image'
import ClientRender from './components/clientRender'

export default async function Home({ searchParams }: { searchParams: any }) {
	const pageNumber = searchParams.page || 0
	const response = await fetch(
		`https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`
	)
	const users = await response.json()
	return (
		<div className="bg-zinc-900 text-white h-dvh flex flex-col justify-start items-center">
			<p>Here's the list of all the Users returned from the following URL</p>
			<p>
				https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next
			</p>
			<ClientRender users={users} />
			<div className="flex gap-4">
				{pageNumber === 0 ? null : (
					<a
						href={`http://localhost:3000?page=${parseInt(pageNumber) - 1}`}
						className="px-6 py-3 bg-zinc-500"
					>
						Prev
					</a>
				)}
				<a
					href={`http://localhost:3000?page=${parseInt(pageNumber) + 1}`}
					className="px-6 py-3 bg-zinc-500"
				>
					Next
				</a>
			</div>
		</div>
	)
}
