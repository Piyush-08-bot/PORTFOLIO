import React from 'react';

const LineNumbers = () => {
    
    
    const lines = Array.from({ length: 1000 }, (_, i) => i + 1);

    return (
        <div className="hidden md:flex flex-col w-[60px] border-r border-white/10 items-end pr-4 py-8 select-none pointer-events-none absolute left-0 top-0 bottom-0 overflow-hidden">
            {lines.map((num) => (
                <div key={num} className="text-[11px] font-mono text-secondary/30 h-[24px] flex items-center justify-end flex-shrink-0">
                    {num}
                </div>
            ))}
        </div>
    );
};

export default LineNumbers;
