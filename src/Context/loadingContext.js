import { createContext, useContext, useState } from "react";

// https://www.telerik.com/blogs/how-to-use-context-api-with-hooks-efficiently-while-avoiding-performance-bottlenecks

const LoadingContext = createContext();

const SetLoadingContext = createContext();

export const useLoadingContext = () => {
   const context = useContext(LoadingContext);
   return context;
} 

export const useSetLoadingContext = () => {
    const context = useContext(SetLoadingContext);
    return context;
 } 

const LoadingContextProvider = props => {
    const [isLoading, setLoading] = useState(false);

    return(
        <LoadingContext.Provider value={isLoading}>
            <SetLoadingContext.Provider value={setLoading}>
                {props.children}
            </SetLoadingContext.Provider>
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider;