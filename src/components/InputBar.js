import React from 'react'
import { useRef } from 'react'
// Material UI imports
import  TextField  from '@material-ui/core/TextField'
import  Checkbox  from '@material-ui/core/Checkbox'
import  { makeStyles }  from '@material-ui/core/styles'
import Button from "@material-ui/core/Button"
import  FormControlLabel  from '@material-ui/core/FormControlLabel'
import {  ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'

const theme=createTheme({
    palette:{
        primary:{
            main: '#4DAA57'
        }
    }
})

const useStyles = makeStyles({
        textfield:{
            backgroundColor:"#5C9EAD",
            color:"white"
        },
        checkbox:{
            backgroundColor:"#326273" ,
            marginRight:5,
            
        },
        btn:{
            backgroundColor:"#5C9EAD",
            color:"white",
            marginBottom:10
        }
    })


const InputBar = ({inputText,setTextHandler,submitText,setInputText}) => {

    function checkImportance(){
        let tempInputText={...inputText}
        tempInputText.importance=!tempInputText.importance
        setInputText(tempInputText)
        
    }
    const checkboxref=useRef()
    const classes=useStyles()   
    return (
        <ThemeProvider theme={theme}>
        <form onSubmit={submitText} className="inputTextForm" autoComplete="off" >
            <FormControlLabel label="What do you have planned for today?" labelPlacement="top" control={<TextField autoFocus variant="outlined"  className={classes.textfield} onChange={setTextHandler} name="todo" value={inputText.todo} />}/>
            <FormControlLabel label="important?" control={<Checkbox disableRipple color="primary" ref={checkboxref}className={classes.checkbox} onClick={checkImportance}  name="importance" onChange={checkImportance}
            checked={inputText.importance}/>}/>
            <Button variant="contained" className={classes.btn} onClick={submitText} disabled={!inputText.todo}>Add Task</Button>
        </form>
        </ThemeProvider>
    )
}

export default InputBar

