import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-white/10">
            <div className="flex flex-col gap-2">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex w-fit items-center gap-2 bg-green-500/5 px-3 py-1 rounded-full border border-green-500/20 shadow-[0_0_15px_-3px_rgba(34,197,94,0.1)] mb-4"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-400/90 text-xs uppercase tracking-[0.2em] font-mono font-medium">
                        Available for freelance work
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2"
                    >
                        I Engineer the Code
                        <span className="text-white animate-blink">_</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-secondary/80"
                    >
                        Behind Beautiful Interfaces
                    </motion.div>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-secondary max-w-3xl text-l leading-relaxed"
                >
                    Hi, I’m Piyush Raj, a tech enthusiast who enjoys building clean, scalable web solutions. I’m interested in backend development, APIs, and databases, with a focus on writing maintainable code and creating intuitive, user-friendly experiences.
                </motion.p>
            </div>

            <div className="flex justify-end mt-12">
                {}
            </div>
        </section>
    );
};

export default HeroSection;
