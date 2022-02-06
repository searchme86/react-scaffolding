import React from "react";
import Counter from "../components/Counter";
import { increase, decrease } from "modules/counter";
import { useSelector, useDispatch } from "react-redux";

export default function CounterContainer() {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
}
