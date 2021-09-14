import React, {useState} from 'react'
import { CSSTransition,  TransitionGroup} from 'react-transition-group'
import './Todo.css'

const ToDo = ({toggleTodo,task,completed,id,removeTodo}) => {
    return (
        <div>
            <TransitionGroup className = {completed ? 'Todo completed' : "Todo"}>
                <CSSTransition>
                    <li className = "Todo-task" onClick={toggleTodo}>
                        {task}
                    </li>
                </CSSTransition>
                <div className="Todo-buttons">
                    <button onClick={removeTodo}>
                    <i class="fas fa-trash"></i>
                    </button>
                </div>
            </TransitionGroup>
        </div>
    )
}

export default ToDo
