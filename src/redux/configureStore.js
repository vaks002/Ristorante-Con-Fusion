import { createStore } from 'redux';
import {Reducer , initialState } from './reducer';

export const ConfigureState = () => {

    const store = createStore(
        Reducer,
        initialState
    );

    return store; 
}