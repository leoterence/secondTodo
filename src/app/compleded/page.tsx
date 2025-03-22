'use client'
import {useState,useEffect} from 'react';
import { DateTime } from 'luxon';
import Linkroute from '../ui/navigate/Linkroute'
interface Task {
  id:number,
  title:string,
  completed:boolean,
  start : Date,
  end : Date | null
}

export default function compled() {
  const[tasksc,setTasksc]=useState<Task[]>([])
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const storage = localStorage.getItem('tasks')
    if(storage){
      setTasksc(JSON.parse(storage))
    }
    }
  },[])
 
  useEffect(()=>{
    console.log(tasksc)
  },[tasksc])

  const formatDateTime = (date: Date | null) => {
    if (!date) return '';
    const dateFormatted = new Date(date).toLocaleDateString()
    const timeFormatted = new Date(date).toLocaleTimeString('fr-FR', { hour12: false }); // Formate l'heure en hh:mm:ss (24h)
    return `${dateFormatted} à ${timeFormatted}`; // Combine la date et l'heure
  };
  
  function del(id:number){
    setTasksc(tasksc.filter((task=>task.id!==id)))
  }
  const completTask=tasksc.filter((task:Task)=>task.completed!==false)
  return (
    <div className=" flex flex-col bg-red-500 box-border h-screen  ">
      <div className='w-11/12 min-h-96 border-2 mx-auto bg-gray-200 mt-10 flex flex-col rounded-xl  p-6 md:w-[600px]'>
      <Linkroute/>
        <ul className='mt-5 p-5'>
          {
            completTask.map((task)=>{
              return(
                <li key={task.id} className='border-2 border-gray-700/75 p-2 h-[80px] rounded-md flex flex-col'><h1>{task.title}</h1> 
                <button type="button" onClick={()=>del(task.id)} className="border-2 px-3 py-1 ml-auto rounded-md bg-orange-500 text-white border-orange-500 -mt-2 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 active:hover:bg-orange-500">supprimer</button>
                <p className='-mt-5'>achevée : {formatDateTime(task.end)}</p></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}