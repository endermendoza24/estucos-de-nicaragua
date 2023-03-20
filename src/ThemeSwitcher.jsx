import React, {useState} from "react";
import {IconButton} from "@mui/material";
import {Brightness4, Brightness7} from "@mui/icons-material";


const ThemeSwitcher = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeChange = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="theme-switcher">
			<IconButton onClick={handleThemeChange}>
				{isDarkMode ? <Brightness7/> : <Brightness4/>}
			</IconButton>
			<style>
				{`:root {
          --primary: ${isDarkMode ? "#d5d5d5" : "#38d16a"};
          --secondary: ${isDarkMode ? "#f54ea2" : "#6185a5"};
          --tertiary: ${isDarkMode ? "#6185a5" : "#f54ea2"};
          --dark: ${isDarkMode ? "#08071C" : "#38d16a"};
          --amarillo: ${isDarkMode ? "#d5d5d5" : "#f8f9fe"};
          --hueso: ${isDarkMode ? "#fff" : "#d5d5d5"};
          --blanco: ${isDarkMode ? "#000" : "#fff"};
          --blancoAzulado: ${isDarkMode ? "#38d16a" : "#7F9CB5"};
          --verde: ${isDarkMode ? "#000" : "#38d16a"};
          --negro: ${isDarkMode ? "#fff" : "#000"};
          --background-color: ${isDarkMode ? "#08071C" : "#fff"};
          --text-color: ${isDarkMode ? "#fff" : "#333"};
        }`}
			</style>
		</div>
	);
};

export default ThemeSwitcher;
