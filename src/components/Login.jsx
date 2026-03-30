import React, {  useState } from 'react'

function Login() {
const [store, setStore]= useState({
    username:"",
    password:"",
    email:"",
    phone:""
});


function handleChange(e){
  const {name, value} = e.target;
  setStore({...store, [name]: value});

}

function handlesubmit(e){
   e.preventDefault();
   
    try{
      fetch("http://localhost:5000/login", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(store)

      })
      .then((res)=> res.json())

      .then((data)=>{
        console.log(data);
      } )
    }catch(error){
      console.log("Error:", error);
    }
    
    setStore({
      username:"",
      password:"",
      email:"",
      phone:""
    })


}

  return (
    <>
        <h2>Login</h2>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">User-Name</label>
            <input type="text" placeholder='Enter your username' name='username' id='username' onChange={handleChange} />
            <label htmlFor="">Email</label>
            <input type="text" name='email' id='email' placeholder='Enter your email' onChange={handleChange} />
            <label htmlFor="">Phone</label>
            <input type="text" name='phone' id='phone' placeholder='Enter your phone number' onChange={handleChange} />
            <label htmlFor="">Password</label>
            <input type="text" name='password' id='password' placeholder='Enter your password' onChange={handleChange} />
            <button type='submit'>Login</button>
        </form>


    </>

  )

}

export default Login