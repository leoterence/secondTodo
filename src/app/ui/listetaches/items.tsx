import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime"

interface Task {
  id:number,
  title:string,
  completed:boolean,
  start : Date,
  end : Date | null
}
interface itemspropos {
  task :Task
  del : (id:number) => void 
  check : (id:number) => void

}

export default function Items({task,del,check}:itemspropos) {
  let valid = task.completed
  return (
    <li className="border-1 border-gray-800/50 py-3 px-1 rounded-lg flex flex-row items-center"><input type="checkbox" name="completed" id="completed"  checked={valid}  onChange={()=>check(task.id)} className="w-15 mr-5 mt-1"/><h1>{task.title}</h1> <button type="button" onClick={()=>del(task.id)} className="border-2 px-3 py-1 ml-auto rounded-md bg-orange-500 text-white border-orange-500  bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 active:hover:bg-orange-500">supprimer</button></li>
  )
}