import React from 'react';
import { motion } from 'framer-motion';

const CoreSection = () => {
    return (
        <section id="vision" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="flex-1">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-10 leading-none select-none">
                        MY <br />
                        VISION
                    </h2>
                </div>
                <div className="flex-1 pt-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                            Inside My <span className="text-secondary">Creative Core</span>
                        </h3>
                        <p className="text-l text-secondary leading-relaxed mb-8">
                            I build scalable, user-focused digital products by combining strong problem-solving skills with modern web development, focusing on how systems work and how users interact.With experience in JavaScript, React, and Python, and a growing interest in AI-driven solutions, I turn complex ideas into clean, high-impact applications.
                        </p>
                        <p className="text-l text-secondary leading-relaxed mb-8">
                            From concept to deployment, I value clean code, performance, and continuous learning, building products designed to scale.
                        </p>

                        <div className="flex gap-4">
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-default transition-colors">Strategy</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-default transition-colors">Design</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 cursor-default transition-colors">Development</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CoreSection;
