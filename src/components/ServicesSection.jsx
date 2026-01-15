import React from 'react';

const services = [
    {
        title: "Strategy",
        items: ["Brand Strategy", "Market Research", "Content Strategy", "Digital Marketing"]
    },
    {
        title: "Visual & Experience",
        items: ["User Interface (UI)", "User Experience (UX)", "Prototyping", "Motion Design"]
    },
    {
        title: "Development",
        items: ["Frontend Development", "React / Next.js", "Creative Coding", "Performance Optimization"]
    }
];

const ServicesSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-semibold mb-12">My Offerings</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                {services.map((service, index) => (
                    <div key={index} className="space-y-6">
                        <h3 className="text-xl font-medium text-white">{service.title}</h3>
                        <ul className="space-y-4">
                            {service.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-secondary group cursor-pointer hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
