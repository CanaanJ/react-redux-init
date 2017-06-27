import * as React from 'react';
import { createStore } from 'redux';
import todoApp from '../actions/reducer';
import { store } from '../actions/store';

export interface HelloProps { }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        console.log(store.getState());
        return <h1>Hello Word!</h1>;
    }
}