import React from 'react'
import { BsCheckCircle } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs";
import classNames from 'classnames'
import { useRef } from 'react';
import { AiFillExclamationCircle } from "react-icons/ai";
import Button from "@material-ui/core/Button"
import { ButtonGroup, makeStyles } from '@material-ui/core';
import Box from "@material-ui/core/Box"


const useStyles=makeStyles({
    todoItemButtonCheck:{
        backgroundColor:"#4DAA57"
    },
    todoItemButtonErase:{
        backgroundColor:"#F24236"

    }
})

const TodoItem = ({todo,checkItem,eraseItem,EditTask}) => {
    const checkButton=useRef()
    const eraseButton=useRef()
    const todoItemClass = classNames('todoItemInfo','checked');
    

    function handleOnClickCheck(){
        checkItem(todo.id)
}
    function handleOnClickErase(){
        eraseItem(todo.id)
    }
    function handleEditTask(){
        EditTask(todo.id)
    }
    const classes=useStyles()
        return (

        <div className="todoItem">
        <Box id={todo.id} onClick={handleEditTask} className={todo.checked?todoItemClass:"todoItemInfo"}> {todo.todo} {todo.importance?(<AiFillExclamationCircle/>):''} <span className="dateHolder">{todo.date}</span> </Box>
        <ButtonGroup>
        <Button  ref={checkButton} id={todo.id} onClick={handleOnClickCheck} className={classes.todoItemButtonCheck}><BsCheckCircle color="#F6F5AE"/></Button>
        <Button ref={eraseButton} id={todo.id} onClick={handleOnClickErase} className={classes.todoItemButtonErase}><BsFillTrashFill color="#F6F5AE"/></Button>
        </ButtonGroup>
        </div>
    )
}

export default TodoItem
