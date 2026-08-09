import React, { useState } from 'react'

const TodoList = () => {

    const [ todo, setTodo] = useState([])
  return (
    <div>
     <form>
        <input type="text" name="" placeholder='Enter Todo' />
        <input type="button"/>
     </form>
    </div>
  )
}

export default TodoList
