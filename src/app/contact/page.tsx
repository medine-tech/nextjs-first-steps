import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "First Steps with Next.js - Contact Page",
	description: "Contact Page by medine.tech",
};

export default function ContactPage() {
	return (
		<>
			<h1 className={"text-7xl"}>Contact Page</h1>
			<hr />
		</>
	);
}
