import ClientRender from './components/clientRender'

export default async function Home({ searchParams }: { searchParams: any }) {
	const pageNumber = searchParams.page || 0
	const response = await fetch(
		`https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`
	)
	const users = await response.json()
	return (
		<div className="bg-zinc-900 overflow-hidden text-white h-dvh flex flex-col justify-start items-center p-4 gap-4">
			<p>Here is the list of all the Users returned from the following URL</p>
			<p>
				https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next
			</p>
			<div className="overflow-y-auto">
				<ClientRender users={users} />
			</div>
			<div className="flex gap-4">
				{pageNumber === 0 ? null : (
					<a
						href={`http://localhost:3000?page=${parseInt(pageNumber) - 1}`}
						className="px-6 py-3 bg-zinc-500"
					>
						Prev
					</a>
				)}
				<div className="flex">
					{[...Array(10)].map((_, i) => (
						<div key={i} className={`size-4 h-full border border-zinc-900 text-zinc-900 w-full bg-zinc-300 p-2`} style={{
              backgroundColor: i + parseInt(pageNumber) === parseInt(pageNumber) ? "aqua" : "white",
            }}>
							<a
								className=""
								href={`http://localhost:3000?page=${i + parseInt(pageNumber)}`}
							>
								{i + parseInt(pageNumber)}
							</a>
						</div>
					))}
				</div>
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
