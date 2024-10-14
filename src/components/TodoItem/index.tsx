import { ITodo } from "../../lib/types";
import "./TodoItem.css";

interface IPops {
	todo: ITodo;
	onStatusChange: (id: string) => void;
	onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onStatusChange, onDelete }: IPops) => {
	return (
		<>
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => onStatusChange(todo.id)}
				/>
				<label>{todo.text}</label>
				<button onClick={() => onDelete(todo.id)}>&times;</button>
			</li>
		</>
	);
};
