import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { CakeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";

function ContactCard() {
	return (
		<div className="flex items-start">
			<img
				className="h-64 w-36 object-cover rounded-2xl"
				src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"
			/>
			<div className="ml-6">
				<p className="text-xs tracking-wide font-semibold uppercase text-orange-500">
					Udlejningsansvarlig
				</p>
				<h3 className="font-medium text-neutral-100">Bent Poulsen</h3>
				<ul className="space-y-1 mt-2">
					<li>
						<a
							href="tel:12345678"
							className="flex items-center text-sm hover:text-orange-400 w-fit"
						>
							<PhoneIcon className="w-4 h-4 mr-2" />
							12345678
						</a>
					</li>
					<li>
						<a
							href="mailto:Bent.Poulsen@kulturcafeoskar.dk"
							className="flex items-center text-sm hover:text-orange-400 w-fit"
						>
							<EnvelopeIcon className="w-4 h-4 mr-2" />
							Bent.Poulsen@kulturcafeoskar.dk
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default function Udlejning() {
	return (
		<MainLayout>
			<section className="px-4 sm:px-6 md:px-8">
				<div className="max-w-5xl mx-auto py-20">
					<div className="absolute inset-0 h-80 bg-gradient-to-b from-pink-500/25 pointer-events-none"></div>
					<div className="relative flex justify-center py-10">
						<div className="rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 p-2.5 ring-1 ring-inset ring-white/25">
							<CakeIcon className="w-12 h-12 text-white" />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-2xl font-extrabold text-white">
							Lej Kulturcafe Oskar
						</h2>
						<p className="mt-2 text-base">
							Bygningen på Kingosvej kan lejes af private, foreninger og
							firmaer.
						</p>
					</div>
					<div className="mt-12">
						<div className="">
							<h3 className="text-neutral-100 font-medium">
								Prisliste for private
							</h3>
							<ul className="list-disc list-inside">
								<li>
									Døgnleje på fredage, lørdage, søndage og helligdage: kr. 3.200
									incl. rengøring.
								</li>

								<li>Døgnleje på øvrige hverdage: kr. 2.300 incl. rengøring</li>
								<li>Leje for en halv hverdag: kr. 1.400 incl. rengøring</li>
								<li>
									Lørdag fra kl. 8 til mandag kl. 6: kr. 4.200 incl. rengøring
								</li>
							</ul>
						</div>
						<div className="mt-6">
							<h3 className="text-neutral-100 font-medium">
								Virksomhedens arrangement på Oskar
							</h3>
							Vi kan skræddersy arrangementer for op til 70 personer i smukke
							omgivelser. I lokalerne forefindes bl.a.: projekter, lærred og
							internet. Lejebetingelser Caféen udlejes til private, foreninger
							og firmaer. En lejeaftale er først bindende efter en underskrevet
							lejekontrakt og et indbetalt depositum på 1000 kr. Nøglerne
							udleveres først efter indbetaling af det fulde lejebeløb.
							Depositum dækker eventuelle mindre skader på inventar og
							inddrages, hvis lokalerne ikke afleveres i rydeliggjort stand
							eller hvis ordensreglerne, som tiltrædes ved lejekontraktens
							underskrift, ikke er overholdt. Bemærk venligst at Kulturcafé
							Oskar ligger i et beboelsesområde, hvor der skal vises hensyn
							overfor naboerne. Det betyder, at der efter klokken 22:00 kun må
							spilles dæmpet musik, samt at vinduer og døre skal holdes lukkede.
							Som udgangspunkt er udlejningsperioden på døgnbasis fastlagt fra
							kl. 8.00 til kl.6.00 næste dags morgen. Særskilte aftaler kan
							indgås mod betaling, hvis husets øvrige aktiviteter muliggør det.
							Spørg altid konkret. Det er muligt at købe fadøl og leje
							fadølsanlæg.
						</div>
						<div className="mt-8">
							<ContactCard />
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
