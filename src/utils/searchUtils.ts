import { booksData } from '../data/bookData';

/* 
 * HOW TO UPDATE THE SEARCH INDEX:
 * 
 * When you add a new page to your application:
 * 
 * 1. Add a new entry to the pageIndex array below
 * 2. Follow the same structure:
 *    - path: The URL path to the page
 *    - title: The page title
 *    - type: The type of content ('page', 'resource', etc.)
 *    - content: An array of important text content from the page
 * 
 * Example for a new page:
 * 
 * {
 *   path: '/new-page',
 *   title: 'My New Page',
 *   type: 'page',
 *   content: [
 *     'First important paragraph or section from the page',
 *     'Second important section',
 *     'Additional key information'
 *   ]
 * }
 * 
 * For best search results:
 * - Include the most important/searchable content
 * - Break content into logical chunks (paragraphs, sections)
 * - Add author names, keywords, and important terminology
 */

// Page metadata structure for search indexing
export interface PageMetadata {
  path: string;
  title: string;
  type: 'page' | 'resource' | 'article' | 'book';
  content: string[];  // Array of text content blocks from the page
}

// Search result interface
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'article' | 'resource' | 'book';
  relevance: number; // Score to determine how relevant the result is
}

// Define the metadata for all pages in the application
// This contains actual content from the page components
const pageIndex: PageMetadata[] = [
  {
    path: '/about',
    title: 'About DS-ASD',
    type: 'page',
    content: [
      'Down syndrome is a genetic condition caused by the presence of an extra copy of chromosome 21.',
      'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by challenges with social skills.',
      'Research suggests that approximately 10-20% of individuals with Down syndrome also have Autism Spectrum Disorder.',
      'Children and adults with both conditions may require specialized approaches that address the specific combination of their needs, strengths, and challenges.',
      'Families supporting individuals with DS-ASD benefit from multidisciplinary approaches combining expertise in both conditions.'
    ]
  },
  {
    path: '/understanding-pda',
    title: 'Understanding PDA',
    type: 'page',
    content: [
      'Pathological Demand Avoidance (PDA) is considered by many to be a profile within the autism spectrum.',
      'It is characterized by an extreme avoidance of everyday demands and expectations, driven by high levels of anxiety.',
      'The demand avoidance in PDA is not defiance. It stems from an anxiety-based need to control the environment.',
      'Traditional parenting or teaching methods relying on clear boundaries, rewards, and consequences often fail for individuals with PDA.',
      'People with PDA typically respond better to flexible, collaborative approaches focused on reducing demands and offering a sense of control and choice.',
      'With the right, low-demand approaches, individuals with PDA can thrive, develop coping strategies, and engage more comfortably with the world.'
    ]
  },
  {
    path: '/adapted-edaq8',
    title: 'Adapted EDA-Q8 Assessment',
    type: 'resource',
    content: [
      'Proposed adaptation of the EDA-Q8 assessment tool for non-verbal children with Down Syndrome.',
      'The Extreme Demand Avoidance Questionnaire (EDA-Q8) is useful for identifying demand avoidance behaviors.',
      'The standard version relies on verbal expressions unsuitable for many non-verbal children with Down Syndrome.',
      'This proposed adaptation modifies item descriptions to focus on observable, non-verbal behaviors relevant for children with Down Syndrome.',
      'Adapting the assessment this way may help caregivers and professionals better identify demand avoidance patterns.'
    ]
  },
  {
    path: '/resources',
    title: 'Resources',
    type: 'resource',
    content: [
      'A curated collection of resources for families supporting individuals with DS-ASD and PDA.',
      'Resources include books, publications, organizations, support groups, educational resources, therapeutic approaches, visual supports, tools, research, and articles.',
      'Educational resources for educators, homeschooling parents, and anyone supporting the educational needs of individuals with DS-ASD and PDA.',
      'Information about therapeutic interventions, strategies, and approaches that may benefit individuals with DS-ASD and PDA.',
      'Downloadable visual schedules, social stories, communication tools, and other practical resources.'
    ]
  },
  {
    path: '/books',
    title: 'Books & Publications',
    type: 'resource',
    content: [
      'A curated list of recommended books covering Down Syndrome, Autism Spectrum Disorder, the DS-ASD intersection, and Pathological Demand Avoidance (PDA).',
      'Books include topics on motor skills, communication, personal insights into ASD, and family experiences with PDA.',
      'Resources from authors like Patricia C. Winders, Maryanne Bruni, Libby Kumin, Barry M. Prizant, Naoki Higashida, Ellen Notbohm, Margaret Froehlke, Robin Sattel, Phil Christie, and Eliza Fricker.'
    ]
  },
  {
    path: '/videos',
    title: 'Educational Videos',
    type: 'resource',
    content: [
      'A curated collection of informative videos on Down Syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance.',
      'Educational resources providing valuable insights and practical guidance.',
      'Video content from experts in the field of DS, ASD, and PDA.',
      'Visual learning resources for parents, caregivers, and professionals.'
    ]
  },
  {
    path: '/contact',
    title: 'Contact Us',
    type: 'page',
    content: [
      'Get in touch with us for questions, suggestions, or to share your experiences.',
      'Whether you have questions, suggestions, or want to share your experiences, please feel free to reach out.',
      'Email: info@dsasd.net',
      'Follow us on social media.',
      'We\'re working on implementing a contact form. In the meantime, please use the email address provided.'
    ]
  }
];

// Create an index for book content
const bookIndex = booksData.map((book, _index) => ({
  path: '/books',
  title: book.title,
  type: 'book' as const,
  content: [
    book.title,
    `By ${book.authors}`,
    `Focus: ${book.focusArea}`,
    `For: ${book.targetAudience}`,
    book.summary
  ]
}));

// Combine all indexed content
const allIndexedContent = [...pageIndex, ...bookIndex];

/**
 * Helper function to add a new page to the search index
 * Can be called from any component to add its content to the search index
 * 
 * @param newPage The page metadata to add to the index
 */
export function addToSearchIndex(newPage: PageMetadata): void {
  // Check if page with same path already exists
  const existingIndex = pageIndex.findIndex(page => page.path === newPage.path);
  
  if (existingIndex >= 0) {
    // Update existing page
    pageIndex[existingIndex] = newPage;
    console.log(`Updated search index for ${newPage.path}`);
  } else {
    // Add new page
    pageIndex.push(newPage);
    console.log(`Added ${newPage.path} to search index`);
  }
}

/**
 * Performs a search across all indexed content
 * @param query The search query
 * @returns Array of search results sorted by relevance
 */
export function performSearch(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/);
  
  const results = allIndexedContent.map((item, index) => {
    // Join all content pieces for this item
    const fullContent = item.content.join(' ');
    const allText = `${item.title} ${fullContent}`.toLowerCase();
    
    // Calculate relevance score
    let score = 0;
    
    // Check for exact matches in title (highest score)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10;
    }
    
    // Check for exact matches in content
    if (allText.includes(normalizedQuery)) {
      score += 5;
    }
    
    // Check for individual term matches
    queryTerms.forEach(term => {
      if (term.length < 3) return; // Skip very short terms
      
      if (item.title.toLowerCase().includes(term)) {
        score += 3;
      }
      
      if (allText.includes(term)) {
        score += 1;
      }
    });
    
    // If we have any score, create a result
    if (score > 0) {
      // Find a matching content piece to use as description
      let description = '';
      
      // Try to find a content piece containing the query for the description
      for (const contentPiece of item.content) {
        if (contentPiece.toLowerCase().includes(normalizedQuery)) {
          description = contentPiece;
          break;
        }
      }
      
      // If no specific match found, use the first content piece
      if (!description && item.content.length > 0) {
        description = item.content[0];
      }
      
      // For books, create a specific format
      if (item.type === 'book') {
        description = `${item.content[1]}. ${item.content[4].substring(0, 120)}...`;
      }
      
      return {
        id: `${item.type}-${index}`,
        title: item.title,
        description: description,
        url: item.path,
        type: item.type,
        relevance: score
      };
    }
    
    return null;
  }).filter((result): result is SearchResult => result !== null);
  
  // Sort by relevance score (descending)
  return results.sort((a, b) => b.relevance - a.relevance);
} 