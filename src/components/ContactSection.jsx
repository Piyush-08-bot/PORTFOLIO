import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Freelance Project Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoBody = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

        const mailtoLink = `mailto:piyush.raj24012006@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Work <br /> Together</h2>
                    <p className="text-secondary text-lg mb-8 max-w-sm">
                        Have a project in mind? Let's create something amazing. I'm currently available for freelance projects.
                    </p>

                    <div className="space-y-2 text-secondary">
                        <p>piyush.raj24012006@gmail.com</p>
                        <p>+91 7488875852</p>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary ml-1">Subject</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                        >
                            <option value="Freelance Project Inquiry">Freelance Project Inquiry</option>
                            <option value="General Collaboration">General Collaboration</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary ml-1">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors mt-4"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
