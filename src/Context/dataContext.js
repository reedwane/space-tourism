import { createContext } from "react";
import useFetch from "../useFetch";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const contexts = useFetch();
    return(
        <DataContext.Provider value={contexts}>
            {children}
        </DataContext.Provider>
    )
}