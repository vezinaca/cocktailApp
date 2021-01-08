import react, { useState, useEffect, createContext} from "react";

export const DrinkContext = createContext();



export function DrinkProvider(props){

    const [drinks, setDrinks] = useState([]);

    async function getCategories() {
        
        const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        

        // Wait for response and return JSON
        const categories = await apiResponse.json();
        console.log(categories.drinks);
        setDrinks(categories.drinks);
    }



    useEffect(() => {
        getCategories();
        
    }, [])

   
    return (
        <DrinkContext.Provider value={[drinks, setDrinks]}>
            {props.children}
        </DrinkContext.Provider>

    )
}