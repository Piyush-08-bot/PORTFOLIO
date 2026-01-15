import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectGrid from './components/ProjectGrid';
import SkillsSection from './components/SkillsSection';
import CoreSection from './components/CoreSection';
import ServicesSection from './components/ServicesSection';
import FeedbackSection from './components/FeedbackSection';
import DesignDeskSection from './components/DesignDeskSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import TabNavbar from './components/TabNavbar';
import BackgroundEffects from './components/BackgroundEffects';
import LineNumbers from './components/LineNumbers';

const projects = [
  {
    id: 1,
    title: "TeamSync",
    category: "Team Messaging Web App",
    description: "TeamSync is a team messaging web app that features a searchable sidebar for direct messages and groups, plus quick actions to start new chats. Each conversation shows a structured message history and supports file attachments and video calls.",
    techStack: ["React.js", "CSS", "Tailwind CSS", "GetStream", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1000&auto=format&fit=crop", // 3D Chat Bubbles
    colSpan: "col-span-1",
    demoLink: "https://team-sync-frontend.netlify.app/",
    repoLink: "https://github.com/Piyush-08-bot/TeamSync"
  },
  {
    id: 2,
    title: "Crypture",
    category: "Real-time Crypto Tracker",
    description: "Crypture is a ReactJS app that lets users track real-time crypto prices, manage a wallet, read the latest news, and use a crypto converter—all with a clean, interactive interface.",
    techStack: ["React.js", "JavaScript", "Rechart.js", "Vercel"],
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop", // 3D Bitcoin/Crypto
    colSpan: "col-span-1",
    demoLink: "https://crypture-rh6p.vercel.app/",
    repoLink: "https://github.com/Piyush-08-bot/Crypture-"
  },
  {
    id: 3,
    title: "ProjectGenie",
    category: "AI Learning Roadmap Platform",
    description: "Project Genie is an AI-powered platform that analyzes your resume to provide personalized learning roadmaps and suggest project ideas to enhance your development journey.",
    techStack: ["HTML", "CSS", "JavaScript", "Python"],
    image: "https://images.unsplash.com/photo-1616469829918-0971b2ac0e72?q=80&w=1000&auto=format&fit=crop", // 3D Document/Paper
    colSpan: "col-span-1",
    demoLink: "https://projectgenie.vercel.app/",
    repoLink: "https://github.com/vedpawar2254/Projectgenie"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white/20 font-sans flex justify-center relative">
      <BackgroundEffects />
      {/* 3-Column Layout Container */}
      <div className="w-full max-w-[1600px] flex items-start">

        {/* Left Sidebar (Fixed) */}
        <LeftSidebar />

        {/* Center Content (Scrollable) */}
        <div className="flex-1 min-w-0 border-r border-white/10">
          {/* Tab Navbar (Sticky) */}
          <TabNavbar />

          <div className="relative">
            {/* Line Numbers column (Absolute) */}
            <LineNumbers />

            <main className="w-full md:pl-[60px]">
              <HeroSection />
              <ProjectGrid projects={projects} />
              <CoreSection />
              {/* <ServicesSection /> */}
              <SkillsSection />
              {/* <FeedbackSection /> */}
              {/* <DesignDeskSection /> */}
              <ContactSection />
              <Footer />
            </main>
          </div>
        </div>

        {/* Right Sidebar (Fixed) */}
        <RightSidebar />

      </div>
    </div>
  );
}

export default App;
