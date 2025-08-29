export const loadTodos=()=>
{
    if(typeof window==="undefined") return [];
    return JSON.parse(localStorage.getItem("todos")||"[]");
};

export const saveTodos=(todos)=>
{
    if(typeof window==="undefined")return;
    localStorage.setItem("todos",JSON.stringify(todos));
}