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
import CrewMan from "./partials/CrewMan";
import Tech from "./partials/Tech";

function App() {
	return (
		<Router>
		<div className="App">
			<LoadingContextProvider>
				<DataProvider>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='destinations/*' element={<Destinations />} >
							<Route path=':name' element={<Destination />} />
						</Route>

						<Route path='crew/*' element={<Crew />}>
							<Route path=':name' element={<CrewMan />} />
						</Route>

						<Route path='technology/*' element={<Technology />}>
							<Route path=':name' element={<Tech />} />
						</Route>

						<Route path='*' element={<Home />} />

					</Routes>
					
				</DataProvider>
			</LoadingContextProvider>
			
		</div>
		</Router>
	);
}

export default App;
