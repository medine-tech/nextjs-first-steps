import { Home } from "lucide-react";
import Link from "next/link";

import { ActiveLink } from "@/sections/shared/ui/link";

const navItems = [
	{ label: "About", href: "/about" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Contact", href: "/contact" },
];

export const Navbar = () => {
	return (
		<div className={"flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded"}>
			<Link href={"/"} className={"flex items-center"}>
				<Home className={"w-6 h-6 mr-2"} />
				<span>Home</span>
			</Link>

			<div className={"flex-1"}></div>

			{navItems.map((item) => (
				<ActiveLink key={item.href} {...item} />
			))}
		</div>
	);
};
