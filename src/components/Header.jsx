import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { LifebuoyIcon, TicketIcon } from "@heroicons/react/20/solid";
import { Logo } from "./Logo";

const items = [
	{ name: "Program", href: "/program" },
	{ name: "Arrangementer", href: "/arrangementer" },
	{ name: "Udlejning", href: "/udlejning" },
];

export function Header() {
	const [isOpaque, setIsOpaque] = useState(false);

	useEffect(() => {
		const offset = 50;

		function onScroll() {
			if (!isOpaque && window.scrollY > offset) {
				setIsOpaque(true);
			} else if (isOpaque && window.scrollY <= offset) {
				setIsOpaque(false);
			}
		}

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll, { passive: true });
		};
	}, [isOpaque]);

	return (
		<header
			className={clsx(
				"fixed top-0 w-full z-50 px-8 flex items-center transition-all duration-300",
				isOpaque ? "backdrop-blur-lg bg-neutral-900/50" : "bg-transparent"
			)}
		>
			<ul
				className={clsx(
					"flex items-center space-x-6 border-b w-full py-3",
					isOpaque ? "border-neutral-100/[0.08]" : "border-transparent"
				)}
			>
				<li>
					<Link href="/">
						<a className="flex items-center">
							{/* <img className="h-8 w-auto" src="/img/logo-oskar.png" /> */}
							<Logo className="w-6 h-6"></Logo>
							<span className="ml-1 block text-white font-medium text-base">
								Kulturcafé Oskar
							</span>
						</a>
					</Link>
				</li>
				{items.map((item) => (
					<li key={item.name}>
						<Link href={item.href}>
							<a className="text-neutral-100 hover:text-neutral-100/60 text-shadow-lg">
								<span className="text-sm font-medium shadow-md">
									{item.name}
								</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
