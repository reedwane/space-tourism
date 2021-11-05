const Home = (props) => {
	const data = props.data;
	return (
		<div>
			<h1>Home {data.crew[0].name}</h1>
			<p>
				So, you want to travel to Space Let’s face it; if you want to go to
				space, you might as well genuinely go to outer space and not hover kind
				of on the edge of it. Well sit back, and relax because we’ll give you a
				truly out of this world experience!
				<br /> Explore
			</p>
		</div>
	);
};

export default Home;
