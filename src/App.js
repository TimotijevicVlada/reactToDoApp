import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState(""); //Setujemo stanje input-a
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, []);

  useEffect(() => {
    function filterHandler() {
    if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  }
  filterHandler();
  function saveLocalTodos() {
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  saveLocalTodos();
  }, [todos, status]);

  
  

  //Saving todos in local storage
  
  function getLocalTodos() {
    if(localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
     const todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
