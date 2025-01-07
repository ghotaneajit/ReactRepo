import { Link, useNavigate } from "react-router-dom";

export default function Homepage(){
            const navigate = useNavigate();
    function handleClick(){
        navigate("/Product/profile")
    }
    return(

        <div>
                <h1> This is the homePage</h1>
                <button onClick={handleClick}>Go to Profile page</button>
                
        </div>
    );
}