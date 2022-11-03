import clsx from "clsx";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import {
	MusicalNoteIcon,
	PencilIcon,
	TicketIcon,
	UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../components/Button";

const Card = ({ title, description }) => {
	return (
		<div className="border border-transparent hover:border-neutral-700 bg-neutral-800 rounded-2xl p-4 transition-colors duration-300 shadow-sm">
			<span className="block font-medium text-base text-white">{title}</span>
			<span className="block text-sm">{description}</span>
		</div>
	);
};

const ArtistCard = ({ name, className, imgSrc }) => {
	return (
		<Link href="#">
			<a
				className={clsx(
					"relative h-48 w-36 rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-orange-400 to-orange-500",
					className
				)}
			>
				<img
					className="mix-blend-multiply grayscale w-full h-full object-cover"
					src={imgSrc}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 w-full h-1/2 flex items-end justify-center p-2 mt-auto">
					<span className="block text-white font-medium text-sm">{name}</span>
				</div>
			</a>
		</Link>
	);
};

export default function Home() {
	return (
		<MainLayout>
			<section id="hero" className="relative border-b border-orange-500/25">
				<div className="bg-gradient-to-br from-orange-500 to-orange-600">
					<img
						className="mix-blend-multiply grayscale w-full h-[600px] object-cover"
						src="/img/sannebentsen.jpg"
						alt="Sanne Bentsen giver den gas på scenen"
					/>
				</div>
				<div className="absolute top-0 left-0 text-white flex flex-col justify-center px-16 h-full w-full z-10 text-left">
					<h1 className="relative text-6xl font-extrabold">
						Oplev den unikke stemning i Søby
					</h1>
					<p className="text-orange-300 mt-6 text-lg font-normal max-w-2xl">
						Kulturcafé Oskar er et spillested med levende musik for levende
						mennesker. Hvert år afholdes mellem 26 og 30 koncerter, der spænder
						meget bredt stilmæssigt. Der er intime koncerter med en eller to
						musikere på scenen, rockkoncerter og danseaftener med god popmusik.
					</p>
				</div>
			</section>

			<section id="om-os" className="px-4 sm:px-6 md:px-8">
				<div className="max-w-5xl mx-auto py-20">
					<h2></h2>
					<p className="text-sm tracking-wide font-semibold uppercase text-orange-400">
						Om os
					</p>
					<h2 className="relative text-3xl text-neutral-100 font-extrabold">
						Kulturcafé Oskar - et unikt spillested i historiske rammer
					</h2>

					<div className="relative mt-8 flex flex-col">
						<div className="relative w-fit">
							<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/25 blur-3xl rounded-full pointer-events-none"></div>
							<div className="relative bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-2xl ring-1 ring-inset ring-white/25 text-white inline-block">
								<MusicalNoteIcon className="w-8 h-8" />
							</div>
						</div>
						<div className="relative mt-4">
							<h3 className="text-xl text-neutral-100 font-bold">
								Tæt på musikken
							</h3>
							<p className="mt-2">
								Kulturcafé Oskar er et spillested med levende musik for levende
								mennesker. Hvert år afholdes mellem 26 og 30 koncerter, der
								spænder meget bredt stilmæssigt. Der er intime koncerter med en
								eller to musikere på scenen, rockkoncerter og danseaftener med
								god popmusik. Fælles for det hele er et nøje udvalgt program med
								erfarne og anerkendte kunstnere præsenteret i et
								topprofessionelt setup med virkelig god lyd og lys. På
								Kulturcafé Oskar kommer man tæt på musikken og musikken kommer
								tæt på publikum. Derfor vil mange gerne spille på Oskar og mange
								gæster kommer igen og igen på grund af den helt særlige
								stemning. Sideløbende med musikken indgår Oskar i samarbejde med
								andre foreninger, der bruger stedet til fx ungdomsarrangementer
								(Søby UngdomsProjekt), teater og danseskole.
							</p>
						</div>
					</div>

					<div className="relative mt-8 flex flex-col">
						<div className="relative w-fit">
							<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/25 blur-3xl rounded-full pointer-events-none"></div>
							<div className="relative bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-2xl ring-1 ring-inset ring-white/25 text-white inline-block">
								<UserGroupIcon className="w-8 h-8" />
							</div>
						</div>
						<div className="relative mt-4">
							<h3 className="text-xl text-neutral-100 font-bold">
								Foreningen bag
							</h3>
							<p className="mt-2">
								Kulturcafé Oskar drives af en kreds af frivillige ildsjæle med
								en fælles passion for levende musik og glæden ved at have et
								aktivt spillested i Søby. Oskar er en nonprofit forening på ca.
								40 medlemmer med en bestyrelse, samt en række andre udvalg /
								arbejdsgrupper. Det lokale erhvervsliv, Søby Kommune samt
								forskellige organisationer og fonde støtter projektet økonomisk
								på flotteste vis. Sammen med billetindtægterne og barsalget er
								det foreningens økonomiske grundlag
							</p>
						</div>
					</div>

					<div className="mt-4">
						<h3 className="text-xl font-semibold text-neutral-100"></h3>
						<p className="mt-2"></p>
						<img />
					</div>
					<div className="mt-8">
						<h3 className="text-xl font-semibold text-neutral-100"></h3>
						<p className="mt-2"></p>
					</div>
				</div>
			</section>

			<section id="billet-&-bord" className="px-4 sm:px-6 md:px-8">
				<div className="max-w-5xl mx-auto border-t border-neutral-100/10 py-20">
					<p className="text-sm tracking-wide font-semibold uppercase text-orange-400">
						Billet & bord
					</p>
					<h2 className="relative text-3xl text-neutral-100 font-extrabold">
						Vi glæder os til at se dig!
					</h2>
					<div className="relative mt-8 flex flex-col">
						<div className="relative w-fit">
							<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/25 blur-3xl rounded-full pointer-events-none"></div>
							<div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-2xl ring-1 ring-inset ring-white/25 text-white inline-block">
								<TicketIcon className="w-8 h-8" />
							</div>
						</div>
						<div className="relative mt-4">
							<h3 className="text-xl text-neutral-100 font-bold">Billetsalg</h3>
							<p className="mt-2">
								Alle billetter til Kulturcafé Oskars arrangementer sættes til
								salg på{" "}
								<Link href="https://www.ticketmaster.dk/">
									<a className="text-orange-400 hover:underline">
										Ticketmaster
									</a>
								</Link>
								. Billetprisen på hjemmesiden er inklusive gebyrer. Ved hver
								event i programmet er der et direkte link til Ticketmasters
								billetsalg. Billetter, der ikke er solgt forlods, sættes til
								salg ved døren en time før koncerten. På Kulturcafeoskar.dk
								annonceres det, hvis der kun er få billetter tilbage eller
								koncerten er udsolgt. Det anbefales at købe billet i forsalg, da
								mange koncerter bliver udsolgte.
							</p>
							<Button
								color="solidBlue"
								className="mt-4"
								as="a"
								href="https://www.ticketmaster.dk/"
							>
								Køb billetter
							</Button>
						</div>
					</div>

					<div className="relative mt-16 flex flex-col">
						<div className="relative w-fit">
							<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500/25 blur-3xl rounded-full pointer-events-none"></div>
							<div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-2xl ring-1 ring-inset ring-white/25 text-white inline-block">
								<PencilIcon className="w-8 h-8" />
							</div>
						</div>
						<div className="mt-4 relative">
							<h3 className="text-xl text-neutral-100 font-bold">
								Bordreservation
							</h3>
							<p className="mt-2">
								Den gamle bygning rummer 120 siddende gæster eller 140 gæster
								til de stående koncerter. Ved de fleste koncerter sidder man ved
								runde caféborde med plads til 4-5 personer. De stående koncerter
								er som regel rockkoncerter eller arrangementer, hvor man kan
								forudse, at der skal danses igennem. Stående koncerter er
								tydeligt annonceret i programmet.
								<br />
								Lokalets størrelse og indretning gør, at alle ser og hører lige
								godt, derfor kan man kun forhåndsreservere bord ved grupper på
								seks eller flere. I de tilfælde benytter vi nemlig andre borde
								end de sædvanlige runde caféborde. Kontakt os senest dagen før
								på bo.Hansen@kulturcafeoskar.dk eller sms til tlf. xxxxxxxx,
								hvis du ønsker at reservere bord. Har man reserveret bord, skal
								man komme senest 20 min. før koncertstart, ellers vil
								reservationen blive annulleret. Adgangen til Oskar er
								handicapvenlig. Kom i god tid og kontakt barteamet, så hjælper
								de dig ind.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/*
			<section className="relative flex justify-center bg-neutral-900 pb-10 w-full">
				<div
					style={{
						WebkitMaskImage: "linear-gradient(black, transparent)",
					}}
					className="absolute inset-0 h-80 bg-pattern-orange-500/25 bg-[top_1px_center] pointer-events-none"
				></div>
				<div className="absolute inset-0 h-80 bg-gradient-to-b from-[#101010] to-transparent pointer-events-none"></div>
				<div className="-mt-14 bg-neutral-800 p-6 mx-8 max-w-3xl z-10 w-full rounded-2xl shadow-lg highlight-neutral-100/10">
					<div>
						<h3 className="text-lg text-neutral-100 font-medium">
							Vores program
						</h3>
						<p className="mt-1 text-base">Programmet er midlertidigt aflyst</p>
						<Link href="/program">
							<a className="inline-flex items-center bg-orange-500 highlight-orange-300/75 rounded-lg text-white p-2 text-sm mt-4">
								Læs mere her
								<ArrowRightIcon className="ml-1 w-4 h-4" />
							</a>
						</Link>
					</div>
					<span className="block w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4" />
					<div>
						<h3 className="text-lg text-neutral-100 font-medium">Artister</h3>
						<div className="flex flex-wrap gap-4 justify-between mt-2">
							<ArtistCard name="Sanne Bentsen" imgSrc="/img/sannebentsen.jpg" />
							<ArtistCard name="Madchen" imgSrc="/img/madchen.jpg" />
							<ArtistCard
								name="Christian Andersen"
								imgSrc="/img/christianandersen.jpg"
							/>
							<ArtistCard name="Sanne Bentsen" imgSrc="/img/sannebentsen.jpg" />
						</div>
					</div>
				</div>
			</section>
			*/}
		</MainLayout>
	);
}
