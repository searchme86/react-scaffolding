import Navbar from "Components/Navbar";
import Planet from "Components/Planet";
import { useState } from "react/cjs/react.development";
import People from "./Components/People";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <h1>star warks info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planet /> : <People />}
      </div>
    </>
  );
}

export default App;
