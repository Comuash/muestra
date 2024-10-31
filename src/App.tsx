import { useState } from "react";
import { SeedDatas } from "./data/todos";
import TodoItem from "./components/TodoItem/TodoItems";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState(SeedDatas);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((previousTodo) => {
      return previousTodo.map(todo => todo.id === id ? {...todo, completed} : todo) 
    });
  }

  function addTodo(title: string) {
    setTodos((previousTodo) => [
      ...previousTodo,
      {
        id: previousTodo.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.id) + 1, 0),
        title: title,
        completed: false
      }
    ]);
  }

  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">WhatTodos</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
          <TodoForm
            onSubmit={addTodo}
          />
          <div className="space-y-2">
            { todos.map(todo => 
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompleteChange={setTodoCompleted}
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
