import React, { useState } from "react";

const NtodoItem = React.memo(function NtodoItem({ todo, onToggle }) {
  return (
    <>
      <li
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </li>
    </>
  );
});

const NtodoList = React.memo(function NtodoList({ onToggle, todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <NtodoItem key={todo.id} todo={todo} onToggle={onToggle}></NtodoItem>
      ))}
    </ul>
  );
});

function Ntodos({ onCreate, onToggle, todos }) {
  const [word, setWord] = useState("");
  const onChange = (event) => {
    setWord(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onCreate(word);
    setWord("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={word}
          placeholder="할일을 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <NtodoList onToggle={onToggle} todos={todos} />
    </div>
  );
}

export default Ntodos;
