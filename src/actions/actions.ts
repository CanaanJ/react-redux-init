
export enum ActionType {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
}

/*
 * 其它的常量
 */

export enum VisibilityFilters {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}


// export class ActionTodo {
export function addTodo(text: string): AddAction {
    // return { type: ActionType.ADD_TODO, text }
    return Object.assign({}, new AddAction(ActionType.ADD_TODO, text));
}

export function toggleTodo(index: number): ToggleAction {
    return { type: ActionType.TOGGLE_TODO, index }
    // return new ToggleAction(ActionType.TOGGLE_TODO, index)
}

export function setVisibilityFilter(filter: VisibilityFilters): FilterAction {
    return { type: ActionType.SET_VISIBILITY_FILTER, filter }
    // return new FilterAction(ActionType.SET_VISIBILITY_FILTER, filter);
}
// }

export class Action {
    type: ActionType;
}

export class AddAction extends Action {
    // type: ActionType;
    text: string;
    constructor(a: ActionType, b: string) {
        super();
        this.type = a;
        this.text = b;
    }
}


export class ToggleAction extends Action {
    index: number;
    constructor(a: ActionType, b: number) {
        super();
        this.type = a;
        this.index = b;
    }
}


export class FilterAction extends Action {
    filter: VisibilityFilters;
    constructor(a: ActionType, b: VisibilityFilters) {
        super();
        this.type = a;
        this.filter = b;
    }
}
