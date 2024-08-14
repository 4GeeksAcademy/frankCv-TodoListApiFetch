import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
const TodoList = ({ list, deleteItem }) => {
    //const [deleteIconShow, setDeleteIconShow] = useState(false);
    // onMouseEnter={setDeleteIconShow(true)}
    // onMouseLeave={setDeleteIconShow(false)} 
    // style={{ display: deleteIconShow ? `block` : `none` }}
    return (
        <ul className="list-group">
            {list.map((toDo, index) => (
                <li key={index} className="list-group-item">
                    <div className="container d-flex justify-content-between align-items-center">
                        {toDo}
                        <i className="fa-solid fa-circle zzz" onClick={(_) => {
                            deleteItem(index)
                        }}></i>
                        
                        {/* <TiDeleteOutline className="fs-4 zzz"                            
                        /> */}
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default TodoList;