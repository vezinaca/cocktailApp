import React, {useContext} from "react";
import {DrinkContext} from "./DrinkContext";


export default function DrinkCard({ match }){

    // if (match === null) console.log('cest null');
    // else console.log('cest pas null');
    // console.log(match.params.id);

    // const drink = useContext(DrinkContext);
    const [drinks, setDrinks] = useContext(DrinkContext);

    let drink = {};

    drinks.forEach( currentDrink => {
        if (match.params.id === currentDrink.idDrink){
            console.log(currentDrink);
            drink = currentDrink;
            return;
        } 
    });

    //console.log('this drink', drink)

    //console.log('dans card: ', drinks);
    // console.log ('id dans card: ', match.params);
    console.log("mon drink: ", drink)
    console.log("chapeau");
    return (
        <div className="card">
            <p>drink card</p>
            
            <p>{drink.strDrink}</p> 
            
            <img className="card--image" src={drink.strDrinkThumb} all="problem" width="100px" height="100px"/>
            <p className="card--title">{drink.strDrink}</p>
            <p className="card--glass">{drink.strGlass}</p>
            <p className="card--category">{drink.strCategory}</p>
            <button className="btnAddToCart">Add to Cart</button>


        </div>
    )
}   