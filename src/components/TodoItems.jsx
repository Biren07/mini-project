export default function TodoItems({todo,onToggle,onDelete})
{
    return(
       <li className="flex justify-between items-centerbg-white p-2 mb-2 rounded shadow">
        <span onClick={onToggle}
        className={`cursor-pointer {todo.done?"line-through text-gray-400}:""}`}
        >
            {todo.text}
        </span>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">❌</button>
       </li> 
    )
}