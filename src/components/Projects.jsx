import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "../data/portfolio"
import { AppIcon } from "./Icons"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    // Demo video thiyena project ekak nam popup eka open karanawa
    if (project.demo) {
      setSelectedProject(project)
      return
    }

    // Demo video nathi project ekak nam normal link eka open karanawa
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener,noreferrer")
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    if (selectedProject) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedProject])

  return (
    <section className="section" id="projects">
      <motion.div
        className="section__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Projects</span>

        <h2 className="section__title">
          Featured <span className="gradient-text">work</span>
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`project-card ${
                project.featured ? "project-card--featured" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => handleProjectClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  handleProjectClick(project)
                }
              }}
            >
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />

                <div className="project-card__image-overlay">
                  <AppIcon
                    name={project.demo ? "play" : "externalLink"}
                    size={20}
                  />
                </div>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demo && (
                  <span className="project-card__demo-text">
                    ▶ Watch Demo
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="demo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="demo-modal__content"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="demo-modal__close"
                onClick={closeModal}
                aria-label="Close demo"
              >
                ×
              </button>

              <div className="demo-modal__header">
                <span className="demo-modal__label">
                  PROJECT DEMO
                </span>

                <h3>{selectedProject.title}</h3>
              </div>

              <video
                key={selectedProject.demo}
                className="demo-modal__video"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source
                  src={selectedProject.demo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="demo-modal__actions">
                {selectedProject.link &&
                  selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-modal__project-link"
                    >
                      {selectedProject.title.includes("Tintora")
                        ? "View Figma"
                        : "View GitHub"}

                      <AppIcon
                        name="externalLink"
                        size={16}
                      />
                    </a>
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects