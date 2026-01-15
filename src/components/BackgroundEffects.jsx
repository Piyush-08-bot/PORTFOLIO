import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const BackgroundEffects = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Spotlight Effect */}
            <motion.div
                className="absolute rounded-full bg-white/10 blur-[120px]"
                style={{
                    width: 600,
                    height: 600,
                    x,
                    y,
                    top: -300, // Center the div on cursor
                    left: -300, // Center the div on cursor
                }}
            />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle Static Gradients for depth (dimmed) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" />
        </div>
    );
};

export default BackgroundEffects;
