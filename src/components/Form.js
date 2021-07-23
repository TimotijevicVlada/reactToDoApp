import React from "react";

function Form({ setInputText, inputText, setTodos, todos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value); //Setujemo novo stanje na input polju tako sto zovemo ovu funkciju
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, //Kreiramo objekat sa podacima koji nam trebaju
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
