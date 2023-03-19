import React from 'react';
import home from "../../../assets/home.png";

const Home = () => {
  return (
    <>
	<section className="home">
		<div className="container flex">
			<div className="left">
				<div className="img">
					<img src={home} alt="Home"/>
				</div>
			</div>
			<div className="right topMargin">
				<h1>I am <br/>
				web designer
				</h1>
				<div className="socialIcon">
					<i className="fab fa-facebook-f facebook"></i>
					<i className="fab fa-instagram instagram"></i>
					<i className="fab fa-twitter twitter"></i>
					<i className="fab fa-youtube youtube"></i>
					<i className="fab fa-pinterest pinterest"></i>
					<i className="fab fa-github github"></i>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Dicta obcaecati quibusdam recusandae repellendus voluptas
					voluptatem. Commodi dolorem facere molestias officiis!</p>
				<button className='primary-btn'>Contact US</button>
			</div>
		</div>
	</section>
	</>
  )
}

export default Home