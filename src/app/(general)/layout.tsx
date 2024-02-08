import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
	return (
		<main className={"flex flex-col items-center p-24"}>
			<span className={"text-lg"}>Section</span>
			{children}
			<hr />
		</main>
	);
}
