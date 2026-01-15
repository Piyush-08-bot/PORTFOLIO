import React, { useState, useEffect } from 'react';

const TabNavbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'work', 'contact'];
            const scrollPosition = window.scrollY + 100; 

            for (const section of sections) {
                const element = document.getElementById(section === 'home' ? '' : section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(section);
                        break;
                    }
                } else if (section === 'home' && scrollPosition < 300) {
                    setActiveTab('home');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-30 bg-background border-b border-white/10 w-full">
            <div className="flex items-center h-[53px] px-4 md:px-6">
                <nav className="flex h-full">
                    <a
                        href="#"
                        className={`flex items-center px-3 md:px-6 h-full border-b-2 transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap ${activeTab === 'home'
                            ? 'border-white text-white'
                            : 'border-transparent text-secondary hover:text-white hover:border-white/20'
                            }`}
                    >
                        Piyush.info
                    </a>
                    <a
                        href="#work"
                        className={`flex items-center px-3 md:px-6 h-full border-b-2 transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap ${activeTab === 'work'
                            ? 'border-white text-white'
                            : 'border-transparent text-secondary hover:text-white hover:border-white/20'
                            }`}
                    >
                        work.done
                    </a>
                    <a
                        href="#contact"
                        className={`flex items-center px-3 md:px-6 h-full border-b-2 transition-all duration-300 font-mono text-xs md:text-sm whitespace-nowrap ${activeTab === 'contact'
                            ? 'border-white text-white'
                            : 'border-transparent text-secondary hover:text-white hover:border-white/20'
                            }`}
                    >
                        connect
                    </a>
                </nav>

                <div className="ml-auto flex items-center">
                    <div className="flex items-center gap-2 bg-[#1C2C22] px-2 md:px-3 py-1.5 rounded text-green-400 text-[10px] md:text-xs border border-green-900/50 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                        <span className="font-medium tracking-wide">Open to new work</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabNavbar;
