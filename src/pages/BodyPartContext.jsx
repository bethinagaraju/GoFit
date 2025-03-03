import { createContext, useContext, useState, useEffect } from "react";

const BodyPartContext = createContext();

export const BodyPartProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState(() => {
    return localStorage.getItem("bodyPart") || ""; // Load from localStorage on startup
  });
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || ""; // Load from localStorage on startup
  });

  // const [user, setUser] = useState(null);


  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || ""; // Load from localStorage on startup
  });

  useEffect(() => {
    localStorage.setItem("bodyPart", bodyPart); // Save to localStorage when bodyPart changes
    localStorage.setItem("name", name); // Save to localStorage when name changes
    localStorage.setItem("user", user); // Save to localStorage when user changes
  }, [bodyPart, name, user]);


  return (
    <BodyPartContext.Provider value={{ bodyPart, setBodyPart, name, setName, user, setUser }}>
      {children}
    </BodyPartContext.Provider>
  );
};

export const useBodyPart = () => {
  return useContext(BodyPartContext);
};

