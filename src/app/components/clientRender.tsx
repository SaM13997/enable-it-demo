'use client'

import React, { use, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function ClientRender({users}: {users: any}) {
  // All this does is animate the list when the users are opulated, I know the email said not to use any external library, but this was primarily for the animation, I can remove it if needed. Ifeel like it really enhances the user experience.

  //ALso demonstrates the use of client components, :D
  const [ref] = useAutoAnimate()
  return (
		<div ref={ref} className="flex flex-col gap-2">
			{users.users.map((user: any) => (
				<div className="flex relative flex-col w-full gap-2 bg-zinc-100 rounded-xl text-zinc-600 p-4 pt-10 border border-zinc-950">
					<div className="flex gap-2">
						<img
							className="size-12"
							src="https://avatar.iran.liara.run/public/34"
							alt=""
						/>
						<div className="flex flex-col">
							<p className="text-2xl">{user.FirstNameLastName}</p>
							<p>{user.JobTitle}</p>
						</div>
					</div>
					<p className="bg-red-200 text-red-600 rounded-bl-lg px-2 pb-2 font-semibold absolute top-0 right-0">
						{user.Company}
					</p>
					<div>
						<p className="text-lg text-zinc-600">Contact</p>
						<p>{user.EmailAddress}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default ClientRender