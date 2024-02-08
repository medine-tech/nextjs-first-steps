"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import styles from "./link.module.css";

interface ActiveLinkProps extends HTMLAttributes<HTMLAnchorElement> {
	label: string;
	href: string;
}

export const ActiveLink = ({ label, href, className }: ActiveLinkProps) => {
	const pathname = usePathname();

	return (
		<Link
			className={cn(styles["link"], pathname === href && styles["active-link"], className)}
			href={href}
		>
			{label}
		</Link>
	);
};
