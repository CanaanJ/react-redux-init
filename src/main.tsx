import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { Hello } from './components/Hello';
import { store } from './actions/store';
import { addTodo } from './actions/actions';

store.dispatch(addTodo("asdasdasd"))
ReactDOM.render(
    <Hello />,
    document.getElementById("example")
)
