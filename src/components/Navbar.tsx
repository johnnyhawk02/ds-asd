import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo002.png'; // Changed to use logo002.png
import SearchBar from './SearchBar';
import NavDropdown from './NavDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    
    // Prevent scrolling when menu is open
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
    // For now, just navigate to a search results page with the query as a parameter
    // In the future, this could connect to a real search implementation
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "text-primary bg-primary/10";
  const inactiveLinkClasses = "text-subtle-text hover:text-primary hover:bg-primary/5";

  // Define menu structure
  const knowledgeDropdown = [
    { label: 'Understanding PDA', path: '/understanding-pda' },
    { label: 'Proposed EDA-Q8', path: '/adapted-edaq8' }
  ];
  
  const resourcesDropdown = [
    { label: 'All Resources', path: '/resources' },
    { label: 'Books', path: '/books' },
    { label: 'Videos', path: '/videos' }
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Now always first */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0 group">
              {/* Logo using mask */}
              <span
                id="navbar-logo-mask" // ID for targeting background color
                className="block h-10 w-10 bg-primary transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" // Changed bg-logo-orange to bg-primary
                style={{
                  maskImage: `url(${logoUrl})`,
                  WebkitMaskImage: `url(${logoUrl})`, // For Safari/older browsers
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              ></span>
              <span 
                id="navbar-site-name" 
                className="ml-3 font-logo text-primary text-[28px] font-bold transition-colors duration-200" // Changed text-logo-orange to text-primary, text-[32px] to text-[28px]
              >
                dsasd.net
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu - Add ml-auto */}
          <div className="hidden xl:flex xl:items-center xl:justify-between ml-auto">
            <div className="flex items-center space-x-4">
               {/* NavLinks using xl breakpoint */}
               <NavLink 
                to="/" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                About
              </NavLink>
              
              {/* Dropdowns */}
              <NavDropdown 
                label="Knowledge Base" 
                items={knowledgeDropdown}
                baseClasses={linkClasses}
                activeClasses={activeLinkClasses}
                inactiveClasses={inactiveLinkClasses}
              />
              
              <NavDropdown 
                label="Resources" 
                items={resourcesDropdown}
                baseClasses={linkClasses}
                activeClasses={activeLinkClasses}
                inactiveClasses={inactiveLinkClasses}
              />
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Contact
              </NavLink>
            </div>
            
            {/* Search Bar - Desktop */}
            <div className="ml-4 w-64">
              <SearchBar onSearch={handleSearch} placeholder="Search site..." />
            </div>
          </div>
          
          {/* Mobile menu button - Add ml-auto */}
          <div className="xl:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 focus:outline-none z-50 relative"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay - Hidden on xl and up */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu} 
      />

      {/* Mobile menu - Adjust positioning and transform */}
      <div 
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         {/* Close button */}
         <div className="flex justify-start p-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-subtle-text hover:text-primary hover:bg-primary/10"
            >
              <span className="sr-only">Close menu</span>
               <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="px-4 pt-2 pb-4">
          <SearchBar onSearch={handleSearch} placeholder="Search site..." />
        </div>
        
        <div className="px-4 pt-4 pb-3 space-y-1">
           {/* Mobile Links using NavLink */}
           <NavLink 
            to="/" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          
          {/* Divider with label for Knowledge Base */}
          <div className="px-3 py-2 text-xs font-semibold text-gray-500">Knowledge Base</div>
          
          <NavLink 
            to="/understanding-pda" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Understanding PDA
          </NavLink>
          <NavLink 
            to="/adapted-edaq8" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Proposed EDA-Q8
          </NavLink>
          
          {/* Divider with label for Resources */}
          <div className="px-3 py-2 text-xs font-semibold text-gray-500">Resources</div>
          
          <NavLink 
            to="/resources" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            All Resources
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Books
          </NavLink>
          <NavLink 
            to="/videos" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Videos
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 