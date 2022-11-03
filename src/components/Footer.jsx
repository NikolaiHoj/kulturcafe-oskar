import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export function Footer() {
	return (
		<footer className="px-4 sm:px-6 md:px-8 overflow-hidden">
			<div className="text-sm border-t border-neutral-100/10 py-10 max-w-5xl mx-auto grid grid-cols-6 gap-y-8">
				<div className="col-span-6 sm:col-span-2">
					<Logo className="w-8 h-8" />
					<p className="mt-2 text-neutral-500">
						Et spillested med levende musik for levende mennesker.
					</p>
				</div>

				<div className="col-span-3 sm:col-span-2">
					<h3 className="font-medium text-white mb-2">Links</h3>
					<ul className="text-neutral-500 space-y-2">
						<li>
							<Link href="/">
								<a className="text-neutral-500 hover:text-orange-400">
									Forside
								</a>
							</Link>
						</li>
						<li>
							<Link href="/program">
								<a className="text-neutral-500 hover:text-orange-400">
									Program
								</a>
							</Link>
						</li>
						<li>
							<Link href="/arrangement">
								<a className="text-neutral-500 hover:text-orange-400">
									Arrangementer
								</a>
							</Link>
						</li>
						<li>
							<Link href="/udlejning">
								<a className="text-neutral-500 hover:text-orange-400">
									Udlejning
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-3 sm:col-span-2">
					<h3 className="font-medium text-white mb-2">Kontakt</h3>
					<ul className="text-neutral-500 space-y-2">
						<li className="flex items-center text-neutral-500 hover:text-orange-400 w-fit">
							<MapPinIcon className="w-4 h-4" />
							<a
								href="http://maps.google.com/?q=Kulturcafé Oskar Kingosvej 5 4321 Søby"
								className="ml-2"
							>
								Kulturcafé Oskar Kingosvej 5 4321 Søby
							</a>
						</li>
						<li className="flex items-center text-neutral-500 hover:text-orange-400 w-fit">
							<PhoneIcon className="w-4 h-4" />
							<a href="tel:12345678" className="ml-2">
								12345678
							</a>
						</li>
						<li className="flex items-center text-neutral-500 hover:text-orange-400 w-fit">
							<EnvelopeIcon className="w-4 h-4" />
							<a href="mailto:kulturcafeoskar@gmail.com" className="ml-2">
								kulturcafeoskar@gmail.com
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
