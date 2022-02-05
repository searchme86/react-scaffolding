import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Fcounter from "../components/Fcounter";
import { increase, setDiff, decrease } from "../modules/Fcounter";

function FcounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  const onSetDiff = (diff) => dispatch(setDiff(diff));
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <>
      <Fcounter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </>
  );
}

export default FcounterContainer;
