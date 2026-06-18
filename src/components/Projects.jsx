import { motion } from "framer-motion"
import { projects } from "../data/portfolio"
import { AppIcon } from "./Icons"

function Projects() {
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
            <motion.a
              key={project.title}
              href={project.link}
              className={`project-card ${project.featured ? "project-card--featured" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__image-overlay">
                  <AppIcon name="externalLink" size={20} />
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
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
