import { combineReducers } from 'redux';
import { ActionType, VisibilityFilters, Action, AddAction, FilterAction, ToggleAction } from './actions';
import { State, Todo } from './state';


const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp

function todos(state: Array<Todo> = [], action: Action): Array<Todo> {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [
                ...state,
                new Todo((action as AddAction).text)
            ];
        case ActionType.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === (action as ToggleAction).index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state;
    }
}

function visibilityFilter(state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action: Action) {
    switch (action.type) {
        case ActionType.SET_VISIBILITY_FILTER:
            return (action as FilterAction).filter;
        default:
            return state;
    }
}


// class Reducer {

//     static todoApp(state: State = new State(), action: Action): State {
//         return new State(this.visibilityFilter(state.visibilityFilter, action), this.todos(state.todos, action));
//     }

//     private static todos(state: Array<Todo> = [], action: Action): Array<Todo> {
//         switch (action.type) {
//             case ActionType.ADD_TODO:
//                 return [
//                     ...state,
//                     new Todo((action as AddAction).text)
//                 ];
//             case ActionType.TOGGLE_TODO:
//                 return state.map((todo, index) => {
//                     if (index === (action as ToggleAction).index) {
//                         return Object.assign({}, todo, {
//                             completed: !todo.completed
//                         })
//                     }
//                     return todo
//                 })
//             default:
//                 break;
//         }
//     }

//     private static visibilityFilter(state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action: Action) {
//         switch (action.type) {
//             case ActionType.SET_VISIBILITY_FILTER:
//                 return (action as FilterAction).filter;
//             default:
//                 return state;
//         }
//     }
// }