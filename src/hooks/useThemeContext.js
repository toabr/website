import { createContext, useContext } from "react";
import usePersistedState from "./usePersistedState";

// register the context
const ThemeContext = createContext({});

// check if the browser has preferences
let userMode = window.matchMedia('(prefers-color-scheme: dark)').matches
userMode = userMode ? userMode : false

/**
 * export custom provider
 * @param {boolean} darkMode
 * @returns 
 */
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = usePersistedState('darkmode', userMode)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export a custom hook to use this specific context
export function useThemeContext() {
  return useContext(ThemeContext);
}
