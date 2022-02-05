import { createStore } from "@reduxjs/toolkit";

console.log("hello");
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const Increase = () => {
  return {
    type: Increase,
  };
};

const Decrease = () => {
  return {
    type: Decrease,
  };
};

const ChangeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text,
  };
};

const AddToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item,
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Increase:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Decrease:
      return {
        ...state,
        counter: state.number - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
