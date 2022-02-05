import React, { useCallback } from "react";
import { addTodo, toggleTodo } from "../modules/Ftodos";
import Ftodos from "../components/Ftodos";
import { useDispatch, useSelector } from "react-redux";

function FtodosContainer() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <>
      <Ftodos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </>
  );
}

export default FtodosContainer;
