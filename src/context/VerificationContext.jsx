import { createContext, useState } from "react";

export const VerificationContext = createContext(null);

export function VerificationProvider({ children }) {
  const [userData, setUserData] = useState({
    email: "",
  });

  return (
    <VerificationContext.Provider value={{ userData, setUserData }}>
      {children}
    </VerificationContext.Provider>
  );
}
