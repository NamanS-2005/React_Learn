import React from 'react'
import { useEffect } from 'react'

const navbar = ({color}) => {

  useEffect(() => {
    alert("Color was changed")
  
  }, [color])
  

  return (
    <div>
      I am a navbar of color {color}.
    </div>
  )
}

export default navbar
