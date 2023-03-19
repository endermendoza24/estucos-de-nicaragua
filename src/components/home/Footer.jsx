import React from "react";
import logo1 from "../../assets/logo1.png";

const Footer = () => {
	let dateObj = new Date();
	let currentYear = dateObj.getFullYear();
	return (
		<>
			<footer>
				<div className="container grid1">
					<div className="box">
						<img src={logo1} alt="Logo"/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.</p>
						<div className="socialIcon">
							<i className="fab fa-facebook-f facebook"></i>
							<i className="fab fa-instagram instagram"></i>
							<i className="fab fa-twitter twitter"></i>
							<i className="fab fa-youtube youtube"></i>
						</div>
					</div>

					<div className="box">
						<h2>Quick Links</h2>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Portfolio</li>
							<li>News</li>
							<li>Contact</li>
							<li>FAQ's</li>
						</ul>
					</div>

					<div className="box">
						<h2>Recent Post</h2>
						<div className="text">
							<p>3 WooCommerce Plugins to Boost Sales</p>
							<span> 28 Feb 2019</span>
						</div>
						<div className="text">
							<p>3 WooCommerce Plugins to Boost Sales</p>
							<span> 28 Feb 2019</span>
						</div>
						<div className="text">
							<p>3 WooCommerce Plugins to Boost Sales</p>
							<span> 28 Feb 2019</span>
						</div>
					</div>

					<div className="box">
						<h2>Get in Touch</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
						<div className="icon">
							<i class="fa-solid fa-location-dot"></i>
							<label>Location:27 Division St, New York, NY 10002, USA</label>
						</div>
						<div className="icon">
							<i class="fa fa-phone"></i>
							<label>Phone:+44 014799584</label>
						</div>
						<div className="icon">
							<i class="fa fa-envelope"></i>
							<label>Email:support@fleja.com</label>
						</div>
					</div>
				</div>
				<div className="legal container">
					<p>Copyright {currentYear}. All rights reserved.</p>
					<label>
						Design & Developed by <span>GorkCoder</span>
					</label>
				</div>
			</footer>
		</>
	);
};

export default Footer;