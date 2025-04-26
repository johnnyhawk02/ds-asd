import { useEffect } from 'react';
import { addToSearchIndex, PageMetadata } from '../utils/searchUtils';

/**
 * React hook to automatically add or update a page in the search index
 * 
 * Usage example in a page component:
 * 
 * ```
 * useSearchIndexing({
 *   path: '/my-page',
 *   title: 'My Page Title',
 *   type: 'page',
 *   content: ['Main content paragraph', 'Another important section']
 * });
 * ```
 * 
 * @param pageMetadata The page metadata to add to the search index
 */
export function useSearchIndexing(pageMetadata: PageMetadata): void {
  useEffect(() => {
    // Add or update the page in the search index when the component mounts
    addToSearchIndex(pageMetadata);
    
    // No cleanup needed as we want the page to remain in the index
  }, [pageMetadata.path]); // Only re-run if the path changes
} 