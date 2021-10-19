import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import Button from '@material-ui/core/Button'
const TodoList = ({todos,checkItem,eraseItem,EditTask,setTodos}) => {
    function deleteChecked(){
        var tempTodos=[...todos]
        tempTodos=todos.filter(todo=>(todo.checked!==true))
        setTodos(tempTodos)
    }
    return(
        <div className="todoList">
        {todos.map((todo)=>(
        <TodoItem key={uuidv4()} todo={todo} checkItem={checkItem} eraseItem={eraseItem} EditTask={EditTask}/> 
        ))
        }
        {todos.length!==0?(<Button onClick={deleteChecked} style={{color:"white",backgroundColor:'#4DAA57',}} className="clearAll">Clear Done</Button>):''}
        </div>
    )    
}

export default TodoList
