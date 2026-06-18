import { useTheme } from "../context/ThemeContext"
import { AppIcon } from "./Icons"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <AppIcon name={isDark ? "sun" : "moon"} size={18} />
    </button>
  )
}

export default ThemeToggle
