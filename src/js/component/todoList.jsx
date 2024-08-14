import React, { useState } from "react";
const TodoList = ({ index, toDo, deleteItem }) => {
    const [deleteIconShow, setDeleteIconShow] = useState(`hidden`);
    const mouseEnterHandler = (e) => {
        setDeleteIconShow(`visible`)
        console.log(e.target)
        console.log(`paso a: ${deleteIconShow}`)
    }
    const mouseLeaveHandler = () => {
        setDeleteIconShow(`hidden`)
    }
    const xd = () => {
        deleteItem(index);
        console.log()
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