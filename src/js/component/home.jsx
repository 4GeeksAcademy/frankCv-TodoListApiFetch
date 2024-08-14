import TodoList from "./todoList.jsx"
import React, { useState } from "react";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	// const [showDelete,setShowDelete] = useState(false);
	const deleteItem = (deletedTask) => {
		console.log(list);
		console.log(`deleted task` + deletedTask)
		setList([...(list.filter((_, index) => index !== deletedTask))]);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			if (e.target.value !== ``) {
				setList([...list, e.target.value])
				e.target.value = ``
			} else {
				alert(`debe colocar algo en value`)
			}
		}
	}
	const listHandler = () => {
		const li = list.map((toDo, index) =>
			<TodoList key={index} index={index} toDo={toDo} deleteItem={deleteItem} />
		)
		console.log(li)
		return li
	}
	return (
		<form className="form-floating mt-5 shadow-lg" style={{ width: `70%`, margin: `auto` }} onSubmit={handleSubmit}>
			<input type="text" className="form-control border-start border-end" id="floatingInput"
				placeholder="What need's to be done?" style={{ height: `60px`, borderRadius: `0px` }} onKeyDown={handleEnter} />
			<ul className="list-group">
				{listHandler()}
			</ul>
			<i className="fa-regular fa-trash-can"></i>
		</form>
	);
};

export default Home;
