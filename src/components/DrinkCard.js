import React, {useContext} from "react";
import {DrinkContext} from "./DrinkContext";


export default function DrinkCard({drink}){
    // const drink = useContext(DrinkContext);
    
    return (
        <div className="card">
            <p>drink</p>
            
            <p>{drink.strDrink}</p>
            {/* <img className="card--image" src={drink.strDrinkThumb} all="problem" width="100px" height="100px"/>
            <p className="card--title">{drink.strDrink}</p>
            <p className="card--glass">{drink.strGlass}</p>
            <p className="card--category">{drink.strCategory}</p>
            <button className="btnAddToCart">Add to Cart</button> */}


        </div>
    )
}   