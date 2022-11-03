import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Logo } from "./Logo";

export function Footer() {
	return (
		<footer className="px-4 sm:px-6 md:px-8">
			<div className="text-sm border-t border-neutral-100/10 py-10 max-w-5xl mx-auto grid grid-cols-3">
				<div>
					<Logo className="w-8 h-8" />
					<p className="mt-2 text-neutral-500">
						Et spillested med levende musik for levende mennesker.
					</p>
				</div>
				<div>
					<h3 className="font-medium text-white mb-2">Links</h3>
					<ul className="text-neutral-500 space-y-2">
						<li>
							<a href="/" className="text-neutral-500 hover:text-orange-400">
								Forside
							</a>
						</li>
						<li>
							<a
								href="/program"
								className="text-neutral-500 hover:text-orange-400"
							>
								Program
							</a>
						</li>
						<li>
							<a
								href="/arrangement"
								className="text-neutral-500 hover:text-orange-400"
							>
								Arrangementer
							</a>
						</li>
						<li>
							<a
								href="/udlejning"
								className="text-neutral-500 hover:text-orange-400"
							>
								Udlejning
							</a>
						</li>
					</ul>
				</div>
				<div>
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