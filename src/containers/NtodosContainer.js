import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../modules/Ntodo";
import Ntodos from "../components/Ntodos";

function NtodosContainer() {
  const ntodos = useSelector((state) => state.ntodos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return (
    <>
      <Ntodos onCreate={onCreate} onToggle={onToggle} todos={ntodos} />
    </>
  );
}

export default NtodosContainer;
