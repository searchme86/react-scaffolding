import { useState } from "react";

function useAuth() {
  const [authed, setAuthed] = useState(true);
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

export { useAuth };
