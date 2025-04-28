import { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ placeholder = 'Search...', onSearch, className = '' }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
      // Optional: Clear input after search
      // setQuery('');
    }
  };

  // Handle escape key to blur the input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && inputRef.current) {
        inputRef.current.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative transition-all duration-200 ${isFocused ? 'scale-105' : 'scale-100'} ${className}`}
    >
      <div className="relative group">
        <input
          ref={inputRef}
          type="text"
          className="w-full py-2 pl-10 pr-16 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/70 shadow-sm transition-all duration-200"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className={`w-5 h-5 transition-colors duration-200 ${isFocused ? 'text-primary' : 'text-gray-400'}`} />
        </div>
        
        {/* Button with conditional rendering to hide on mobile */}
        <button 
          type="submit" 
          className="absolute inset-y-0 right-0 flex items-center px-3 text-sm font-medium text-white bg-primary rounded-r-lg hover:bg-primary/90 focus:outline-none transition-all duration-200 ease-in-out"
          aria-label="Search"
        >
          <span className="hidden sm:inline">Search</span>
          <MagnifyingGlassIcon className="w-4 h-4 sm:hidden" />
        </button>
      </div>
      
      {/* Search shortcut hint - only visible on desktop when focused */}
      {isFocused && (
        <div className="absolute right-0 mt-1 text-xs text-subtle-text hidden sm:block">
          Press Enter to search
        </div>
      )}
    </form>
  );
};

export default SearchBar; 