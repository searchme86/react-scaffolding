import TodosContainer from "./containers/TodosContainer";
import CounterContainer from "./containers/CounterContainer";
import FcounterContainer from "./containers/FcounterContainer";
import FtodosContainer from "./containers/FtodosContainer";

function App() {
  return (
    <>
      <TodosContainer />
      <FtodosContainer />
      <hr />

      <hr />
      <CounterContainer />
      <FcounterContainer />
    </>
  );
}

export default App;
