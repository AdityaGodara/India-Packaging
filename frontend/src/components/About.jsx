import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { floatingAnimation, slideAnimation } from '../config/motion.js';

export default function About() {
    return (
        <AnimatePresence>
            <div id="about-section">
                <div className='flex flex-col md:flex-row-reverse items-center gap-20 px-20 py-10 bg-[#e8e8e8]'>
                    <motion.div
                        variants={slideAnimation("right")}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.h1 className="head-text text-[6rem]! about-head mb-5 font-[Zain]">
                            About us
                        </motion.h1>
                        <p className='text-xl'>
                            At <span className='font-bold'>India Packaging</span> we specialize in manufacturing a wide range of cardboard products—from standard varieties to custom bulk productions. Our commitment to quality and efficiency has made us a trusted name in the packaging industry.
                        </p>
                    </motion.div>

                    <motion.img {...floatingAnimation} src="/img/cardboard-set.png" alt="cardboard" className='about-img w-[30rem] h-full' />
                </div>
            </div>
        </AnimatePresence>
    )
}
