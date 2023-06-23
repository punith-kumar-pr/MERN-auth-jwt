// import './App.css';
import { useState } from 'react'
// import axios from "axios"
import { useNavigate } from 'react-router-dom'

function App() {
  const [email, setEmail,] = useState("")
  const [password, setPassword,] = useState("")

  const navigate = useNavigate()
  
  async function loginUser(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:1337/api/login',{
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        email, password,  
      }),
    })

    const data = await response.json()
    // const data = await response.data

    console.log(data)

    if(data.user){
      localStorage.setItem('token', data.user)
      alert("Login successful")
      navigate("/quote")
    }
    else{
      alert("Check the email and password")
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={loginUser}>
      
      <input 
        value = {email}
        onChange = {(e)=>setEmail(e.target.value)}
        type = "email"
        placeholder = "Email"
      />
      <br />
      <input 
        value = {password}
        onChange = {(e)=>setPassword(e.target.value)}
        type = "password"
        placeholder = "Password"
      />
      <br />
      <input type="submit" value="Register" />
      </form>
      
    </div>
  );
}

export default App;
