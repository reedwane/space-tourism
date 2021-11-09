import { useLoadingContext } from "../Context/loadingContext";

const Loading = () => {
    const isLoading = useLoadingContext();
    return isLoading ? 
        (<div>
            <h1>Loading...</h1>
        </div> )
    : null
}
 
export default Loading;