import { useState } from "react";

function FuncServer() {
  const [authed, setAuthed] = useState(false);
  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}
export { FuncServer };
