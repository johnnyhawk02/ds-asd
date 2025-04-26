import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MagnifyingGlassIcon, BookOpenIcon, DocumentTextIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { performSearch, SearchResult } from '../utils/searchUtils';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      // Use setTimeout to simulate async behavior, but this is actually synchronous
      setTimeout(() => {
        // Use the real search function from searchUtils
        const searchResults = performSearch(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 300); // Small delay for UX
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  // Get the appropriate icon for each result type
  const getResultIcon = (type: string) => {
    switch(type) {
      case 'book':
        return <BookOpenIcon className="h-5 w-5 mr-2 text-primary" />;
      case 'resource':
        return <DocumentTextIcon className="h-5 w-5 mr-2 text-primary" />;
      default:
        return null;
    }
  };

  // Get badge text based on result type
  const getTypeBadge = (type: string) => {
    switch(type) {
      case 'page':
        return 'Page';
      case 'article':
        return 'Article';
      case 'book':
        return 'Book';
      case 'resource':
        return 'Resource';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Search Results</h1>
      
      {/* Search query display */}
      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-12 border border-gray-200">
        <p className="text-lg text-subtle-text text-center flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-primary" />
          {query ? (
            <>Showing results for: <span className="font-semibold ml-2 text-primary">{query}</span></>
          ) : (
            'Please enter a search query'
          )}
        </p>
      </div>
      
      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      
      {/* Results counter */}
      {!isLoading && query && (
        <div className="mb-6 text-subtle-text">
          Found {results.length} {results.length === 1 ? 'result' : 'results'}
        </div>
      )}
      
      {/* Results */}
      {!isLoading && (
        <div className="space-y-4">
          {results.length === 0 && query && (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-lg text-subtle-text">No results found for "{query}"</p>
              <p className="mt-2 text-subtle-text">Try different keywords or browse our resources directly.</p>
            </div>
          )}
          
          {results.map((result) => (
            <Link 
              key={result.id} 
              to={result.url}
              className="block bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary mb-2 flex items-center">
                    {getResultIcon(result.type)}
                    {result.title}
                  </h2>
                  <p className="text-subtle-text">{result.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {getTypeBadge(result.type)}
                    </span>
                    <span className="text-primary text-sm flex items-center">
                      View
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResultsPage; 