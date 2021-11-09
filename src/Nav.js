import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav">
			<img src="assets/shared/logo.svg" alt="logo" />
			<div className="line"></div>
			<ul>
				<li>
					<Link to='/' ><span className="number">00</span> Home</Link>
				</li>
				<li>
					<Link to='destinations/Moon' ><span className="number">01</span> Destinations</Link>	
				</li>
				<li>
					<Link to='crew/Douglas%20Hurley' ><span className="number">02</span> Crew</Link>
				</li>
				<li>
					<Link to='technology/Launch%20vehicle' ><span className="number">03</span> Technology</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
