import React, { useState } from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { UsersIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function ArrangementCard({ title, description, items, price, date, image }) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			className={clsx(
				"relative bg-neutral-800 rounded-3xl overflow-hidden transition-all duration-500"
			)}
		>
			<div className="absolute inset-0 w-full h-full ring-1 ring-inset ring-neutral-100/10 rounded-3xl pointer-events-none"></div>
			<div className="bg-gradient-to-br from-orange-400 to-orange-600">
				<img
					className="w-full h-40 object-cover grayscale mix-blend-multiply"
					src={image}
				/>
			</div>
			<div className="p-5">
				<p className="text-xs uppercase font-semibold tracking-wide text-neutral-500">
					{date}
				</p>
				<h3 className="text-neutral-100 font-bold text-base">{title}</h3>
				<ul className="flex flex-wrap items-center space-x-1 text-xs mt-1 text-neutral-500">
					{items.map((item, idx) => (
						<>
							<li className="whitespace-nowrap">{item}</li>
							{idx !== items.length - 1 && (
								<li className="whitespace-nowrap">&middot;</li>
							)}
						</>
					))}
				</ul>
				<p className="text-neutral-100 text-xs mt-2">{price} kr</p>
				<button
					className="mt-4 flex items-center text-sm text-orange-500 hover:underline hover:text-orange-400"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? (
						<>Vis mindre</>
					) : (
						<>
							Vis mere
							<ArrowRightIcon className="w-4 h-4 ml-1" />
						</>
					)}
				</button>
				{isExpanded && <p className="mt-4 text-sm">{description}</p>}
			</div>
		</div>
	);
}

export default function Arrangementer() {
	return (
		<MainLayout>
			<section className="px-4 sm:px-6 md:px-8">
				<div className="max-w-5xl mx-auto py-20">
					<div className="absolute inset-0 h-80 bg-gradient-to-b from-blue-500/25 pointer-events-none"></div>
					<div className="relative flex justify-center py-10">
						<div className="rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 ring-1 ring-inset ring-white/25">
							<UsersIcon className="w-12 h-12 text-white" />
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-2xl font-extrabold text-white">
							Arrangementer
						</h2>
						<p className="mt-2 text-base">
							Musik til alle aldre og smage - kom forbi og hør vores fantistiske
							artister.
						</p>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12">
						<ArrangementCard
							title="Das Mädchen"
							price="285,00"
							items={["Åbner 19.00", "Starter 20.00", "Stående koncert"]}
							date="24. sep. 2021"
							image="/img/madchen.jpg"
							description="Das Mädchen og ”UB40-BigBang Teorien”: Das Mädchen har fra det det
							første undseelige sekund - siden de i 1991, så et lille lysglimt i
							UB40´s musik - været i bevægelse mod noget større! Større forståelse
							for UB40´s musik og for at skabe den bedste koncert. Større
							musikalsk spændvidde. Større indlevelse i hvad publikum ønsker – og
							for hver gang, at gøre en Das Mädchen-koncert til noget større –
							selv i de mindste sammenhænge! Det er ikke nødvendigvis kun et
							spørgsmål om mange og store højttalere, lamper og skærme – men i
							lige så høj grad et spørgsmål om nærvær og kontakt til publikum. Et
							spørgsmål om opfindsomhed, intuition - og om at gribe nuet, krydret
							med ydmyghed, humor, fandenivoldsk nerve - og så selvfølgelig –
							dygtighed og overskud. Efter mere end et kvart århundrede med UB40´s
							fantastiske sange har Das Mädchen fundet deres egen formel på at
							løfte sangene yderligere, så de opstår i en ny dimension i Das
							Mädchens univers – men altid uden at miste deres særlige UB40-kerne
							og -nerve! Das Mädchen har den fordel, at de kan det med deres
							koncerter – som UB40 ikke kan mere i kraft af deres størrelse og
							popularitet – nemlig lade publikum komme meget tæt på, og få musik
							og band helt ind under huden. Nærkontakten er essentiel for at skabe
							den bedste koncert! Das Mädchen skaber selve braget - eksplosionen i
							spændingsfeltet mellem orkester og publikum - Et UB40-BigBang! Og
							det gnistrer og brager, når Das Mädchen går på cenen. De allerbedste
							UB40-sange gennem snart 40 år sat sammen til et koncertforløb hvor
							publikum ikke på noget tidspunkt lades i stikken – men inkluderes og
							beriges!"
						/>
						<ArrangementCard
							date="15. okt. 2021"
							title="Christian Andersen Band"
							price="250,00"
							image="/img/christianandersen.jpg"
							items={["Åbner kl 19.00", "Starter kl 20.00", "Nyhed"]}
							description='Christian Andersen har en karakteristisk, stærk
							vokal, en intens guitarstil, og ikke mindst et fantastisk band!
							Christian Andersen er derfor med god grund ét af Danmarks travleste
							live-navne. 44-årige Christian Andersen, døbt Christan Højbjerg
							Andersen, begyndte at spille guitar da han var 12 år gammel i
							Rødekro i Sønderjylland. Allerede som teenager spillede han på barer
							og spillesteder i forskellige bands og begyndte desuden allerede hér
							at skrive sange. Som 16-årig blev Aarhus hans nye hjemby, og byens
							levende musikliv og jamsessions blev rammen om hans tidlige ungdom.
							I en alder af blot 22 startede han sit eget Christian Andersen Band,
							som udgav det anmelderroste debutalbum ‘My Love For The Blues’ i
							2002. Som ung dyrkede Christian Andersen de store amerikanske
							bluesguitarister og soulsangere intenst. Christian har dog altid
							haft en erkendelse af, at den musik han er så forelsket i stammer
							fra en tid længe før han blev født, og fra et sted langt fra
							Rødekro. Dén erkendelse, samt en nysgerrighed på andre genrer, og
							hvad der foregår musikalsk i den tid vi lever i, har betydet at
							Christian Andersen altid har søgt sin egen stil og lyd. 2010 blev et
							vendepunkt Christian Andersens tredje album, GENLYD, blev det danske
							gennembrud for den 34-årige sanger, sangskriver og guitarist. GENLYD
							høstede 5 hjerter i Politiken, blev “Ugens Album" på P4 og modtog
							tre Nordic Music Awards-nomineringer. Christian vandt senere en
							Nordic Music Award for albummet AWAY (Årets Songwriter Album - 2015)
							GENLYD bringer for alvor Christian Andersen på landevejen, og gennem
							de sidste 25 år har han, både med band og som solo artist, spillet
							over 1500 koncerter i mere end tyve lande. Christian Andersen havde
							desuden æren af at spille “opvarmning” for sin store helt, BB KING,
							hele tre gange! Syvende album byder på duet med Holly Monroe Op
							gennem sine tredivere begynder Christian Andersen at fokusere mere
							intenst på sin sangskrivning. Han tager på flere ture til Nashville
							for at co-write. Disse ture bliver en stor inspiration for ham og
							ved en co-write session i netop Nashville bliver sangen BEFORE til.
							BEFORE ender som en duet med den engelske verdensstjerne JOSH STEIN,
							og udkommer på Christian Andersen Bands 2016 album, DEVIL ON HIS
							WAY. Alene og akustisk Christian udgiver for første gang et helt
							akustisk soloalbum i 2019 med titlen 1000 K. “Jeg har altid stræbt
							efter at lave sange som kan holde til at blive fremført af bare mig
							selv og en guitar. Alligevel har jeg aldrig udgivet sange på den
							måde. Det er så på tide nu”, sagde Christian omring udgivelsen. 1000
							K blev en succes. Ni nye originale sange, indspillet på den
							“gammeldags” måde. Alt hvad man hører på dette album, er Christian
							der synger og spiller akustisk guitar, mens ham tramper med foden.
							Ingen redigering, ingen overdubs! Albummet gik #1 på den danske
							Vinyl Top-20 og dér blev den liggende flere uger. Den efterfølgende
							akustiske solo turné vandt en Nordic Music Award (Live Prisen 2020).
							Tilbage med bandet på kommende album, LOWER YOUR HAND Efter at have
							fokuseret på 1000 K, og turneret intensivt som solo artist gennem
							2019, er Christian Andersen nu tilbage med fuldt band. Det niende
							album i rækken er klart, og sat til at udkomme 17. september 2021.
							For at fange lyden af et “tight” og sammenspillet band, som har
							rejst Europa tyndt i en tour bus, er albummet indspillet “live i
							studiet” på analoge bånd. Det har været med til at give albummet en
							helt særlig umiddelbarhed og autencitet! LOWER YOUR HAND er mixet af
							Grammy Award-vindende tekniker, Gene Rodrigues i New York. Russell
							er en sand mester i analog lyd og har optaget og mixet musik for en
							lang række internationale stjerner. Gene Rodrigues mixede desuden
							Christian Andersens gennembruds album, GENLYD. Hvis Covid-19
							tillader det, kommer Christian Andersen Band til at turnere intenst
							i 2021/2022 i Denmark, Tyskland, Norge og Sverige, og turnéer i
							Australia, USA og Rumænien er i støbeskeen.'
						/>
						<ArrangementCard
							date="29. okt. 2021"
							title="Sanne Bentsen Solo - Support Emily"
							price="200,00"
							image="/img/sannebentsen.jpg"
							items={["Åbner kl 18.00", "Starter kl 19.30", "Nyhed"]}
						/>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
