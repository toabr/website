import { useEffect, useRef } from "react"
import { useThemeContext } from "../hooks/useThemeContext"

export default function ThemeSwitch() {
  const [style, setStyle] = useThemeContext()
  const themeSwitch = useRef(null)

  function toggleStyle() {
    setStyle((style === 'light') ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', style)
    // set checked properly in case of a page refresh
    themeSwitch.current.checked = (style === 'dark') ? true : false
  }, [style])

  return (
    <div className="form-switch">
      <input
        ref={themeSwitch}
        className="form-check form-check-input rounded-pill"
        type="checkbox"
        id="theme-switch"
        onClick={toggleStyle}
      />
    </div>
  )
}