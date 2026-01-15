import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileBusinessImg from '../assets/profile-business.jpg';

const BusinessCardModal = ({ isOpen, onClose }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Reset flip state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsFlipped(false);
            const timer = setTimeout(() => setIsFlipped(true), 800); // Wait 0.8s then flip
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 perspective-1000"
            >
                <motion.div
                    initial={{ rotateX: 0, scale: 0.9, opacity: 0 }}
                    animate={{
                        rotateX: isFlipped ? 180 : 0,
                        scale: 1,
                        opacity: 1
                    }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg aspect-[1.58/1] rounded-xl shadow-2xl preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* FRONT SIDE (Hello) */}
                    <div
                        className="absolute inset-0 backface-hidden bg-white border border-black/10 rounded-xl flex items-center justify-center"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div
                            className="w-full h-full flex items-center justify-center rounded-xl"
                            style={{
                                backgroundImage: `radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)`,
                                backgroundSize: '30px 30px',
                                backgroundPosition: '0 0, 15px 15px'
                            }}
                        >
                            <h1 className="text-4xl font-bold text-black tracking-[0.2em] font-mono">HELLO.</h1>
                        </div>
                    </div>

                    {/* BACK SIDE (Content) */}
                    <div
                        className="absolute inset-0 backface-hidden bg-white text-black border border-black/10 rounded-xl overflow-hidden"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateX(180deg)',
                            backgroundImage: `radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)`,
                            backgroundSize: '30px 30px',
                            backgroundPosition: '0 0, 15px 15px'
                        }}
                    >
                        {/* Shine Effect */}
                        <motion.div
                            className="absolute top-0 -left-[100%] w-[80%] h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -skew-x-12 pointer-events-none z-10"
                            animate={{ left: ['-100%', '200%'] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        />

                        <div className="h-full flex flex-col p-8 relative z-20">
                            {/* Header: Avatar + Info */}
                            <div className="flex gap-6 items-center flex-1">
                                <div className="w-24 h-24 rounded-full border-2 border-black/20 shadow-lg overflow-hidden shrink-0">
                                    <img src={profileBusinessImg} alt="Profile" className="w-full h-full object-cover scale-150 -translate-y-3 transition-all duration-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-black leading-tight font-mono">Piyush Raj</h2>
                                    <p className="text-zinc-600 font-mono text-sm">Full Stack Developer</p>
                                    <div className="flex items-center gap-1.5 text-zinc-500 text-xs mt-2 font-mono">
                                        <MapPin size={12} />
                                        <span>Sonipat, Haryana, India</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: Brief Bio/Skills */}
                            <div className="mt-4 mb-8">
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    Crafting digital experiences with a focus on motion, aesthetics, and user-centric design.
                                </p>
                            </div>

                            {/* Footer: Socials & Contact */}
                            <div className="flex items-end justify-between mt-auto border-t border-black/5 pt-6">

                                {/* Left Down: LinkedIn & GitHub */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://linkedin.com/in/piyush-raj-439930323/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-black/5 hover:bg-black/10 text-black rounded-lg transition-all"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="https://github.com/Piyush-08-bot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-black/5 hover:bg-black/10 text-black rounded-lg transition-all"
                                        title="GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>

                                {/* Down Right: Email */}
                                <a
                                    href="mailto:piyush.raj24012006@gmail.com"
                                    className="flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition-colors group"
                                >
                                    <span className="group-hover:underline truncate max-w-[200px]">piyush.raj24012006@gmail.com</span>
                                    <div className="p-2 bg-black/5 rounded-full group-hover:bg-black/10 transition-colors shrink-0">
                                        <Mail size={14} />
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/* Close Button (Now at end of container and z-50) */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/5 transition-colors z-50"
                        >
                            <X size={20} className="text-gray-500" />
                        </button>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BusinessCardModal;
