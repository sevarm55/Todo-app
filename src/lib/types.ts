export interface ITodo {
	id: string;
	text: string;
	completed: boolean;
}

export enum IFilterTypes {
	ALl = "all",
	Active = "active",
	Completed = "completed",
}
