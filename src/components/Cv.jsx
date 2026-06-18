import { motion } from "framer-motion"
import { cv, personal } from "../data/portfolio"
import { AppIcon } from "./Icons"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Cv() {
  return (
    <section className="section" id="cv">
      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.span className="section__label" variants={item}>
          Resume
        </motion.span>
        <motion.h2 className="section__title" variants={item}>
          Download my <span className="gradient-text">CV</span>
        </motion.h2>

        <div className="cv__layout">
          <motion.div className="cv__preview" variants={item}>
            <div className="cv__doc">
              <div className="cv__doc-header">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="cv__doc-avatar-img"
                />
                <div>
                  <h3>{personal.name}</h3>
                  <p>{personal.title}</p>
                </div>
              </div>

              <div className="cv__doc-body">
                {cv.highlights.map((group) => (
                  <div key={group.title} className="cv__doc-section">
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((entry) => (
                        <li key={entry.label}>
                          <strong>{entry.label}</strong>
                          <span>{entry.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="cv__doc-footer">
                <span>PDF · Updated {cv.lastUpdated}</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="cv__actions" variants={item}>
            <p className="cv__text">
              Want the full picture? Download my CV for a complete overview of my
              education, experience, and technical skills.
            </p>

            <a
              href={cv.file}
              download={cv.fileName}
              className="btn btn--primary cv__download"
            >
              <AppIcon name="download" size={20} />
              Download CV
            </a>

            <a
              href={cv.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost cv__view"
            >
              <AppIcon name="externalLink" size={18} />
              View in Browser
            </a>

            <span className="cv__meta">Last updated · {cv.lastUpdated}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Cv
