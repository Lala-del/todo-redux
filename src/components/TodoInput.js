import React, {useState} from 'react'
import './TodoInput.css'

const TodoInput = ({createTodo}) => {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };
    return (
        <div>
            <form className = "TodoInput"  onSubmit={handleSubmit}>
               <input type = "text" placeholder="Enter task" id="task" name="task" value = {task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button>Add</button>
            </form>
        </div>
    )
}

export default TodoInput
