import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import useContext from "./useContext";

function App() {
	const { DataContext, contexts } = useContext();
	const { data, loading, view } = contexts;
	console.log(data);
	return (
		<div className="App">
			<DataContext.Provider value={contexts}>
				<Nav />
				<div className="display" context={contexts}>
					{loading && <p>Loading...</p>}
					{data && <Home />}
				</div>
			</DataContext.Provider>
		</div>
	);
}

export default App;
