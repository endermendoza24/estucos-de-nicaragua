import React from "react";
import work1 from "../../../assets/work/work1.jpg";
import work2 from "../../../assets/work/work2.jpg";
import work3 from "../../../assets/work/work3.jpg";
import work4 from "../../../assets/work/work4.jpg";
import work5 from "../../../assets/work/work5.jpg";
import work6 from "../../../assets/work/work6.jpg";

const Work = () => {
	const Data = [
		{
			id: 1,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work1,
		},
		{
			id: 2,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work2,
		},
		{
			id: 3,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work3,
		},
		{
			id: 4,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work4,
		},
		{
			id: 5,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work5,
		},
		{
			id: 6,
			title: "Digital Marketing",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			cover: work6,
		},
	];
	return (
		<>
			<section className="work">
				<div className="heading">
					<h3>My WORKS</h3>
					<h1>Some of my competeid works</h1>
				</div>
				<div className="content">
					{
						Data.map((val) => {
							return (
								<>
									<div className="box">
										<div className="img">
											<img src={val.cover} alt={val.title}/>
										</div>
										<div className="overlay">
											<div className="text">
												<h2>{val.title}</h2>
												<p>{val.desc}</p>
											</div>
										</div>
									</div>
								</>
							);
						})
					}
				</div>
			</section>
		</>
	);
};

export default Work;