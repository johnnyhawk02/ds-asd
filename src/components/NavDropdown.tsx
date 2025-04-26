import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
  
  // Check if any child route is active
  const isChildActive = () => {
    return items.some(item => window.location.pathname === item.path);
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
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`${baseClasses} ${isChildActive() ? activeClasses : inactiveClasses} flex items-center`}
        onClick={toggleDropdown}
      >
        {label}
        <ChevronDownIcon
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {/* Dropdown menu */}
      <div 
        className={`
          absolute left-0 mt-1 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 transform transition-all
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        <div className="py-1">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `block px-4 py-2 text-sm ${isActive ? 'bg-primary/10 text-primary' : 'text-subtle-text hover:bg-gray-100'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown; 