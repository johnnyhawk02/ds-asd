import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo002.png';
import SearchBar from './SearchBar';
import NavDropdown from './NavDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "text-primary bg-primary/10";
  const inactiveLinkClasses = "text-subtle-text hover:text-primary hover:bg-primary/5";

  // Define dropdown menus
  const knowledgeDropdown = [
    { label: 'Understanding PDA', path: '/understanding-pda' },
    { label: 'Adapted EDA-Q8', path: '/adapted-edaq8' }
  ];
  
  const resourcesDropdown = [
    { label: 'All Resources', path: '/resources' },
    { label: 'Books', path: '/books' },
    { label: 'Videos', path: '/videos' }
  ];

  // Simple nav items (no dropdown)
  const mainNavItems = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <span
                className={`block bg-primary transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] ${isScrolled ? 'h-8 w-8' : 'h-10 w-10'}`}
                style={{
                  maskImage: `url(${logoUrl})`,
                  WebkitMaskImage: `url(${logoUrl})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              ></span>
              <span className={`ml-3 font-logo text-primary font-bold transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-[24px]'}`}>
                dsasd.net
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-4">
            {/* Regular nav links */}
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Knowledge Base Dropdown */}
            <NavDropdown 
              label="Knowledge Base" 
              items={knowledgeDropdown}
              baseClasses={linkClasses}
              activeClasses={activeLinkClasses}
              inactiveClasses={inactiveLinkClasses}
            />
            
            {/* Resources Dropdown */}
            <NavDropdown 
              label="Resources" 
              items={resourcesDropdown}
              baseClasses={linkClasses}
              activeClasses={activeLinkClasses}
              inactiveClasses={inactiveLinkClasses}
            />
            
            {/* Search Bar - Desktop */}
            <div className="ml-4 w-56">
              <SearchBar onSearch={handleSearch} placeholder="Search..." />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={toggleMenu}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu} 
      />

      {/* Mobile menu panel */}
      <div 
        className={`mobile-menu fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 xl:hidden overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center">
            <span
              className="block h-8 w-8 bg-primary"
              style={{
                maskImage: `url(${logoUrl})`,
                WebkitMaskImage: `url(${logoUrl})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }}
            ></span>
            <span className="ml-2 font-logo text-primary text-xl font-bold">
              dsasd.net
            </span>
          </div>
          <button 
            onClick={closeMenu}
            className="rounded-md text-subtle-text hover:text-primary hover:bg-primary/5 p-2"
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <SearchBar onSearch={handleSearch} placeholder="Search..." />
        </div>
        
        <div className="px-2 pt-4 pb-6 space-y-2">
          {/* Home link */}
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </NavLink>
          
          {/* Main nav items */}
          {mainNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              onClick={closeMenu}
            >
              {item.label === 'About' && (
                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {item.label === 'Contact' && (
                <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {item.label}
            </NavLink>
          ))}
          
          {/* Knowledge Base Section */}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-subtle-text">Knowledge Base</div>
            {knowledgeDropdown.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                onClick={closeMenu}
              >
                {item.label.includes('PDA') && (
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {item.label.includes('EDA-Q8') && (
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )}
                {item.label}
              </NavLink>
            ))}
          </div>
          
          {/* Resources Section */}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-subtle-text">Resources</div>
            {resourcesDropdown.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `flex items-center px-3 py-2.5 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                onClick={closeMenu}
              >
                {item.label.includes('All') && (
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {item.label.includes('Books') && (
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {item.label.includes('Videos') && (
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 