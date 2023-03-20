import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeSwitcher = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// useEffect(() => {
	// 	const hour = new Date().getHours();

	// 	if (hour >= 18 || hour <= 6) {
	// 		setIsDarkMode(true);
	// 	}
	// }, []);

	const handleThemeChange = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="theme-switcher">
			<IconButton className="icon-button" onClick={handleThemeChange}>
				{isDarkMode ? <Brightness7 /> : <Brightness4 />}
			</IconButton>
			<style>
				{`:root {
          --primary: ${isDarkMode ? "#d5d5d5" : "#38d16a"};
          --secondary: ${isDarkMode ? "#6185a5" : "#f54ea2"};
          --tertiary: ${isDarkMode ? "#6185a5" : "#f54ea2"};		  
          --dark: ${isDarkMode ? "#d5d5d5" : "#38d16a"};          
          --blanco: ${isDarkMode ? "#000" : "#fff"};    
          --negro: ${isDarkMode ? "#fff" : "#000"};
          --background-color: ${isDarkMode ? "#000" : "#fff"};
          --texto-fondo: ${isDarkMode ? "#fff" : "#000"};
        }`}
			</style>
		</div>
	);
};

export default ThemeSwitcher;
