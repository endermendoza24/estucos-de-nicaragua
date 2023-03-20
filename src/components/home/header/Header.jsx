import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../../../App.css";
import ThemeSwitcher from "../../../ThemeSwitcher";

const Header = () => {
	const [sidebar, setSidebar] = useState(false);
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		header.classList.toggle("active", window.screenY > 200);
	});
	return (
		<>
			<header className="header">
				<div className="container flex">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="nav">
						<ul className={sidebar ? "nav-links-sidebar" : "nav-links"}
							onClick={() => setSidebar(false)}>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/pages">Pages</Link></li>
							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/portfolio">Blog</Link></li>
							<li><Link to="/contact">Contact</Link></li>
							<li className="icon">
								<SearchOutlinedIcon className="HeaderIcon" />
								<WorkIcon className="HeaderIcon" />
								<GridViewIcon className="HeaderIcon" />
								<div className="switcher"><ThemeSwitcher /></div>
							</li>
						</ul>
					</div>
					<button className="navbar-items-icon" onClick={() => setSidebar(!sidebar)}>
						{sidebar ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;