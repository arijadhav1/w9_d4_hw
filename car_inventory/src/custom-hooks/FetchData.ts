import React, {useState, useEffect} from "react";
import { serverCalls } from '../api';
import { CarState } from "../redux/slices/rootSlice";
// import our Drone Interface


export const useGetData = () => {
    const [carData, setData] = useState<CarState[]>([]); 

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {carData, getData: handleDataFetch}
}

export const darkMode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
  };
//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>Hello, world!</h1>
//     </div>
//   );
}