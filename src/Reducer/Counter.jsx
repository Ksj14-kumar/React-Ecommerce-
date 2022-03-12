import React from 'react'



export const Counter = (state = 0, action = {}) => {
    switch (action.type) {
        case "INC":


            return state + 1

        case "DEC":
            if (state <= 0) {
                return 0

            }
            else {

                return state - 1
            }
        default:
            return state
    }


}




export const Todo = (state = [], action = {}) => {

    switch (action.type) {
        case "AddTask":
            const filterTask = state.some((item) => {
                return item.title === action.payload.title
            })
            if (filterTask) {
                window.alert("task is already exit")
            }
            else {
                return [...state, action.payload]

            }


        case "RemoveTodo":


            const fileterData = state.filter((item) => {
                return item.id !== action.id
            })

            return fileterData

        default:
            return state

    }
}


// const rootReducer = combineReducers(Reducer)
// console.log(rootReducer)

