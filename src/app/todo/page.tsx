import Liste from "../ui/listetaches/Liste"

interface Task {
  id:number,
  title:string,
  completed:boolean,
  start : Date,
  end : Date | null
}

interface todopropos {
  check : (id:number) => void
  del : (id:number) => void
  tasks : Task[]
}

export default function todo({check,del,tasks}:todopropos) {
  
  const  Nwtask = tasks.filter(task=>task.completed !== true)
  return (
    <Liste check={check} del={del} tasks={Nwtask}/>
  )
}