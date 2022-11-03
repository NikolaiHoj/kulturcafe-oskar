import clsx from "clsx";
import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function MainLayout({ children, className }) {
	return (
		<>
			<Header />
			<main className={clsx("min-h-screen w-full overflow-hidden", className)}>
				{children}
			</main>
			<Footer />
		</>
	);
}
