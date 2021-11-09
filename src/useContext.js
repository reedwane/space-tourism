import { useState, createContext } from "react";

const useContext = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(false);
	const [view, setView] = useState();

	fetch("data.json")
		.then((res) => res.json())
		.then((result) => {
			setData(result);
			setLoading(false);
			setView(0);
		})
		.catch((err) => console.log(err));

	const contexts = { data, loading, view };

	const DataContext = createContext(contexts);

	return { contexts, DataContext };
};

export default useContext;
