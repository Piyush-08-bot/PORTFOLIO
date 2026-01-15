import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navigationItems = [
    { name: "About me", id: "about" },
    { name: "Work", id: "work" },
    { name: "Vision", id: "vision" },
    { name: "Tech stack", id: "skills" },
    { name: "Contact me", id: "contact" }
];

const RightSidebar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            });
            setCurrentTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        const handleScroll = () => {
            const sectionElements = navigationItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            const currentSection = sectionElements.reduce((acc, el) => {
                if (el && el.offsetTop <= scrollPosition) {
                    return el.id;
                }
                return acc;
            }, navigationItems[0].id);

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <aside className="hidden lg:flex flex-col w-[240px] border-l border-white/10 h-screen sticky top-0 bg-background z-40">
            <div className="px-6 h-[53px] border-b border-white/10 flex items-center justify-end">
                <span className="text-xs text-secondary font-mono">Sonipat, India • My time: {currentTime}</span>
            </div>

            <div className="flex-1 p-8 overflow-y-auto">
                <h3 className="text-secondary font-mono text-[10px] uppercase tracking-widest mb-8 opacity-50">Index</h3>
                <nav>
                    <ul className="space-y-6">
                        {navigationItems.map((item) => (
                            <li key={item.id} className="relative">
                                {activeSection === item.id && (
                                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                                )}
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => scrollToSection(e, item.id)}
                                    className={`transition-all duration-300 text-sm block ${activeSection === item.id
                                        ? "text-white font-semibold translate-x-2"
                                        : "text-secondary hover:text-white hover:translate-x-1"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="p-6 border-t border-white/10 mt-auto">
                <div className="flex justify-center gap-8 text-secondary">
                    <a href="https://github.com/Piyush-08-bot" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/piyush-raj-439930323/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedinIn size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default RightSidebar;
