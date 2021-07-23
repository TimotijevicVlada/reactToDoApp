import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
    
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
            <Todo text={todo.text}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
