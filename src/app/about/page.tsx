import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "First Steps with Next.js - About Page",
	description: "Description of the About Page by medine.tech",
};

export default function AboutPage() {
	return (
		<>
			<h1 className={"text-7xl"}>About Page</h1>
			<hr />
		</>
	);
}
