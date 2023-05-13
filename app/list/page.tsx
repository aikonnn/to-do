"use client";
import { useState, useEffect } from "react";
import Entry from "./entry"

export default function List() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "/api/getTasks"
          )
        ).json();
  
        // set state when the data received
        setEntries(data);
      };
  
      dataFetch();
    }, []);

    function addTask(){
      //do nothing for now
    }

    return (
      <main className="flex h-screen flex-col items-center justify-center p-24">
        <div className="flex items-center justify-center flex-col">
        <div className='py-5'>heres your tasks for today</div>
        <a className="bg-violet-800 py-2 px-3 rounded-xl cursor-pointer" onClick={e => addTask()}>add new tasks</a>
        <ul>
          {entries.map((task: any) => 
          <li key={task.id}>
            <Entry id = {task.id} userid = {task.userid} task = {task.task} urgency = {task.urgency} />
          </li>)}
        </ul>
        </div>
      </main>
    )
  }