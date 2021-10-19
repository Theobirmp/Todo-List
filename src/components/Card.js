import React from 'react'

const Card = ({todos}) => {
return (todos)?(todos.map((todo)=>(
     (
        <div className="card card1">
            <div className="frontFace">{todo.todo}</div>
            <div className="backFace">BACK FACE 1<button type="button" id="backFaceButton1" className="backFaceButton">Submit</button></div>
        </div>
    )
))):'';


}

export default Card
