import React from 'react';

const articles = [
    {
        title: "The Future of Digital Design",
        category: "Thoughts",
        date: "Dec 2024",
        link: "#"
    },
    {
        title: "Mastering Framer Motion",
        category: "Tutorial",
        date: "Nov 2024",
        link: "#"
    }
];

const DesignDeskSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5 mb-20">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-bold">From My <span className="text-secondary">Design Desk</span></h2>
                <a href="#" className="text-sm border-b border-white pb-1 hidden md:block hover:opacity-70 transition-opacity">View All</a>
            </div>

            <div className="space-y-4">
                {articles.map((article, index) => (
                    <div key={index} className="group flex items-center justify-between py-8 border-t border-white/10 cursor-pointer hover:bg-white/5 px-4 transition-colors -mx-4 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                            <span className="text-sm text-secondary w-20">{article.category}</span>
                            <h3 className="text-2xl font-medium group-hover:pl-4 transition-all duration-300">{article.title}</h3>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="text-sm text-secondary hidden md:block">{article.date}</span>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DesignDeskSection;
