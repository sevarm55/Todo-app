import { useState } from "react";
import "./App.css";
import { TodoFrom } from "./components/TodoFrom";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./lib/types";

function App() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addTodo = (text: string) => {
		setTodos([
			...todos,
			{ text, id: Date.now().toString(), completed: false },
		]);
	};

	const changeStatusTodo = (id: string) => [
		setTodos(
			todos.map((todo) =>
				todo.id == id ? { ...todo, completed: !todo.completed } : todo
			)
		),
	];

	const handleClearComplete = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const handleDelete = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div className='App'>
			<h1>Todos</h1>
			<div className='todo-container'>
				<TodoFrom onAdd={addTodo} />
				<TodoList
					todos={todos}
					onStatusChange={changeStatusTodo}
					onDelete={handleDelete}
					onClearCompleted={handleClearComplete}
				/>
			</div>
		</div>
	);
}

export default App;
