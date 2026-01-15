import React from 'react';

const testimonials = [
    {
        quote: "Piyush is a rare breed of designer who understands both the aesthetic and technical sides of the web. His work transformed our brand.",
        author: "Sarah Jenkins",
        role: "CEO, StartUp Inc."
    },
    {
        quote: "The attention to detail and animations are next level. We saw a 40% increase in engagement after the redesign.",
        author: "Mark Thompson",
        role: "Product Lead, TechFlow"
    }
];

const FeedbackSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-surface/30 rounded-3xl my-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Feedback That <br /> Fuels Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 relative">
                        <span className="text-6xl text-white/10 absolute top-4 left-4 font-serif">"</span>
                        <p className="text-lg text-secondary mb-6 relative z-10 pt-4">
                            {item.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10"></div>
                            <div>
                                <h4 className="text-white font-medium">{item.author}</h4>
                                <p className="text-secondary text-sm">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeedbackSection;
