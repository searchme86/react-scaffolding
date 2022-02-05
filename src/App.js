import TodosContainer from "./containers/TodosContainer";
import CounterContainer from "./containers/CounterContainer";
import FcounterContainer from "./containers/FcounterContainer";
import FtodosContainer from "./containers/FtodosContainer";
import NtodosContainer from "./containers/NtodosContainer";

function App() {
  return (
    <>
      <TodosContainer />
      <FtodosContainer />
      <hr />
      <NtodosContainer />
      <hr />
      <CounterContainer />
      <FcounterContainer />
    </>
  );
}

export default App;
