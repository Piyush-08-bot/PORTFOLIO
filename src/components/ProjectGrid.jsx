import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectGrid = ({ projects }) => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="work">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-sm font-medium text-secondary uppercase tracking-wider">Projects</h2>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            {/* Content Side (Left) */}
                            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center relative z-10">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-secondary text-base leading-relaxed mb-6 max-w-xl">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 text-secondary text-xs font-mono rounded-full border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                                        >
                                            <Github size={16} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Side (Right) */}
                            <div className="w-full md:w-[40%] h-[300px] md:h-auto relative bg-gradient-to-br from-black/20 to-black/0 overflow-hidden flex items-center justify-center">
                                {/* Spotlight Effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full transform translate-x-12 -translate-y-12" />

                                {/* Floating Icon */}
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-48 h-48 object-contain relative z-10 filter drop-shadow-2xl"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 2, -2, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                />

                                {/* Hover Particle Effects (Bubbles) */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {/* TeamSync Bubbles */}
                                    {project.id === 1 && (
                                        <>
                                            <motion.div
                                                className="absolute right-[20%] top-[20%] w-3 h-3 bg-blue-400 rounded-full blur-[1px]"
                                                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                                            />
                                            <motion.div
                                                className="absolute left-[20%] bottom-[30%] w-2 h-2 bg-purple-400 rounded-full blur-[1px]"
                                                animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                            />
                                        </>
                                    )}
                                    {/* Crypture Coins/Orbs */}
                                    {project.id === 2 && (
                                        <>
                                            <motion.div
                                                className="absolute right-[25%] top-[25%] w-2 h-2 bg-yellow-400 rounded-full"
                                                animate={{ y: [0, -30], opacity: [0, 1, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        </>
                                    )}
                                    {/* ProjectGenie Sparks */}
                                    {project.id === 3 && (
                                        <>
                                            <motion.div
                                                className="absolute top-[30%] left-[30%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
                                                animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
