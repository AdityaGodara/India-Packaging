"use client";
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { slideAnimation } from '../config/motion.js';

export default function Product() {

    const services = [
        { title: "Standard Corrugated Boxes", desc: "Durable & Cost-Effective – Perfect for everyday packaging needs, crafted with high-quality 3-ply to 5-ply corrugated sheets.", img: "1.png" },
        { title: "Heavy-Duty Packaging", desc: "Extra Strength for Heavy Loads – Reliable 7-ply to 9-ply corrugated boxes designed for industrial and bulk shipping.", img: "2.png" },
        { title: "Bulk Order Production", desc: "Scalable Manufacturing – From small batches to large-scale orders, we ensure timely delivery with consistent quality.", img: "3.png" },
        { title: "Eco-Friendly Packaging", desc: "Sustainable & Recyclable – Made with eco-friendly materials to reduce environmental impact without compromising strength.", img: "4.png" },
    ]

    return (
        <AnimatePresence>
            <div id="product-section" className='bg-[#e8e8e8]'>
                <motion.div className='px-12 py-12 flex flex-col'>
                    <motion.h1
                        variants={slideAnimation("down")}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ once: true, amount: 0.5 }}
                        className='head-text text-[6rem]! text-center font-[Zain]!'>Our products & services</motion.h1>
                    <p className='text-center mb-10'>We offer a comprehensive range of cardboard products designed for bulk production and diverse industrial needs.
                    </p>

                    <motion.div
                        variants={slideAnimation("up")}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col md:flex-row gap-10 flex-wrap justify-center md:justify-around mt-10'>

                        {services.map((service, i) => (

                            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-2xl hover:scale-[105%] duration-300" key={i}>
                                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                    <img src={`/img/services/${service.img}`} alt={service.img} />
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {service.title}
                                    </h5>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                        {service.desc}
                                    </p>
                                </div>
                                {/* <div className="p-6 pt-0">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Read More
                            </button>
                        </div> */}
                            </div>

                        ))}



                    </motion.div>

                </motion.div>

            </div>
        </AnimatePresence>
    )
}
