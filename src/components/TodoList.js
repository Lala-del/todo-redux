import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'
import './TodoList.css'
import { CSSTransition, cssTransition, TransitionGroup} from 'react-transition-group'
import {useSelector, useDispatch} from 'react-redux'
import { completeToDo, addToDo, removeTodo } from '../actions/action'



const TodoList = () => {
    const state = useSelector((state) => ({...state.todos}))
    const dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addToDo(newTodo));
    };

    return (
        <div className = "TodoList">
            <h1>To do app Redux</h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className = "todo-list">
                    {state.todos && state.todos.map((todo) => {
                        return(
                            <CSSTransition key={todo.id} className='todo'>
                                <Todo key={todo.id} 
                                id={todo.id}
                                task={todo.task} 
                                completed={todo.completed}
                                toggleTodo = {() => dispatch(completeToDo(todo))}
                                removeTodo = {() => dispatch(removeTodo(todo))}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList
