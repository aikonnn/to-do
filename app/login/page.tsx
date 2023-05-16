"use client";
import {signIn, useSession} from 'next-auth/react'
import { redirect} from "next/navigation";
import React from 'react';
import { useState } from 'react';

export default function Home() {

  const {data : session} = useSession();
    if(session){
      redirect("/");
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(true);
  
  async function handleSubmit(e: React.FormEvent){
    setLoaded(false);
    e.preventDefault();
    const res = await signIn("credentials", { email: email, password: pass, redirect: false,callbackUrl: `/` });
    if (res?.error) {
      setError("Unable to signin, please try again!");
    } else {
      setError('');
    }
    setLoaded(true);
  }

  if(!loaded){
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div>loading</div>
    </main>
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      {error != '' && <div className='bg-red-500 px-3 py-2 rounded-xl'>{error}</div>}
      <div className='py-5'>welcome, please login</div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
      <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' type='email' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100'></input>
      <input onChange={(e)=>{setPass(e.target.value)}} placeholder='password' type='password' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100'></input>
      <button className='transition m-3 bg-blue-200 py-1 px-3 text-black rounded-xl hover:bg-blue-400 hover:scale-110'>login</button>
      </form>
      <a href='/register'>Not registered?</a>
    </main>
  )
}
