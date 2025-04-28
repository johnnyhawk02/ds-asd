import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo002.png';
import SearchBar from './SearchBar';
import NavDropdown from './NavDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <span
                className="block h-10 w-10 bg-primary transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
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
              <span className="ml-3 font-logo text-primary text-[24px] font-bold">
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
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu} 
      />

      {/* Mobile menu panel */}
      <div 
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <SearchBar onSearch={handleSearch} placeholder="Search..." />
        </div>
        
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Home link */}
          <NavLink
            to="/"
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          
          {/* Main nav items */}
          {mainNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Knowledge Base Section */}
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500">Knowledge Base</div>
            {knowledgeDropdown.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          
          {/* Resources Section */}
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500">Resources</div>
            {resourcesDropdown.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                onClick={closeMenu}
              >
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