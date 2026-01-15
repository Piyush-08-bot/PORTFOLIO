import React, { useState } from 'react';
import { MapPin, Mail, Phone, ShoppingBag, Languages, Briefcase, ChevronRight, FileDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import profileBusinessImg from '../assets/profile-business.jpg';
import BusinessCardModal from './BusinessCardModal';
import ScheduleCallModal from './ScheduleCallModal';

const LeftSidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    return (
        <>
            <aside className="hidden lg:flex flex-col w-[300px] border-r border-white/10 h-screen sticky top-0 bg-background z-40">
                <div className="px-6 h-[53px] border-b border-white/10 flex items-center">
                    <p className="text-xs text-secondary font-mono">Welcome to my world!</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                    {/* Profile Header - Clickable */}
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-4 cursor-pointer group hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                    >
                        <div className="w-12 h-12 rounded bg-secondary/20 overflow-hidden group-hover:scale-105 transition-transform relative">
                            <img src={profileImg} alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                            <img src={profileBusinessImg} alt="Profile Hover" className="absolute inset-0 w-full h-full object-cover scale-150 -translate-y-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg leading-none group-hover:text-white transition-colors">Piyush Raj</h2>
                            <p className="text-sm text-secondary mt-1">Full Stack Developer</p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <p className="text-secondary text-base leading-relaxed">
                            I’m a full-stack developer focused on scalable systems, databases, and exploring AI.
                        </p>
                    </div>

                    {/* Details List */}
                    <div className="space-y-5 text-sm">
                        <div className="flex items-center gap-3 text-secondary">
                            <Briefcase size={16} />
                            <span>1+ Year of Experience</span>
                        </div>
                        <div className="flex items-center gap-3 text-secondary">
                            <MapPin size={16} />
                            <span>Sonipat, Haryana, India</span>
                        </div>
                        <a href="mailto:piyush.raj24012006@gmail.com" className="flex items-center gap-3 text-secondary hover:text-white transition-colors">
                            <Mail size={16} className="shrink-0" />
                            <span className="truncate">piyush.raj24012006@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-3 text-secondary">
                            <Phone size={16} />
                            <span>+91 7488875852</span>
                        </div>
                    </div>

                    <a
                        // href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full px-4 py-3 border border-white/10 rounded-lg hover:border-white/30 transition-colors group"
                    >
                        <span className="font-medium text-sm">Resume</span>
                        <FileDown size={16} className="text-secondary group-hover:text-white transition-colors" />
                    </a>

                </div>

                <div className="p-6 border-t border-white/10 space-y-3 bg-background">
                    <button
                        onClick={() => setIsScheduleOpen(true)}
                        className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition-colors text-sm"
                    >
                        Schedule a call
                    </button>
                    <a
                        href="mailto:piyush.raj24012006@gmail.com"
                        className="flex items-center justify-center w-full bg-transparent border border-white/20 text-white font-medium py-3 rounded hover:bg-white/5 transition-colors text-sm"
                    >
                        Work with me
                    </a>
                </div>
            </aside>

            <BusinessCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ScheduleCallModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        </>
    );
};

export default LeftSidebar;
