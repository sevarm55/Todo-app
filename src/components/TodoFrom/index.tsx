import { useState } from "react";
import "./TodoForm.css";

interface IPops {
	onAdd: (text: string) => void;
}

export const TodoFrom = ({ onAdd }: IPops) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleSubimt = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(inputValue.trim()) {
      onAdd(inputValue)
      setInputValue('')
    }
	};

	return (
		<>
			<form onSubmit={handleSubimt}>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='What needs to be done?'
          className="todo-input"
				/>
			</form>
		</>
	);
};
