import { createContext, useContext, useState, useEffect } from "react";

const BodyPartContext = createContext();

export const BodyPartProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState(() => {
    return localStorage.getItem("bodyPart") || ""; // Load from localStorage on startup
  });
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || ""; // Load from localStorage on startup
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("bodyPart", bodyPart); // Save to localStorage when bodyPart changes
    localStorage.setItem("name", name); // Save to localStorage when name changes
  }, [bodyPart, name]);


  return (
    <BodyPartContext.Provider value={{ bodyPart, setBodyPart, name, setName, user, setUser }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export const useBodyPart = () => {
  return useContext(BodyPartContext);
};

