import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../assets/logo002.png'; // Changed to use logo002.png

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeLinkClasses = "text-primary bg-primary/10";
  const inactiveLinkClasses = "text-subtle-text hover:text-primary hover:bg-primary/5";

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
          <div className="hidden xl:block ml-auto">
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
              <NavLink 
                to="/understanding-pda" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Understanding PDA
              </NavLink>
              <NavLink 
                to="/resources" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Resources
              </NavLink>
              <NavLink 
                to="/books" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Books
              </NavLink>
              <NavLink 
                to="/adapted-edaq8" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Proposed EDA-Q8
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Contact
              </NavLink>
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
         {/* ... mobile menu content (close button, links) remains the same ... */}
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
          <NavLink 
            to="/understanding-pda" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Understanding PDA
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Resources
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Books
          </NavLink>
          <NavLink 
            to="/adapted-edaq8" 
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
            onClick={closeMenu}
          >
            Proposed EDA-Q8
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