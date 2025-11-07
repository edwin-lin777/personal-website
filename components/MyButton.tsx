'use client'
import React, { useState } from 'react'




const MyButton = ({title, description, images}) => {
  const [open,setOpen] = useState(false)
  const [hovered,setHovered] = useState(false)

  const setOpened = () =>  {
    setOpen(!open)
  }

  
  return (

    <div> 
      <button onClick={setOpened}>Click Me</button>
    </div>


    
  )
}

export default MyButton