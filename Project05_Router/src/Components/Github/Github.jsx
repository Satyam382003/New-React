// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    //Here it is NORMAL FETCH API   
    // const[data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Satyam382003')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //     })  
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={'https://whc.unesco.org/uploads/thumbs/activity_725-1200-630-20220308132126.jpg'} alt='git picture' width={500}/>
    </div>
  )
}

export default Github

//Router Fetch API 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Satyam382003')
    return response.json()
}
