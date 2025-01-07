import style from "./toIteam.module.css"
export default function TodoItem({n, todos, setTodos}){
    function handleDelete(n){
        console.log("Item deleted ", n);
        setTodos(todos.filter((todo)=> todo !== n));
    }
    function handleClick(n){
        const newTodos =todos.map((todo)=> todo.name===n ?{...todo,done:!todo.done}:todo);
        setTodos(newTodos);
       
    }

    const  className = n.done?style.completed:"";
    return (
        <div className={style.Item}>
        <div className={style.ItemName} >
            <span className={className} onClick={()=>{handleClick(n.name)}}>{n.name}</span>
            <span>
            <button onClick={()=>{handleDelete(n)}} className={style.deleteButton}>x</button>
            </span>
        
        </div>
        <hr className={style.line}/>
        </div>
);    

}