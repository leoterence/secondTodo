import Items from "./items"
import Iems from "./items"

interface Task {
  id:number,
  title:string,
  completed:boolean,
  start : Date,
  end : Date | null
}

interface Listproos {
  check : (id:number) => void
  del : (id:number) => void
  tasks : Task[]
}


export default function Liste({check,del,tasks}:Listproos) {
  return (
    <ul className="mt-5 flex flex-col gap-y-3">{
      tasks.map(task=>{
        return(
          <Items key={task.id} task={task} del={del} check={check}/>
        )
      })
      }</ul>
  )
}