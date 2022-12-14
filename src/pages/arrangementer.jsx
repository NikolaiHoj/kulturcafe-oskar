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
							Musik til alle aldre og smage - kom forbi og h??r vores fantistiske
							artister.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
						<ArrangementCard
							title="Das M??dchen"
							price="285,00"
							items={["??bner 19.00", "Starter 20.00", "St??ende koncert"]}
							date="24. sep. 2021"
							image="/img/madchen.jpg"
							description="Das M??dchen og ???UB40-BigBang Teorien???: Das M??dchen har fra det det
							f??rste undseelige sekund - siden de i 1991, s?? et lille lysglimt i
							UB40??s musik - v??ret i bev??gelse mod noget st??rre! St??rre forst??else
							for UB40??s musik og for at skabe den bedste koncert. St??rre
							musikalsk sp??ndvidde. St??rre indlevelse i hvad publikum ??nsker ??? og
							for hver gang, at g??re en Das M??dchen-koncert til noget st??rre ???
							selv i de mindste sammenh??nge! Det er ikke n??dvendigvis kun et
							sp??rgsm??l om mange og store h??jttalere, lamper og sk??rme ??? men i
							lige s?? h??j grad et sp??rgsm??l om n??rv??r og kontakt til publikum. Et
							sp??rgsm??l om opfindsomhed, intuition - og om at gribe nuet, krydret
							med ydmyghed, humor, fandenivoldsk nerve - og s?? selvf??lgelig ???
							dygtighed og overskud. Efter mere end et kvart ??rhundrede med UB40??s
							fantastiske sange har Das M??dchen fundet deres egen formel p?? at
							l??fte sangene yderligere, s?? de opst??r i en ny dimension i Das
							M??dchens univers ??? men altid uden at miste deres s??rlige UB40-kerne
							og -nerve! Das M??dchen har den fordel, at de kan det med deres
							koncerter ??? som UB40 ikke kan mere i kraft af deres st??rrelse og
							popularitet ??? nemlig lade publikum komme meget t??t p??, og f?? musik
							og band helt ind under huden. N??rkontakten er essentiel for at skabe
							den bedste koncert! Das M??dchen skaber selve braget - eksplosionen i
							sp??ndingsfeltet mellem orkester og publikum - Et UB40-BigBang! Og
							det gnistrer og brager, n??r Das M??dchen g??r p?? cenen. De allerbedste
							UB40-sange gennem snart 40 ??r sat sammen til et koncertforl??b hvor
							publikum ikke p?? noget tidspunkt lades i stikken ??? men inkluderes og
							beriges!"
						/>
						<ArrangementCard
							date="15. okt. 2021"
							title="Christian Andersen Band"
							price="250,00"
							image="/img/christianandersen.jpg"
							items={["??bner kl 19.00", "Starter kl 20.00", "Nyhed"]}
							description='Christian Andersen har en karakteristisk, st??rk
							vokal, en intens guitarstil, og ikke mindst et fantastisk band!
							Christian Andersen er derfor med god grund ??t af Danmarks travleste
							live-navne. 44-??rige Christian Andersen, d??bt Christan H??jbjerg
							Andersen, begyndte at spille guitar da han var 12 ??r gammel i
							R??dekro i S??nderjylland. Allerede som teenager spillede han p?? barer
							og spillesteder i forskellige bands og begyndte desuden allerede h??r
							at skrive sange. Som 16-??rig blev Aarhus hans nye hjemby, og byens
							levende musikliv og jamsessions blev rammen om hans tidlige ungdom.
							I en alder af blot 22 startede han sit eget Christian Andersen Band,
							som udgav det anmelderroste debutalbum ???My Love For The Blues??? i
							2002. Som ung dyrkede Christian Andersen de store amerikanske
							bluesguitarister og soulsangere intenst. Christian har dog altid
							haft en erkendelse af, at den musik han er s?? forelsket i stammer
							fra en tid l??nge f??r han blev f??dt, og fra et sted langt fra
							R??dekro. D??n erkendelse, samt en nysgerrighed p?? andre genrer, og
							hvad der foreg??r musikalsk i den tid vi lever i, har betydet at
							Christian Andersen altid har s??gt sin egen stil og lyd. 2010 blev et
							vendepunkt Christian Andersens tredje album, GENLYD, blev det danske
							gennembrud for den 34-??rige sanger, sangskriver og guitarist. GENLYD
							h??stede 5 hjerter i Politiken, blev ???Ugens Album" p?? P4 og modtog
							tre Nordic Music Awards-nomineringer. Christian vandt senere en
							Nordic Music Award for albummet AWAY (??rets Songwriter Album - 2015)
							GENLYD bringer for alvor Christian Andersen p?? landevejen, og gennem
							de sidste 25 ??r har han, b??de med band og som solo artist, spillet
							over 1500 koncerter i mere end tyve lande. Christian Andersen havde
							desuden ??ren af at spille ???opvarmning??? for sin store helt, BB KING,
							hele tre gange! Syvende album byder p?? duet med Holly Monroe Op
							gennem sine tredivere begynder Christian Andersen at fokusere mere
							intenst p?? sin sangskrivning. Han tager p?? flere ture til Nashville
							for at co-write. Disse ture bliver en stor inspiration for ham og
							ved en co-write session i netop Nashville bliver sangen BEFORE til.
							BEFORE ender som en duet med den engelske verdensstjerne JOSH STEIN,
							og udkommer p?? Christian Andersen Bands 2016 album, DEVIL ON HIS
							WAY. Alene og akustisk Christian udgiver for f??rste gang et helt
							akustisk soloalbum i 2019 med titlen 1000 K. ???Jeg har altid str??bt
							efter at lave sange som kan holde til at blive fremf??rt af bare mig
							selv og en guitar. Alligevel har jeg aldrig udgivet sange p?? den
							m??de. Det er s?? p?? tide nu???, sagde Christian omring udgivelsen. 1000
							K blev en succes. Ni nye originale sange, indspillet p?? den
							???gammeldags??? m??de. Alt hvad man h??rer p?? dette album, er Christian
							der synger og spiller akustisk guitar, mens ham tramper med foden.
							Ingen redigering, ingen overdubs! Albummet gik #1 p?? den danske
							Vinyl Top-20 og d??r blev den liggende flere uger. Den efterf??lgende
							akustiske solo turn?? vandt en Nordic Music Award (Live Prisen 2020).
							Tilbage med bandet p?? kommende album, LOWER YOUR HAND Efter at have
							fokuseret p?? 1000 K, og turneret intensivt som solo artist gennem
							2019, er Christian Andersen nu tilbage med fuldt band. Det niende
							album i r??kken er klart, og sat til at udkomme 17. september 2021.
							For at fange lyden af et ???tight??? og sammenspillet band, som har
							rejst Europa tyndt i en tour bus, er albummet indspillet ???live i
							studiet??? p?? analoge b??nd. Det har v??ret med til at give albummet en
							helt s??rlig umiddelbarhed og autencitet! LOWER YOUR HAND er mixet af
							Grammy Award-vindende tekniker, Gene Rodrigues i New York. Russell
							er en sand mester i analog lyd og har optaget og mixet musik for en
							lang r??kke internationale stjerner. Gene Rodrigues mixede desuden
							Christian Andersens gennembruds album, GENLYD. Hvis Covid-19
							tillader det, kommer Christian Andersen Band til at turnere intenst
							i 2021/2022 i Denmark, Tyskland, Norge og Sverige, og turn??er i
							Australia, USA og Rum??nien er i st??beskeen.'
						/>
						<ArrangementCard
							date="29. okt. 2021"
							title="Sanne Bentsen Solo - Support Emily"
							price="200,00"
							image="/img/sannebentsen.jpg"
							items={["??bner kl 18.00", "Starter kl 19.30", "Nyhed"]}
						/>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
