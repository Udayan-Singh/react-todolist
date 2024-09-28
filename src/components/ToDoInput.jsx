import { useState } from "react"

const ToDoInput = (props) => {
    const {handleAddTodos, setTodoValue, todoValue} = props
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder="Enter item..."/>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}

export default ToDoInput