import style from "./Footer.module.css"
export default function Footer({completedItem, totalItem}){
    return (
        <div className={style.footer}>
            <span className={style.item}> 
                completedTods: {completedItem} 
            </span>
            <span className={style.item}> 
                totalTodos {totalItem} 
            </span>
        </div>
    );
}