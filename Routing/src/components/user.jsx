import React from 'react'
import { useParams } from 'react-router-dom'


const user = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default user
