import React from 'react'
import { useRef } from 'react';
import { AiFillExclamationCircle } from "react-icons/ai";

import { makeStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button"
import  CheckBox  from '@material-ui/core/Checkbox';
import {  ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'


const useStyles=makeStyles({
    saveButton:{
        backgroundColor:"#4DAA57",
        marginLeft:0,
        marginRight:0
    },
    checkbox: {},
    textfield:{}
})
const theme=createTheme({
    palette:{
        primary:{
            main: '#4DAA57'
        }
    }
})

const EditTaskPopup = ({trigger,editTaskInfo,closeEditTask,setEditTaskInfo,todos,setTodos,TodoBeforeEdit}) => {
    const taskToEdit=useRef()
    function saveEditTask(e){
        
        e.preventDefault()
        const tempTodos=[...todos]
        const index=tempTodos.findIndex(todo=>(todo.id===editTaskInfo.id))
        //code to find dates into the todo
        const regex=/\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm])?)/g;
        let tempEditTaskInfo={...editTaskInfo}
        let dateInfo;
        dateInfo=regex.exec(tempEditTaskInfo.todo)
        if(dateInfo){
            tempEditTaskInfo={...editTaskInfo,date:dateInfo[1]}
            tempEditTaskInfo.todo=tempEditTaskInfo.todo.replace(dateInfo[1],'')
        }else{
            tempEditTaskInfo={...editTaskInfo,date:'no time'}
        }
        tempTodos.splice(index,1,tempEditTaskInfo)
        setTodos(tempTodos)
        return 
    }
    function saveCurrentInput(e){
        e.preventDefault()
        setEditTaskInfo({...editTaskInfo,todo:taskToEdit.current.value})
        
    }
    function editImportance(){
        let tempEditTaskInfo={...editTaskInfo}
        tempEditTaskInfo.importance=!editTaskInfo.importance
        setEditTaskInfo(tempEditTaskInfo)
    }
    const classes=useStyles()
    return (trigger) ?   
    (
    <ThemeProvider theme={theme}>
    <div className="popup">
    <div className="popup-inner">
        <h2>Todo: {editTaskInfo.todo} {editTaskInfo.importance?(<AiFillExclamationCircle/>):('')}</h2>
        <h2>Date: {editTaskInfo.date}</h2>
        <p>Feel free to edit your todo</p>
        <form type="submit">
        <input autoFocus type="text" variant="outlined" onChange={saveCurrentInput} ref={taskToEdit} placeholder={editTaskInfo.todo} />
        <CheckBox disableRipple color="primary" className={classes.checkbox} onClick={editImportance} name="importance" checked={editTaskInfo.importance}
        onChange={editImportance}/>
        <Button className={classes.saveButton} onClick={saveEditTask}>Save</Button>
        </form>
        
    </div>
    <button onClick={closeEditTask} id="editTaskButton">Close</button>
    </div>
    </ThemeProvider>
    )
    
    :'';
        
        
    
    
    
}

export default EditTaskPopup
