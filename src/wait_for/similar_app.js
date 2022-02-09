// import Nav from "./components/Nav.jsx";
// import Navigate from "./Navigate";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Auth from "./wait_for/Server/Auth";
import Nav from "./wait_for/components/Nav";
import Home from "./wait_for/pages/Home";
import Profile from "./wait_for/pages/Profile";
import Dashboard from "./wait_for/pages/Dashboard";
import { Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/auth"
          element={<Auth authenticate={() => setUser(true)} />}
        /> */}
        {!user && (
          <Route
            path="/auth"
            element={<Auth authenticate={() => setUser(true)} />}
          />
        )}
        {/* <Route
          path="/profile"
          element={<Profile logout={() => setUser(false)} />}
        />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile logout={() => setUser(false)} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}

        {/*fallback*/}

        <Route
          path="*"
          element={<Navigate to={user ? "/profile" : "/auth"} />}
        />
      </Routes>
    </>
  );
}

export default App;
