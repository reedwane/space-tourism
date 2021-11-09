import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from "./Context/dataContext";
import Home from "./Home";
import Nav from "./Nav";
import Destinations from "./Destinations";
import Technology from "./Technology";
import Crew from "./Crew";
import Destination from "./partials/Destination";
import LoadingContextProvider from "./Context/loadingContext";

function App() {
	return (
		<Router>
		<div className="App">
			<LoadingContextProvider>
				<DataProvider>
					<Nav />
					<Routes>
						<Route exact path='/' element={<Home />} />

						<Route exact path='destinations/*' element={<Destinations />} >
							<Route path=':name' element={<Destination />} />
						</Route>

						<Route exact path='crew' element={<Crew />} />
						<Route exact path='technology' element={<Technology />} />
						<Route exact path='*' element={<Home />} />

					</Routes>
					
				</DataProvider>
			</LoadingContextProvider>
			
		</div>
		</Router>
	);
}

export default App;
