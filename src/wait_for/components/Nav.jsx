import React from "react";
import { Link } from "react-router-dom";
// import { FuncServer } from "../Server/FuncServer";

function Nav() {
  // const { authed, logout } = FuncServer();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/");
  // };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">auth</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      {/* {authed && <button onClick={handleLogout}>LogOut</button>} */}
    </nav>
  );
}

export default Nav;
