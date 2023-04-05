import { createContext, useState, useEffect } from "react";

export const NavContext = createContext({
  activeLink: "",
  setActiveLink: () => {},
});

export const NavContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");
  const [mini, setMini] = useState(
    window.matchMedia("(max-width: 1080px)").matches
  );

  const [micro, setMicro] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  
  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setMicro(e.matches));
  });

  useEffect(() => {
    window
      .matchMedia("(max-width: 1080px)")
      .addEventListener("change", (e) => setMini(e.matches));
  });

  return (
    <NavContext.Provider
      value={{
        activeLink,
        setActiveLink,
        isMini: mini,
        isMicro: micro,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
