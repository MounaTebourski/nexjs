"use client";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Toggle from "./toggle/Toggle";
import LocalSwitcher from "../localSwitcher/LocalSwitcher";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>OSHEAGA</div>
			<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
				<Toggle />
				<LocalSwitcher />
				<Links />
			</div>
		</div>
	);
};

export default Navbar;
