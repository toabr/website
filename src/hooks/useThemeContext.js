import { createContext, useContext } from "react";
import usePersistedState from "./usePersistedState";

// register the context
const ThemeContext = createContext({});

// export a custom context provider
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = usePersistedState('theme', 'light')
  
  /**
   * set the state of the context variable "value"
   * @param {string} value
   */
  function toggle(value) {
    console.log('set themeMode:', value)
    setThemeMode(value);
  }

  // return a context object with a value and a toggle function property
  return (
    <ThemeContext.Provider value={[themeMode, toggle]}>
      {children}
    </ThemeContext.Provider>
  );
}

// export a custom hook to use this specific context
export function useThemeContext() {
  return useContext(ThemeContext);
}