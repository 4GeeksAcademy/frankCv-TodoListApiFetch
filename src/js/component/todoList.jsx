import React, { useState } from "react";
const TodoList = ({ index, toDo, deleteItem }) => {
    const [IconShow, setIconShow] = useState(`hidden`);
    const mouseEnterHandler = (e) => {
        setIconShow(`visible`)
    }
    const mouseLeaveHandler = () => {
        setIconShow(`hidden`)
    }
    return (
        <li className="list-group-item" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <div className="container d-flex justify-content-between align-items-center">
                {toDo}
                <i className="fa-solid fa-trash"
                    style={{ visibility: IconShow }}
                    onClick={() => deleteItem(index)}
                ></i>             
            </div>
        </li>
    )
}
export default TodoList;