import { useReducer, useState } from "react";

function Hello (){
    const[count, setCount]=useState(0);
    const[state, dispatch] = useReducer(reducer,{count:0, incrementBy:1 , decrementBy:1});
    function reducer(state,action){
        if(action.type=="increment"){
            return {...state, count:state.count+state.incrementBy};
        } if(action.type=="decrement"){
            return{...state, count:state.count-state.decrementBy};
        }if(action.type=="incrementBy"){
            return{...state, incrementBy:action.payload};
        }
        if(action.type=="decrementBy"){
            return{...state, decrementBy:action.payload};
        }
       }    

    return(
        <div>
            <h1> Hello</h1>
            Use state{count} <br/>
            
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
                    userReducer{state.count}
            <button onClick={()=>dispatch({type:"increment", payload:1})}>IncrementCount</button>
            <button onClick={()=>dispatch({type:"decrement", payload:1})}>DecrementCount</button>
            <input value={state.incrementBy} onChange={(e)=> dispatch({type:"incrementBy", payload:Number(e.target.value)})} />
            <input value={state.decrementBy} onChange={(e)=> dispatch({type:"decrementBy", payload:Number(e.target.value)})} />
        
        </div>

    ) ;
    
} export default Hello ;