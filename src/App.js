import React from "react";
import TodoList from './components/TodoList'
import {useSelector} from 'react-redux'

function App() {
   const state = useSelector((state) => ({...state}));
   console.log('state',state);
  return (
    <div className="App">
        <TodoList/>
    </div>
  );
}

export default App;
