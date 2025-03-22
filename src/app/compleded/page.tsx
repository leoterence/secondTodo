'use client'
import {useState,useEffect} from 'react'
import Link from 'next/link'
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
    const storage=localStorage.getItem('tasks') 
    if(storage){
      const tach = JSON.parse(storage)
      const complet = tach.filter((task:Task)=>task.completed!==false)
      setTasksc(complet)
    } else {
      console.log("Aucune tâche trouvée dans localStorage")
    }
   }
  },[])
  
  return (
    <div className=" flex flex-col bg-red-500 box-border h-screen  ">
       <button type="button" className=' bg-gray-200 rounded w-[30px] mt-2 ml-3'><Link href='/todo'><p className='text-xl '>&larr;</p></Link></button>
      <div className='w-11/12 min-h-96 border-2 mx-auto bg-gray-200 mt-10 flex flex-col rounded-xl  p-6 md:w-[600px]'>
        <ul>
          {
            tasksc.map((task)=>{
              return(
                <li key={task.id}>{task.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}