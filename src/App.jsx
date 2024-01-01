import { useState } from 'react'

import './App.css'

function App() {
  let [islike, setIsLike] = useState(false)

  let like = () => {
    setIsLike(!islike)
  }
  
  let likeStyle = {color: "red"}

  return (
    <>
      <p onDoubleClick={like}>

        <img src="https://plus.unsplash.com/premium_photo-1698429260304-56c5a60f419b?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <br />
        {islike ? (<i className="fa-solid fa-heart instagram-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)}

      </p>
    </>
  )
}

export default App