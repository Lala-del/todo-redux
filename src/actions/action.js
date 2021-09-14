import *  as types from "./actionTypes";

export const completeToDo = (todo) => ({
    type: types.COMPLETE_TODO,
    payload: todo,
});


export const addToDo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo,
});

export const removeTodo =(todo) => ({
    type:types.REMOVE_TODO,
    payload:todo,
})