import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0a4eff580a0d46779275e4de138d5818";
import style from "./search.module.css"

export default function Search({foodData,setFoodData}){
    const [query, setQuery]= useState("pizza");
    useEffect(()=>{
        async function featchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            //console.log(data.results);      
            setFoodData(data.results);
        
        }
        featchFood()

    },[query]);

    return (
            <div className={style.searchContainer}>
                <input  className={style.input} value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
                                                        
            </div>
    );
}