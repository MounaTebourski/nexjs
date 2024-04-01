"use client";
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppContext } from "@/context/AppContext";

const Toggle = () => {
	const { toggle, theme } = useContext(AppContext);

	return (
		<div>
			<IconButton
				style={{ color: "white" }}
				aria-label="Theme"
				onClick={toggle}
			>
				{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
			</IconButton>
		</div>
	);
};

export default Toggle;
