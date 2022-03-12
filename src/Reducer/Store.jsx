import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Counter, Todo } from './Counter'
import { Products } from './products/Reducer'
import { CartReducer } from './cart/Reducer';




const rootReducer = combineReducers(
    {
        counter: Counter, todo: Todo, product: Products,
        cartReducer: CartReducer

    })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;


