import { useEffect, useState} from "react";
import { useSetLoadingContext } from "./Context/loadingContext";

const useFetch = () => {
	const setLoading = useSetLoadingContext();
	const [data, setData] = useState(false);
	const [view, setView] = useState();

	useEffect(() => { 
		(async () => {
			try {
				setLoading(true);
				const fetched = await fetch('data.json');
				setData(await fetched.json());
				setLoading(false);
				setView(0);
			} catch (error) {
				console.log(error)
			}
	})()
	}, [setLoading])

	const contexts = { data, view, setView };
	return contexts;
};

export default useFetch;
