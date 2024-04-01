"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Styles from "./links.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";

const links = [
	{
		titleEn: "Home",
		titleFr: "Accueil",
		path: "",
	},
	{
		titleEn: "Events",
		titleFr: "Evenements",
		path: "/events",
	},
	{
		titleEn: "Contact",
		titleFr: "Contact",
		path: "/contact",
	},
];

const Links = () => {
	const pathName = usePathname();
	const [open, setOpen] = useState(false);
	const localActive = useLocale();

	return (
		<div className={Styles.container}>
			<div className={Styles.links}>
				{links.map((link, index) => (
					<Link
						className={
							pathName === "/" + localActive + link.path
								? `${Styles.active}`
								: ""
						}
						href={"/" + localActive + link.path}
						key={index}
					>
						{localActive === "en" ? link.titleEn : link.titleFr}
					</Link>
				))}
			</div>

			<Image
				className={Styles.menuButton}
				src="/menu.png"
				alt="menu"
				width={30}
				height={30}
				onClick={() => setOpen(!open)}
			/>
			{open && (
				<div className={Styles.mobileLinks}>
					{links.map((link, index) => (
						<Link
							className={
								pathName === "/" + localActive + link.path
									? `${Styles.active}`
									: ""
							}
							href={"/" + localActive + link.path}
							key={index}
							onClick={() => setOpen(!open)}
						>
							{localActive === "en" ? link.titleEn : link.titleFr}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
