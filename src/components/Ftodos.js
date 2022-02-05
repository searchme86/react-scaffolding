import React, { useState } from "react";

const FtodoItem = React.memo(function FtodoItem({ todo, onToggle }) {
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

const FtodoList = React.memo(function FtodoList({ todos, onToggle }) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <FtodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
        })}
      </ul>
    </>
  );
});

function Ftodos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="할일을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
      <FtodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Ftodos;
