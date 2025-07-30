"use client"

import Link from 'next/link'
import { Share2, UserRound, House } from 'lucide-react'

export default function Navbar() {

    const standard = "h-8 w-8 mr-1"

	return (
		<nav className="fixed left-0 z-10 min-h-screen bg-transparent px-5">
			<div className="flex flex-col gap-10 p-5 bg-muted/15 backdrop-blur-lg rounded-xl">
						<Link href="/">
							<House className={standard} />
						</Link>
						<Link href="/account">
							<UserRound className={standard} />
						</Link>
						<Link href="/shared">
                            <Share2 className={standard} />
                        </Link>

			</div>
		</nav>
	)
}
