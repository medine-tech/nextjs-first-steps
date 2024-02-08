import { ReactNode } from "react";

import { Navbar } from "@/sections/shared/ui/navbar";

export default function GeneralLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<main className={"flex flex-col items-center p-24"}>
				<span className={"text-lg"}>Section</span>
				{children}
				<hr />
			</main>
		</>
	);
}
