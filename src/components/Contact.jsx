import { motion } from "framer-motion"
import { personal } from "../data/portfolio"
import { AppIcon } from "./Icons"

function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <motion.div
        className="section__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section__label">Contact</span>
        <h2 className="section__title">
          Let&apos;s build something <span className="gradient-text">together</span>
        </h2>

        <div className="contact__card">
          <p className="contact__text">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a href={`mailto:${personal.email}`} className="btn btn--primary contact__email">
            <AppIcon name="email" size={18} />
            {personal.email}
          </a>

          <div className="contact__socials">
            {personal.social.map((link) => (
              <a
                key={link.label}
                href={link.url}
                {...(link.url.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="contact__social"
                aria-label={link.label}
              >
                <AppIcon name={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
