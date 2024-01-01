import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let updateCount = () => {
    setCount(count += 1)
  }

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={updateCount}>Click</button>
    </>
  )
}

export default App