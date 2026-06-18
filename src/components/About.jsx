import { motion } from "framer-motion"
import { personal } from "../data/portfolio"
import { AppIcon } from "./Icons"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const highlights = [
  { icon: "performance", title: "Performance", desc: "Fast load times & optimized bundles" },
  { icon: "design", title: "Design", desc: "Pixel-perfect, modern UI aesthetics" },
  { icon: "responsive", title: "Responsive", desc: "Flawless on every screen size" },
  { icon: "code", title: "Clean Code", desc: "Maintainable, scalable architecture" },
]

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="section__inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.span className="section__label" variants={item}>
          About Me
        </motion.span>
        <motion.h2 className="section__title" variants={item}>
          Turning ideas into <span className="gradient-text">digital experiences</span>
        </motion.h2>

        <div className="about__grid">
          <motion.div className="about__text" variants={item}>
            <p>
              I&apos;m a frontend developer passionate about building clean, performant,
              and user-friendly web applications. I specialize in React ecosystems and
              love crafting interfaces that feel intuitive and delightful.
            </p>
            <p>
              From responsive layouts to smooth animations, I focus on every detail
              to deliver polished products that users enjoy.
            </p>

            <div className="about__info">
              <span className="about__info-item">
                <AppIcon name="location" size={18} />
                {personal.location}
              </span>
              <span className="about__info-item">
                <AppIcon name="email" size={18} />
                {personal.email}
              </span>
            </div>
          </motion.div>

          <motion.div className="about__cards" variants={item}>
            {highlights.map((card) => (
              <div key={card.title} className="about__card">
                <span className="about__card-icon">
                  <AppIcon name={card.icon} size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
