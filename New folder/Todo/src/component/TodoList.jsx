import TodoItem from "./TodoItem"
import style from "./todoList.module.css"
export default function TodoList({todos, setTodos}){

    const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done));

    return (
             <div className={style.List}>
                {sortedTodos.map((n)=>(
                // <h1 key={n}>{n}</h1>
                    <TodoItem key={n.name} n={n} todos={todos} setTodos = {setTodos}/>
                ))}

             </div>
    );

} 