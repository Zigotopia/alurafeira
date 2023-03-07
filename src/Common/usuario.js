
import React, { useState } from "react";
import { createContext } from "react";



export const userContext = createContext();
userContext.displayName = "Usuario"; // serve basicamente para  dar o context um nome para ser visto no developer tools

export default function UserProvider({ children }) {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);

  return (
    <userContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
      {children}
    </userContext.Provider>
  );
}

// a ideia aqui é deixar os states e o contexts separados do routes para cada um ter possa ter sua proproba responsabilidade


