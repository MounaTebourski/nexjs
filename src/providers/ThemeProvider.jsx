"use client";

import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
	const { theme } = useContext(AppContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		return <div className={theme}>{children}</div>;
	}
};

export default ThemeProvider;
