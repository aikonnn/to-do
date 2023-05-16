"use client";
import { useState, useEffect } from "react";
import Entry from "./entry"
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"

export default function List() {
    const {data : session} = useSession();
    if(!session){
      redirect("/login");
    }
    const [entries, setEntries] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "/api/getTasks/" + session.user.id,
          )
        ).json();
  
        // set state when the data received
        setEntries(data.answer);
        setLoaded(true);
      };
  
      dataFetch();
    }, [addTask, handleChange]);

    async function addTask(){
      //do nothing for now
      const data = await (
        await fetch(
          "/api/tasks",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userid: session.user.id
            })
          }
        )
      ).json();
    }

    async function handleChange(func) {
      func();
    }

    if(!loaded) return (<main className="flex h-screen flex-col items-center justify-center p-24">
      <div>loading</div>
    </main>)

    return (
      <main className="flex h-screen flex-col items-center justify-center p-24">
        <div className="flex items-center justify-center flex-col">
        <div className='py-5'>heres your tasks for today</div>
        <a className="bg-violet-800 py-2 px-3 rounded-xl cursor-pointer" onClick={e => addTask()}>add new tasks</a>
        <ul className="w-screen flex-col flex items-center justify-center">
          {entries.map((task) => 
          <li className="w-screen flex items-center justify-center" key={task.id}>
            <Entry id = {task.id} userid = {task.user_id} task = {task.task} urgency = {task.urgency} handleChange={handleChange}/>
          </li>)}
        </ul>
        <button onClick={() => signOut({redirect: false, callbackUrl: '/login'})} className='transition m-3 bg-blue-200 py-1 px-3 text-black rounded-xl hover:bg-blue-400 hover:scale-110'>Sign out</button>
        </div>
      </main>
    )
  }