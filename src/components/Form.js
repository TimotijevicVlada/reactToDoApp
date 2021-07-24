import React from "react";

function Form({ setInputText, inputText, setTodos, todos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value); //Setujemo novo stanje na input polju tako sto zovemo ovu funkciju
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("You didn't write your commitment!");
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 }, //Kreiramo objekat sa podacima koji nam trebaju
      ]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
        placeholder="Enter your commitment"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
