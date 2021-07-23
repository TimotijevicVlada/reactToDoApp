import React, { useState } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState(""); //Setujemo stanje input-a
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <h1>Vladimir's Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
