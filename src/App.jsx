import React, { useState } from "react"

function App() {
  const [value, setValue] = useState()
  const [todo, setTodo] = useState([])

  const handleClick = () => {}
  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <button onClick={handleClick}> Add Todo</button>
    </div>
  )
}

export default App
