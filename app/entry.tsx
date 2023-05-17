import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import {HiChevronDown} from 'react-icons/hi';
import {TbUrgent} from 'react-icons/tb';
import {MdReportProblem} from 'react-icons/md';
import {GiTurtleShell} from 'react-icons/gi';
import {AiFillCheckCircle} from 'react-icons/ai';
import {RiEmotionNormalLine, RiDeleteBin6Fill} from 'react-icons/ri';

const status = [
  { id: 1, name: 'Done', icon: <AiFillCheckCircle/>},
  { id: 2, name: 'Slow', icon: <GiTurtleShell/>},
  { id: 3, name: 'Regular', icon: <RiEmotionNormalLine/>},
  { id: 4, name: 'Urgent', icon: <TbUrgent/>},
  { id: 5, name: 'Emergency', icon: <MdReportProblem/>},
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
            <Listbox.Button className="flex items-center justify-between w-16">{urgency.icon}<HiChevronDown /></Listbox.Button>
            <Listbox.Options className="absolute bg-white w-32 rounded-xl shadow-lg py-3">
              {status.map((stat) => (
                <Listbox.Option
                  key={stat.id}
                  value={stat}
                  className={({ active }) =>
                    `cursor-pointer select-none w-100 px-2 my-1 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                >
                  {stat.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
    
            <input defaultValue={props.task} 
            className='px-2'
            onChange={e=>setTask(e.target.value)}
            onFocus={e=>e.target.value = ''}
            onBlur={e => props.handleChange(editTask)}
            onKeyDown={(e) => handleKeyPress(e)}
            ></input>
            <button 
            className="mx-3" 
            onClick={e => props.handleChange(deleteEntry)}
            ><RiDeleteBin6Fill/></button>
        </div>
    )
}