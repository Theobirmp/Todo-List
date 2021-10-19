import './App.css';
import { v4 as uuidv4 } from 'uuid';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';
import EditTaskPopup from './components/EditTaskPopup';
import { useState } from 'react';



function App() {
  const [inputText,setInputText]=useState({todo:'',date:'',importance:false,id:uuidv4(),checked:false});
  const [todos,setTodos]=useState([])
  const [editTaskTrigger,setEditTaskTrigger]=useState(false)//the trigger that makes popup visible
  const [editTaskInfo,setEditTaskInfo]=useState({todo:'',date:'',importance:false,checked:false})//current todo we want to make visible when trigger is true


  const setTextHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputText(prevState=>({
          ...prevState,
          [name]:value,          
        }));
        
    }
    const submitText=(e)=>{
        e.preventDefault()
        const regex=/\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm])?)/g;
        let tempInputText
        let dateInfo;
        dateInfo=regex.exec(inputText.todo)
        if(dateInfo){
          tempInputText={...inputText,date:dateInfo[1],id:uuidv4()}
          tempInputText.todo=tempInputText.todo.replace(dateInfo[1],'')
        }else{
          tempInputText={...inputText,date:'no time',id:uuidv4()}
        }
        console.log("tempTextInput "+tempInputText.date)
        setInputText(tempInputText)
        setTodos([...todos,tempInputText])    
        tempInputText=({todo:'',date:'',importance:false})
        setInputText(tempInputText)
        
    }
    function checkItem(id){
      const tempTodos=[...todos]
      const todo=tempTodos.find(todo=>todo.id===id)
      todo.checked=!todo.checked
      setTodos(tempTodos)
    }
    function eraseItem(id){
    let tempTodos=[...todos]
    tempTodos=tempTodos.filter(todo=>todo.id!==id)
    setTodos(tempTodos)
  }
  function EditTask(id){
    setEditTaskTrigger(true)
    let tempTodo=todos.find(todo=>(
      todo.id===id
    ))
    setEditTaskInfo(tempTodo)
    

  }
  function closeEditTask(){
    setEditTaskTrigger(false)
  }
   
  return (
    <div className="App">
      <InputBar inputText={inputText} setTextHandler={setTextHandler} submitText={submitText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} checkItem={checkItem} eraseItem={eraseItem} EditTask={EditTask}/>
      <EditTaskPopup trigger={editTaskTrigger} editTaskInfo={editTaskInfo} closeEditTask={closeEditTask} setEditTaskInfo={setEditTaskInfo} todos={todos} setTodos={setTodos}/>
    </div>
  
  );
}

export default App;
