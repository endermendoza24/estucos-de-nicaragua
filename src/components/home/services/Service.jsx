import React from "react";
import servicesData from "./ServicesData";

const Service = () => {
	return (
		<>
			<div className="services topMargin">
				<div className="container">
					<div className="heading">
						<h3>OUR SERVICES</h3>
						<h1>Interactive services offered me</h1>
					</div>
					<div className="contain grid topMargin">
						{
							servicesData.map((val) => {
								return (
									<>
										<div className="box">
											<div className="img">
												<img src={val.cover} alt={val.title}/>
											</div>
											<div className="text">
												<h2>{val.title}</h2>
												<p>{val.desc}</p>
											</div>
										</div>
									</>
								);
							})
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;