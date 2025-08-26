"use client";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../config/motion.js";
import SlotCounter from "react-slot-counter";

function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "INDIA PACKAGING provided us with exceptional service and high-quality packaging solutions. Their attention to detail and efficiency are unmatched!",
      author: "Satisfied Client",
    },
    {
      stars: 4,
      quote:
        "We trust INDIA PACKAGING for our bulk production orders. Their custom solutions have greatly improved our product presentation.",
      author: "Another Happy Customer",
    },
    {
      stars: 5,
      quote:
        "India Packaging delivers quality and reliability. Their boxes make our shipping hassle-free.",
      author: "A happy client",
    },
  ];

  const Star = ({ num }) => {
    const print_star = [];
    for (let i = 0; i < num; i++) {
      print_star.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3"
          viewBox="0 0 576 512"
          key={i}
        >
          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
        </svg>
      );
    }

    return <div className="flex gap-1">{print_star}</div>;
  };

  return (
    <AnimatePresence>
      <div
        className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 px-5 md:px-10 lg:px-20 py-20 bg-[#e8e8e8]"
        id="testimonial-section"
      >
        {/* Counter Section */}
        <motion.h1
          variants={slideAnimation("right")}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          className="font-bold text-[3rem] md:text-[5rem]! text-center md:text-left w-full md:w-1/2"
        >
          ...and <br />
          <div className="text-[5rem] md:text-[10rem]">
            <SlotCounter value={500} duration={2} animateOnVisible /> +
          </div>
          <span className="text-[1rem] md:text-[2rem]">
            more happy customers!
          </span>
        </motion.h1>

        {/* Testimonials Section */}
        <motion.div
          variants={slideAnimation("left")}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-10 w-full md:w-1/2"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="font-[Lexend] w-full md:w-[45%] lg:w-[30%] p-5 h-fit rounded-lg shadow-sm border hover:shadow-xl transition bg-white"
            >
              <Star num={testimonial.stars} />
              <p className="mt-5 mb-2">{testimonial.quote}</p>
              <small>--{testimonial.author}</small>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Testimonials;
