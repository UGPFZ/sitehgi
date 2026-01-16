
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">HGI ZAMBONINI</span>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase mt-0.5">ENERGIA & INOVAÇÃO</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Centered Style */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-semibold transition-all relative py-2 ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contato"
              className="hidden sm:inline-flex items-center justify-center bg-[#2b82c2] hover:bg-[#22689c] text-white px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              PEÇA SEU GÁS
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white py-4 rounded-full font-bold uppercase tracking-widest shadow-lg"
            >
              Peça Seu Gás
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
