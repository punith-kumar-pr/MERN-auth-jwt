import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'

const Dashboard = () => {
  const navigate = useNavigate()

  // const [quote, setQuote] = useState('')

  async function populateQuote() {
    const req = await fetch('http://localhost:1337/api/quote',{
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })

    const data = await req.json()
    console.log(data)
    if(data.status === 'ok')
    {
      console.log()
    } else {
      alert(data.error);
    }
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log("token", token)
    if(token){
      const user = decodeToken(token);
      console.log("user", user)
      if(!user){
        navigate("/login")
        localStorage.removeItem(token)
      } else {
        populateQuote();
      }
    } else {
      navigate('/login');
    }
  })
  
  return (
  <h1>Hello world</h1>
  )
}

export default Dashboard
