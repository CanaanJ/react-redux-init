import { VisibilityFilters } from './actions';
export class State {
    visibilityFilter: VisibilityFilters;
    todos: Array<Todo>;
    constructor(f: VisibilityFilters = VisibilityFilters.SHOW_ALL, t: Array<Todo> = []) {
        this.visibilityFilter = f;
        this.todos = t;
    }
}

export class Todo {
    text: string;
    completed: boolean;
    constructor(t: string = "", c: boolean = false) {
        this.text = t;
        this.completed = c;
    }
}