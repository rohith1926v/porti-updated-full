import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import ResumePage from './components/ResumePage';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;