import { personal } from "../data/portfolio"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} <span className="gradient-text">{personal.name}</span>. All rights reserved.
        </p>
        <p className="footer__built">
          Built with React & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
