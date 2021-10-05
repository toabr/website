import { useEffect } from "react"
import { useThemeContext } from "../hooks/useThemeContext"


/**
 * toggle attribute on "html" element for theme switch
 */
export default function ThemeSwitch() {
  const [style, setStyle] = useThemeContext()

  function toggleStyle() {
    setStyle((style === 'light') ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', style)
  }, [style])

  return (
    <div className="form-switch">
      <input
        id="theme-switch"
        type="checkbox"
        className="form-check form-check-input rounded-pill"
        checked={(style === 'dark') ? true : false}
        onClick={toggleStyle}
      />
    </div>
  )
}