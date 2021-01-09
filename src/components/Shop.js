import react, { useState, useEffect, useContext} from "react";
import DrinkCard from "./DrinkCard";
import { Link } from "react-router-dom";
import { DrinkContext } from "./DrinkContext";

export default function Shop(){

    const [drinks, setDrinks] = useContext(DrinkContext);

    
    const allDrinks = drinks.map(drink => (
        // <Link to={`/shop/${drink.idDrink}`}><DrinkCard key={drink.idDrink} drink={drink} /></Link>
        // <Link to={`/shop/${drink.idDrink}`}><DrinkCard /></Link>
        <Link to={`/shop/${drink.idDrink}`}>{drink.strDrink}</Link>
    ));

    return (
        <div>
            <h4>Shop page</h4>
            <div className="card-list">
                {allDrinks}

            </div>
        </div>
    )
}