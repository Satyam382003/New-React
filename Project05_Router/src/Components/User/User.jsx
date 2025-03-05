import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-600 text-white text-3xl text-center p-4 ml-5 mr-5'>
      User: {userid}
    </div>
  )
}

export default User
