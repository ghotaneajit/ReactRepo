import { useReducer, useState } from "react";

export default function Bank(){
    function reducer(state,action){
        if(action.type=="Deposite"){
            return {...state, balance:state.balance + action.payload}
        }
        if(action.type=="Withdraw"){
            return {...state, balance:state.balance - action.payload}
        }
    }

const[state, dispatch] = useReducer(reducer,{balance:0});
const[amount, setAmount] = useState(0);

    
    return(
                <div>
                        {state.balance}
                    <input type="text" onChange={(e)=>setAmount(e.target.value)} value={amount} name="" id=""/>
                    <button onClick={()=>dispatch({type:"Deposite", payload:Number(amount)})}>Deposite</button>
                    <button onClick={()=>dispatch({type:"Withdraw", payload:Number(amount)})}>Withdraw</button>

                </div>
            );
}