import { useState } from 'react'

import './App.css'

function App() {
  let [islike, setIsLike] = useState(false)
  let like = () => {
    setIsLike(!islike)
  }

  return (
    <>
      <p onDoubleClick={like}>

        {islike ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)}


      </p>
    </>
  )
}

export default App