import react, { useState, useEffect} from "react";
import DrinkCard from "./DrinkCard";
import { Link } from "react-router-dom";

export default function Shop(){

    const [drinks, setDrinks] = useState([]);

    async function getCategories() {
        //const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        //apiResponse.addHeader("Access-Control-Allow-Origin", "http://www.thecocktaildb.com");

        // Wait for response and return JSON
        const categories = await apiResponse.json();
        console.log(categories.drinks);
        setDrinks(categories.drinks);
    }

    // function getNba(){
    //     fetch("https://api-nba-v1.p.rapidapi.com/standings/%7Bleague%7D/%7Bseasonyear%7D/conference/%7Bconference%7D", {
    //         method: "GET",
    //         headers: new Headers( {
    //             "x-rapidapi-key": "53923b1ca8mshbc7aa327cacf4dbp1e58adjsneaf99e453d16",
    //             "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    //         })
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }

    useEffect(() => {
        getCategories();
        
    }, [])

    const allDrinks = drinks.map(drink => (
        <Link to={`/shop/${drink.idDrink}`}><DrinkCard key={drink.idDrink} drink={drink} /></Link>)
        )

    return (
        <div>
            <h4>Shop page</h4>
            <div className="card-list">
                {allDrinks}

            </div>
        </div>
    )
}