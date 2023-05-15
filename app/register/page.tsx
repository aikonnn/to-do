'use client';

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function handleSubmit(){
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
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className='py-5'>register</div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100' type="email" required></input>
      <input onChange={(e)=>{setPass(e.target.value)}} placeholder='password' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100' type='password' required></input>
      <button type='submit' className='transition m-3 bg-blue-200 py-1 px-3 text-black rounded-xl hover:bg-blue-400 hover:scale-110'>register</button>
      </form>
      <a href='/'>Registered? log in here.</a>
    </main>
  )
}
