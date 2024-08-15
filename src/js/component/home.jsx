import TodoList from "./todoList.jsx"
import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [task, setTask] = useState(``);
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
				//setList([...list, e.target.value]);
				//setTask(e.target.value);
				createTask();
				e.target.value = ``;
			} else {
				alert(`debe colocar algo en value`);
			}
		}
	}
	const listHandler = () => {
		// 		const arr = Object.keys(list).forEach(function(key, index) {
		// 	myObject[key] *= 2;
		//   });
		console.log(`list from listHandler ${list}`);
		const li = list.map((toDo, index) =>
			<TodoList key={index} index={index} toDo={toDo.label} deleteItem={deleteItem} />
		)
		return li
	}
	useEffect(() => {
		getTask();
		//createTask();
	}, [])
	function getTask() {
		const URL = 'https://playground.4geeks.com/todo/users/frankCv';
		fetch(
			URL, { method: "GET" }
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.todos)
				setList(data.todos)
			})
			.catch((error) => console.log(error))
	}
	function createTask() {
		const URL = 'https://playground.4geeks.com/todo/todos/frankCv';
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"label": `${task}`,
				"is_done": false
			})
		}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					alert(`succesful add`)
					setList([...list, data])
				}
			})
			.catch((error) => console.log(error))
	}
	function updateTask() {
		const URL = 'https://playground.4geeks.com/todo/docs#/';
		fetch(URL, {
			method: "GET",
			headers: {
				"content-type": "text/javascript"
			},
			body: JSON.stringify({

			})
		}
		)
	}
	function deleteTask() {
		const URL = 'https://playground.4geeks.com/todo/docs#/';
		fetch(URL, {
			method: "GET",
			headers: {
				"content-type": "text/javascript"
			},
			body: JSON.stringify({
				
			})
		}
		)
	}

	return (
		<form className="form-floating mt-5 shadow-lg" style={{ width: `70%`, margin: `auto` }} onSubmit={handleSubmit}>
			<input type="text" className="form-control border-start border-end" id="floatingInput"
				placeholder="What need's to be done?" style={{ height: `60px`, borderRadius: `0px` }} onKeyDown={handleEnter} onChange={(e) => { setTask(e.target.value) }} />
			<ul className="list-group">
				{listHandler()}
			</ul>
			<i className="fa-regular fa-trash-can"></i>
		</form>
	);
};

export default Home;
