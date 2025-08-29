"use client";

import { loadTodos, saveTodos } from "@/utils/localStorage";
import { useEffect, useState } from "react";

export default function useTodos()
{
    const [todos,setTodos]=useState([]);
    
    useEffect(()=>{
        setTodos(loadTodos);
    },[]);

    useEffect(()=>{
        saveTodos(todos);
    },[todos]);

    const addTodos=(text)=>{
        if(!text.trim()) return;
        setTodos([...todos,{id:Date.now(),text,done:false}]);

    };

    const toggleTodo=(id)=>{
        setTodos(todos.map((todo)=>
            todo.id===id?{...todo,done:!todo.done}:todo
    ));
    };

    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };
    return {todos,addTodos,toggleTodo,deleteTodo}
}