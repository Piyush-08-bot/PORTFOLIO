import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full max-w-7xl mx-auto border-t border-white/10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary p-6">
                <div>
                    &copy; {new Date().getFullYear()} Piyush Raj. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/Piyush-08-bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/piyush-raj-439930323/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
