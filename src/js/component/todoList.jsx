import React, { useState } from "react";
const TodoList = ({ index, toDo, deleteItem }) => {
    console.log(`toDo Here is : ${toDo}`);
    const [deleteIconShow, setDeleteIconShow] = useState(`hidden`);
    const mouseEnterHandler = (e) => {
        setDeleteIconShow(`visible`)
    }
    const mouseLeaveHandler = () => {
        setDeleteIconShow(`hidden`)
    }
    const xd = () => {
        deleteItem(index);
    }
    return (
        <li className="list-group-item" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <div className="container d-flex justify-content-between align-items-center">
                {toDo}
                <i className="fa-solid fa-trash"
                    style={{ visibility: deleteIconShow }}
                    onClick={xd}
                ></i>
            </div>
        </li>
    )
}
export default TodoList;