import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface NavDropdownItem {
  label: string;
  path: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  baseClasses: string;
  activeClasses: string;
  inactiveClasses: string;
}

const NavDropdown = ({ 
  label, 
  items, 
  baseClasses, 
  activeClasses, 
  inactiveClasses 
}: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Check if any child route is active
  const isChildActive = () => {
    return items.some(item => location.pathname === item.path);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Close dropdown when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`${baseClasses} ${isChildActive() ? activeClasses : inactiveClasses} flex items-center group`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={`ml-1 h-4 w-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''} ${isChildActive() ? 'text-primary' : 'text-subtle-text group-hover:text-primary'}`}
        />
      </button>
      
      {/* Dropdown menu with improved animation */}
      <div 
        className={`
          absolute left-0 mt-1 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50 
          transform transition-all duration-200 ease-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        <div className="py-1 rounded-lg overflow-hidden">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `block px-4 py-2 text-sm transition-colors duration-150 
                 ${isActive 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-subtle-text hover:bg-gray-50 hover:text-primary'}`
              }
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <span className="flex-1">{item.label}</span>
                {location.pathname === item.path && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary ml-2"></span>
                )}
              </div>
            </NavLink>
          ))}
        </div>

        {/* Decorative arrow */}
        <div className="absolute top-0 left-4 -mt-2 h-2 w-2 rotate-45 bg-white border-t border-l border-black/5"></div>
      </div>
    </div>
  );
};

export default NavDropdown; 