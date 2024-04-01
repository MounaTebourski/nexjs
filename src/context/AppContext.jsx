"use client";

import { createContext, useState, useContext, useEffect } from "react";

const themes = {
	dark: {
		backgroundColor: "black",
		color: "white",
	},
	light: {
		backgroundColor: "white",
		color: "black",
	},
};

export const AppContext = createContext({ isDark: false });

const getFromLocalStorage = () => {
	if (typeof window !== "undefined") {
		const value = localStorage.getItem("theme");
		return value || "light";
	}
};

export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return getFromLocalStorage();
	});

	const toggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<AppContext.Provider value={{ theme, toggle }}>
			{children}
		</AppContext.Provider>
	);
};
