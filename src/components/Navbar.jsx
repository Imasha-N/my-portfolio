import { useState, useEffect } from "react"
import { navLinks } from "../data/portfolio"
import ThemeToggle from "./ThemeToggle"

function Navbar() {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (id) => {
    setActive(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a
        href="#home"
        className="navbar__logo"
        onClick={(e) => {
          e.preventDefault()
          handleClick("home")
        }}
      >
        <span className="navbar__logo-dot" />
        Imasha
      </a>

      <div className="navbar__actions">
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(id)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
