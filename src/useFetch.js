import { useEffect, useState} from "react";
import { useLoadingContext, useSetLoadingContext } from "./Context/loadingContext";

const useFetch = () => {
	const loading = useLoadingContext();
	console.log(loading);
	const setLoading = useSetLoadingContext();
	const [data, setData] = useState(false);
	const [view, setView] = useState();

	useEffect(() => { 
		if(localStorage.getItem("data")){
			setData(JSON.parse(localStorage.getItem("data")));
		}else{
			(async () => {
				try {
					setLoading(true);
					const fetched = await fetch('data.json');
					const result = await fetched.json();
					setData(result);
					setLoading(false);
					setView(0);
					localStorage.setItem("data", JSON.stringify(result));
				} catch (error) {
					console.log(error)
				}
		})()
		}
		
	}, [setLoading])

	const contexts = { data, view, setView };
	return contexts;
};

export default useFetch;
