"use client"
import BareS from "./ui/todoshear/bareS";
import Linkroute from "./ui/navigate/Linkroute";
import Todo from "./ui/todo";
import {useEffect, useState} from  "react"

interface Task {
  id:number,
  title:string,
  completed:boolean,
  start : Date,
  end : Date | null
}

export default function Home() {
  const [tasks,setTasks] = useState<Task[]>([])
  const [task,setTask] = useState<string>('')

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const storage = localStorage.getItem('tasks')
    if(storage){
      setTasks(JSON.parse(storage))
    }
    }
  },[])

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }
  },[tasks])

  function check(id:number){
    setTasks(tasks.map(task=>
      task.id === id ? {...task, completed: !task.completed,end: !task.completed ? new Date():null}:task
    ))
  }

  function addT(){
    if(task.trim()!==''){
      const newTask :Task={
        id:Date.now(),
        title : task,
        completed : false,
        start : new Date(),
        end: null
      }
      setTasks([...tasks,newTask])
    }
    setTask('')
  }
  function del(id:number){
    setTasks(tasks.filter(task=>task.id !==id ))
  }
  useEffect(()=>{
    console.log(tasks)
  },[tasks])

  return (
    <div className="flex flex-col  items-center bg-red-500 box-border h-screen	 ">
        <div className="w-11/12 border-2 bg-gray-200 mt-10 flex flex-col rounded-xl  p-6 md:w-[600px]">
            <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
            <BareS onAdd={addT} task ={task} updata={setTask}/>
            <Linkroute/>
            <Todo check={check} del={del} tasks={tasks}/>
        </div>
    </div>
  );
}
