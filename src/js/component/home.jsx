import TodoList from "./todoList.jsx"
import ButtonClear from "./buttonClear.jsx"
import React, { useState, useEffect } from "react";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [task, setTask] = useState([]);
	const deleteItem = (deletedTask) => {
		//console.log(`deleted task` + deletedTask)
		// setList([...(list.filter((_, index) => index !== deletedTask))]);	
		deleteTask(deletedTask);
		setList([...(list.filter((e) => e.id !== deletedTask))]);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
	}
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			if (e.target.value !== ``) {
				createTask();
				console.log(list);
				e.target.value = ``;
				getAllTasks();
			} else {
				getAllTasks();
				alert(`debe colocar algo en value`);
			}
		}
	}
	useEffect(() => {
		getAllTasks();
	}, [])
	function getAllTasks() {
		const URL = 'https://playground.4geeks.com/todo/users/frankCV';
		fetch(
			URL, { method: "GET" }
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.status !== 200) {
					console.log(data.todos)
					setList(data.todos)
				}
				else {
					console.log(`:( no existe el usuario)`)
				}
			})
			.catch((error) => console.log(error))
	}
	// function createTask() {
	// 	const URL = 'https://playground.4geeks.com/todo/todos/frankCV';
	// 	fetch(URL, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			"label": `${task}`,
	// 			"is_done": false
	// 		})
	// 	}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			if (data.status === 201 ) {
	// 				// if (data.id) {
	// 				alert(`succesful add`)
	// 				setList([...list, data])
	// 				// }
	// 			}
	// 		})
	// 		.catch((error) => console.log(error))
	// }

	function createTask() {
		const URL = 'https://playground.4geeks.com/todo/todos/frankCV';
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
				if (data.status === 201 || data.id) {
					// alert('Task added successfully');
					setList([...list, data]);  // Agrega la tarea recién creada al estado
					setTask('');  // Limpia el campo de entrada
				} else {
					alert('Failed to add task');
				}
			})
			.catch((error) => console.log(error))
	}

	function updateTask(id) {
		const URL = `https://playground.4geeks.com/todo/todos/${id}`;
		fetch(URL, {
			method: "PUT",
			headers: {
				"content-type": "text/javascript"
			},
			body: JSON.stringify({
				"label": "string",
				"is_done": true
			})
		})
	}
	function deleteTask(id) {
		const URL = `https://playground.4geeks.com/todo/todos/${id}`;
		fetch(URL, {
			method: "DELETE"
		}
		)
		.then((response) => {
			if (response.status === 204) {
					// alert(`eliminado satisfactoriamente`)
				console.log(`deleted ${id}`)
			}
			else {
				console.log(`el ${id} seleccionado no se encontro y codigo de respuesta es: ${response.status}`)
			}
		})
	}
	function deleteAllTask() {
		list.map((task) => {
			console.log(`you're deleting task ${task.label} which id is: ${task.id}`)
			deleteItem(task.id)
		})
		getAllTasks()
	}
	console.log(list)
	return (
		<form className="form-floating mt-5 shadow-lg" style={{ width: `70%`, margin: `auto` }} onSubmit={handleSubmit}>
			<input type="text" className="form-control border-start border-end" id="floatingInput"
				placeholder="What need's to be done?" style={{ height: `60px`, borderRadius: `0px` }} onKeyDown={handleEnter} onChange={(e) => setTask(e.target.value)} />
			<ul className="list-group">
				{
					list.map((toDo, index) =>
						<TodoList key={index} index={toDo.id} toDo={toDo.label} deleteItem={deleteItem} />
					)
				}
			</ul>
			<i className="fa-regular fa-trash-can"></i>
			<ButtonClear user="frankCV" deleteAllTask={deleteAllTask}></ButtonClear>
		</form>
	);
};

export default Home;
