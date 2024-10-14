import { useState } from "react";
import { IFilterTypes, ITodo } from "../../lib/types";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

interface IPops {
	todos: ITodo[];
	onStatusChange: (id: string) => void;
	onDelete: (id: string) => void;
	onClearCompleted: () => void;
}

export const TodoList = ({
	todos,
	onStatusChange,
	onDelete,
	onClearCompleted,
}: IPops) => {
	const [currentFilter, setCurrentFilter] = useState<IFilterTypes | null>(
		IFilterTypes.ALl
	);

	let filtered = todos;
	if (currentFilter === IFilterTypes.Active) {
		filtered = todos.filter((todo) => !todo.completed);
	} else if (currentFilter == IFilterTypes.Completed) {
		filtered = todos.filter((todo) => todo.completed);
	}

	return (
		<>
			<ul className='todo-list'>
				{filtered.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onStatusChange={onStatusChange}
						onDelete={onDelete}
					/>
				))}
			</ul>
			<div className='todo-footer'>
				<span className="span">
					{todos.filter((todo) => !todo.completed).length} items left
				</span>
				<div className='filters'>
					<button
						onClick={() => setCurrentFilter(IFilterTypes.ALl)}
						className={
							currentFilter === IFilterTypes.ALl ? "active" : ""
						}
					>
						All
					</button>
					<button
						onClick={() => setCurrentFilter(IFilterTypes.Active)}
						className={
							currentFilter === IFilterTypes.Active
								? "active"
								: ""
						}
					>
						Active
					</button>
					<button
						onClick={() => setCurrentFilter(IFilterTypes.Completed)}
						className={
							currentFilter === IFilterTypes.Completed
								? "active"
								: ""
						}
					>
						Completed
					</button>
				</div>
				<button onClick={onClearCompleted} className='clear-completed'>
					Clear completed
				</button>
			</div>
		</>
	);
};
