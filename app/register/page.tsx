'use client';

import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    setError("");
    setSuccess("");

    const data = await (
      await fetch(
        "/api/users",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            pass: pass
          })
        }
      )
    ).json();

    if(data.error){
      setError("registration failed, use a different email");
    } else {
      setSuccess("registration successful! welcome");
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center bg-white px-5 py-6 rounded-xl shadow-md">
      {error != '' && <div className='bg-red-300 px-3 py-2 rounded-xl'>{error}</div>}
      {success != '' && <div className='bg-green-300 px-3 py-2 rounded-xl'>{success}</div>}
      <div className='py-5'>register</div>
      <form onSubmit={e=>handleSubmit(e)} className="flex flex-col items-center justify-center">
      <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' className='my-2 px-3 py-1 rounded-md text-black bg-slate-100 !outline-none' type="email" required></input>
      <input onChange={(e)=>{setPass(e.target.value)}} placeholder='password' className='my-2 px-3 py-1 rounded-md text-black bg-slate-100 !outline-none' type='password' required></input>
      <button type='submit' className='transition m-3 bg-blue-200 py-1 px-3 text-black rounded-xl hover:bg-blue-400 hover:scale-110'>register</button>
      </form>
      <a href='/'>Registered? log in here.</a>
      </div>
    </main>
  )
}
