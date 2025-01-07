import { useEffect, useState } from "react";


export default function FoodDetail({foodId}){
    const[food, setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "0a4eff580a0d46779275e4de138d5818";
    
    useEffect(()=>{
        async function featchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}&includeNutrition=true`);
            const data = await  res.json();
            console.log(data);
            setFood(data);
              
        } featchFood()
    }, [foodId])
    return(
        <div>
            <div> 
                <h1>{food.title}</h1>
                <img src={food.image}/>
             </div>
             <span>
                <strong>🕤{food.readyInMinutes} MIN</strong>
             </span>
             <span>
                {food.vegetarian ? "🥕 vegetarian" : "🍖 Non-vegetarian"}
             </span>
        </div> 
    );
}