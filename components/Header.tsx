import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      // If we are not on home page, go to home page first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Standard route
      navigate(href);
    }
  };

  const navLinks = [
    { name: '// about', href: '#about' },
    { name: '// projects', href: '#projects' },
    { name: '// experience', href: '#experience' },
    { name: '// resume', href: '/resume' }, // New dedicated page
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`
          pointer-events-auto
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${isScrolled || isMobileMenuOpen ? 'w-full max-w-4xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' : 'w-full max-w-6xl bg-transparent'}
        `}>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-lime-400 transition-colors">
            <Terminal className="w-5 h-5" />
            <span>RV_</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm text-zinc-400 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a 
            href="mailto:rohithvirlanki1926@gmail.com"
            className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-lime-400 transition-colors"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex items-center justify-center md:hidden">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-bold font-mono text-zinc-400 hover:text-lime-400 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;