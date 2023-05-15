import Image from 'next/image';
import Link from 'next/link';

require('dotenv').config()

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className='py-5'>welcome, please login</div>
      <input placeholder='email' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100'></input>
      <input placeholder='password' className='my-2 px-3 py-1 rounded-md text-black focus:bg-black-100'></input>
      <button className='transition m-3 bg-blue-200 py-1 px-3 text-black rounded-xl hover:bg-blue-400 hover:scale-110'><Link href="/list">login</Link></button>
      <a href='/register'>Not registered?</a>
    </main>
  )
}
