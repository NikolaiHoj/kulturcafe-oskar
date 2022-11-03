import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";

function ContactCard() {
	return (
		<div>
			<h3>Kontakt Bestyrelse</h3>
			<ul>
				<li>Kulturcafé Oskar Kingosvej 5 4321 Søby</li>
				<li>Tlf. xxxxxxxx</li>
				<li>Mail: xxxxxx@gmail.com</li>
			</ul>
		</div>
	);
}

export default function Kontakt() {
	return <MainLayout></MainLayout>;
}
