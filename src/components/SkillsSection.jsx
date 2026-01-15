import React from 'react';
import { motion } from 'framer-motion';
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPandas,
    SiMongodb,
    SiJavascript,
    SiPython,
    SiGit,
    SiDocker,
    SiTypescript,
    SiNextdotjs,
    SiMysql
} from 'react-icons/si';

const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
                <h2 className="text-4xl font-bold max-w-xs">Skills</h2>
                <p className="text-secondary max-w-md">
                    I've mastered a diverse set of technologies to build modern, scalable, and high-performance applications across the full stack.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative group"
                    >
                        <skill.icon
                            className="text-4xl md:text-5xl text-secondary transition-all duration-300 cursor-pointer group-hover:scale-110"
                            onMouseEnter={(e) => e.currentTarget.style.color = skill.color}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        />
                        {/* Tooltip for accessibility/visibility */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white pointer-events-none whitespace-nowrap">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
