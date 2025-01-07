import { useParams } from "react-router-dom"

export default function Product(){
    const{id}= useParams();
    return (
    <div> 
        
        <h1>Product page</h1> 
        <h1> Showing product id {id} </h1>

    </div>
    )
}