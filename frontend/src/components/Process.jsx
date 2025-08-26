"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../config/motion.js";

export default function Process() {
    const process = [
        { num: 1, head: "Consultation", text: "Understanding your packaging needs", color: "red" },
        { num: 2, head: "Production", text: "Precision manufacturing using high-grade materials", color: "rose" },
        { num: 3, head: "Quality Check", text: "Ensuring each product meets our standards", color: "blue" },
        { num: 4, head: "Delivery", text: "Timely distribution for bulk orders", color: "pink" },
    ];

    return (
        <AnimatePresence>
            <div
                className="relative px-20 py-16 bg-[#383838] overflow-hidden process-container"
                id="process-section"
            >
                {/* Background colorful circles */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#e8e8e8] rounded-full opacity-30 animate-ping"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#e8e8e8] rounded-full  opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#e8e8e8] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#e8e8e8] rounded-full opacity-25 animate-pulse"></div>

                <motion.h1
                    variants={slideAnimation("left")}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: true, amount: 0.3 }}
                    className="head-text font-[Zain] text-[6rem]! text-stone-50 relative z-10">
                    The Process
                </motion.h1>

                <motion.div
                    variants={slideAnimation("up")}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col md:flex-row justify-around relative z-10">
                    {process.map((step, i) => (
                        <div
                            className={`e-card playing bg-${step.color}-500 hover:scale-110 transition hover:shadow-xl`}
                            key={i}
                        >
                            <div className="image"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>

                            <div className="infotop text-center">
                                <h1 className="text-[2rem] font-bold">{step.num}.</h1>
                                <span className="text-2xl font-semibold">{step.head}</span>
                                <p className="p-5 text-sm opacity-80">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
