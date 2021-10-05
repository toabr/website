import { useEffect } from "react"
import { useThemeContext } from "../hooks/useThemeContext"


/**
 * toggle attribute on "html" element for theme switch
 */
export default function ThemeSwitch() {
  const {darkMode, setDarkMode} = useThemeContext()

  const handleChange = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    darkMode ?
      document.documentElement.setAttribute('darkMode', '')
      :
      document.documentElement.removeAttribute('darkMode', '')

  },[darkMode])

  return (
    <div className="form-switch">
      <input
        id="theme-switch"
        type="checkbox"
        className="form-check form-check-input rounded-pill"
        checked={darkMode}
        onClick={handleChange}
      />
    </div>
  )
}