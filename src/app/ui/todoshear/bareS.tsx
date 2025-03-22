interface BareSProps {
  onAdd: () => void;  // 👈 Fonction à appeler au clic sur "Add"
  task : string;
  updata : (value:string)=> void;
}

export default function BareS({ onAdd,task,updata}: BareSProps) {
  return (
    <form className="p-2 box-border flex flex-row items-center" >
      <div className="border-1 w-full rounded-l-3xl bg-gray-50 pr-7">
        <input 
          type="text" 
          value={task}
          className="w-full px-2 py-3 rounded-l-3xl bg-gray-50 outline-none" 
          placeholder="Add a new task"
          onChange={e=>updata(e.target.value)}
        />
      </div>
      <button 
        type="button"  // 👈 Type "button" pour ne pas soumettre le formulaire
        onClick={onAdd}  // 👈 Appel de la fonction `onAdd`
        className="w-[150px] py-3 border-1 border-orange-500 rounded-3xl -ml-7 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 active:hover:bg-orange-500"
      >
        Add
      </button>
    </form>
  );
}
