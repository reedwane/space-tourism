const Nav = () => {
	return (
		<div className="nav">
			<img src="assets/shared/logo.svg" alt="logo" />
			<div className="line"></div>
			<ul>
				<li>
					<span className="number">00</span> Home
				</li>
				<li>
					<span className="number">01</span> Destinations
				</li>
				<li>
					<span className="number">02</span> Crew
				</li>
				<li>
					<span className="number">03</span> Technology
				</li>
			</ul>
		</div>
	);
};

export default Nav;
