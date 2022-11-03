import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Program() {
	const [showMore, setShowMore] = useState(false);

	return (
		<MainLayout>
			<section className="px-4 sm:px-6 md:px-8">
				<div className="max-w-5xl mx-auto py-20">
					<div className="absolute inset-0 h-80 bg-gradient-to-b from-yellow-500/25 pointer-events-none"></div>
					<div className="relative flex justify-center py-10">
						<div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 ring-1 ring-inset ring-white/25">
							<ExclamationTriangleIcon className="w-12 h-12 text-white" />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-2xl font-extrabold text-white">
							Kulturcaféen er pt. lukket for koncerter
						</h2>
						<p className="mt-2 text-base">
							Kulturcafeen forventer at åbne dørene igen til efterårssæsonen
							2021 - privat udlejning fortsætter.
						</p>
						<button
							className="flex items-center text-yellow-400 hover:underline mx-auto mt-2"
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? (
								<>Vis mindre</>
							) : (
								<>
									Vis mere <ArrowRightIcon className="ml-0.5 w-4 h-4" />
								</>
							)}
						</button>
					</div>
					{showMore && (
						<div className="relative mt-10 bg-neutral-800 text-neutral-400 p-8 rounded-2xl ring-1 ring-inset ring-neutral-100/10">
							<p>
								Som følge af Covid-19 har Kulturcafé Oskar besluttet at holde
								lukket indtil sommeren 2021.
							</p>
							<p className="mt-2">
								Covid-19 og et intimt spillested med tæt kontakt mellem publikum
								og optrædende kan ikke forenes, derudover er faciliteterne
								omkring brugen af vore lokaler begrænsede, idet personale og
								kunstnere ”deles om” et mindre baglokale og køkkenet. Det er
								åbenlyst for enhver at det ikke er muligt at gennemføre en
								koncert på forsvarlig sundhedsmæssig vis for såvel gæster som
								personale og kunstnere.
							</p>
							<p className="mt-2">
								Kulturcafé Oskar beklager naturligvis situationen overfor de
								mange dygtige kunstnere og vores trofaste publikum.
							</p>
							<p className="mt-2">
								Denne COVID-19 situation gør det svært for vores lille, men
								populære spillested at eksistere, hvorfor vi vil opfordre så
								mange som muligt at melde sig som STØTTEMEDLEM… dette gøres på
								MobilePay xxxxxx …. eller på vores Bankkonto i NordBank 1234
								0001234314 … til et årligt kontingent på DKK 250,00
							</p>
							<p className="mt-2">
								…Kulturcafé Oskar glæder sig til igen at kunne fylde vores lille
								spillested, med glade gæster og dygtige kunstnere….
							</p>
							<p className="mt-2">Vi ses til efteråret 👋</p>
						</div>
					)}
				</div>
			</section>
		</MainLayout>
	);
}
