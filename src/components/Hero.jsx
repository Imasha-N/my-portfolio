import { motion } from "framer-motion"
import { personal } from "../data/portfolio"
import { AppIcon } from "./Icons"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__grid" />

      <div className="hero__wrapper">
        <div className="hero__content">
          <motion.p
            className="hero__badge"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="hero__badge-dot" />
            Available for work
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.p className="hero__role" custom={2} initial="hidden" animate="visible" variants={fadeUp}>
            {personal.title}
          </motion.p>

          <motion.p className="hero__tagline" custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            {personal.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a href="#projects" className="btn btn--primary">
              View Projects
              <AppIcon name="arrowRight" size={16} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in Touch
            </a>
            <a href="#cv" className="btn btn--ghost">
              <AppIcon name="download" size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {[
              { value: "3+", label: "Years Learning" },
              { value: "10+", label: "Projects Built" },
              { value: "100%", label: "Passion Driven" },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__photo-wrap"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero__photo-ring" />
          <img
            src={personal.photo}
            alt={`${personal.name} — ${personal.title}`}
            className="hero__photo"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
