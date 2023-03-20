import React from "react";
import Home from "../home/homes/Home";
import Branding from "../home/Branding";
import About from "../home/about/About";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";
import WrapperOne from "../home/WrapperOne";
import Service from "../home/services/Service";
import Footer from "../home/Footer";
import Blog from "../home/work/blog/Blog";
import Work from "../home/work/Work";
import ThemeSwitcher from "../../ThemeSwitcher";

export default function HomePages() {
	return (
		<>
			<Home />
			<Branding />
			<About />
			<Service />
			<Wrapper />
			<Skill />
			<WrapperOne />
			<Blog />
			<Work />
			<Footer />
		</>
	);
}
