"use client";

import { useState } from "react";
import useTodos from "@/hooks/useTodos";
import TodoItem from "@/components/TodoItems";

export default function TodosPage() {
  const { todos, addTodos, toggleTodo, deleteTodo } = useTodos();
  const [task, setTask] = useState("");

  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">✅ Todo App</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="px-3 py-2 border rounded-md w-64"
        />
        <button
          onClick={() => {
            addTodos(task);
            setTask("");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="w-80">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </main>
  );
}
