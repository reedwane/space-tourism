import "./App.css";
import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(false);
	fetch("data.json")
		.then((res) => res.json())
		.then((result) => {
			setData(result);
			setLoading(false);
		})
		.catch((err) => console.log(err));

	return (
		<div className="App">
			<Nav />
			{loading && <p>Loading...</p>}
			{data && <Home data={data} />}
		</div>
	);
}

export default App;
