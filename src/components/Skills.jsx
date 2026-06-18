import { motion } from "framer-motion"
import { skills } from "../data/portfolio"

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "tools", label: "Tools" },
  { key: "design", label: "Design" },
]

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <motion.div
        className="section__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Skills</span>
        <h2 className="section__title">
          Technologies I <span className="gradient-text">work with</span>
        </h2>

        <div className="skills__grid">
          {categories.map((cat) => (
            <div key={cat.key} className="skills__group">
              <h3 className="skills__group-title">{cat.label}</h3>
              <div className="skills__pills">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      className="skills__pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
