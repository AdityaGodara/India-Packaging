import { AnimatePresence, motion } from "framer-motion";
import {
  slideAnimation,
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  bounceIn,
} from "../config/motion.js";

export default function HeroSection() {
  return (
    <AnimatePresence>
      <motion.section
        className="home z-20"
        variants={slideAnimation("left")}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between w-full items-center px-6">
          <motion.header
            variants={slideAnimation("down")}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img
              src="./img/logo.png"
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </motion.header>

          <motion.ul
            variants={bounceIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex !gap-3 text-xl md:!gap-10 text-stone-50"
          >
            <li
              className="nav-item cursor-pointer"
              onClick={() => (window.location.href = "#about-section")}
            >
              About
            </li>
            <li
              className="nav-item cursor-pointer"
              onClick={() => (window.location.href = "#contact-section")}
            >
              Contact
            </li>
            <li
              className="nav-item cursor-pointer"
              onClick={() => (window.location.href = "#product-section")}
            >
              Product & Services
            </li>
            <li
              className="nav-item cursor-pointer"
              onClick={() => (window.location.href = "#process-section")}
            >
              Process
            </li>
            <li
              className="nav-item cursor-pointer"
              onClick={() => (window.location.href = "#testimonial-section")}
            >
              Testimonials
            </li>
          </motion.ul>
        </nav>

        {/* Hero Content */}
        <motion.div
          className="home-content"
          variants={headContainerAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div variants={headTextAnimation}>
            <h1 className="head-text main-text !text-stone-50 text-[4rem]! md:text-[10rem]!">
              INDIA <br className="xl:block hidden" />
              <span className="cardboard-text">PACKAGING.</span>
            </h1>
          </motion.div>

          <motion.div
            variants={headContentAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-5"
          >
            <p className="max-w-xl font-normal text-stone-50 text-xl hero-para">
              Custom Cardboard Packaging & Bulk Production Solutions.{" "}
              <br className="xl:block hidden" />
              <strong>Any Type of Boxes</strong> and we make it.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
