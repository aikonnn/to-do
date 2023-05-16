import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";

const status = [
  { id: 1, name: 'Done'},
  { id: 2, name: 'Slow'},
  { id: 3, name: 'Regular'},
  { id: 4, name: 'Urgent'},
  { id: 5, name: 'Emergency'},
]

export default function Entry(props: any) {
    const [task, setTask] = useState(props.task);
    const [urgency, setUrgency] = useState(status[props.urgency-1]);

    useEffect(() => {
      props.handleChange(editTask);
    }, [urgency])

    async function deleteEntry(){
        const data = await (
            await fetch(
              "api/task/" + props.id, 
              {
                method: 'DELETE'
              }
            )
          ).json();
    }

    async function editTask(){
      console.log("send edit to db");
      const data = await (
        await fetch(
          "/api/tasks",{
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              taskid: props.id,
              task: task,
              urgency: urgency.id,
            })
          }
        )
      ).json();
    }

    async function handleKeyPress(e: any){
      if(e.keyCode === 13){
        e.target.blur();
      }
    }

    return (
        <div className="rounded-xl w-4/5 text-slate-800 max-w-xl flex items-center justify-between my-2 bg-violet-200 px-4 py-4">
            <Listbox value={urgency} onChange={setUrgency}>
            <Listbox.Button>{urgency.name}</Listbox.Button>
            <Listbox.Options>
              {status.map((stat) => (
                <Listbox.Option
                  key={stat.id}
                  value={stat}
                >
                  {stat.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
    
            <input defaultValue={props.task} 
            className='px-2'
            onChange={e=>setTask(e.target.value)}
            onBlur={e => props.handleChange(editTask)}
            onKeyDown={(e) => handleKeyPress(e)}
            ></input>
            <button 
            className="mx-3" 
            onClick={e => props.handleChange(deleteEntry)}
            >del</button>
        </div>
    )
}