import { Link } from 'react-router-dom';
// Import icons
import { 
  BookOpenIcon, 
  BuildingLibraryIcon, 
  AcademicCapIcon,
  BeakerIcon, 
  TableCellsIcon, // Using TableCells for Visual Supports
  DocumentTextIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useSearchIndexing } from '../hooks/useSearchIndexing';

// Define the ResourceCard component
const ResourceCard = ({ title, description, linkTo, Icon }: { 
  title: string, 
  description: string, 
  linkTo?: string,
  Icon: React.ComponentType<React.ComponentProps<'svg'>> // Type for Heroicon component
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
    <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
      <Icon className="h-5 w-5 mr-2 flex-shrink-0" /> 
      {title}
    </h2>
    <p className="text-subtle-text mb-4 flex-grow">
      {description}
    </p>
    {/* Conditionally render link or placeholder */}
    {linkTo ? (
       <Link 
        to={linkTo} 
        className="text-primary hover:underline mt-auto text-sm font-medium"
      >
        Learn More &rarr;
      </Link>
    ) : (
      <div className="text-subtle-text/80 italic mt-auto text-sm">Coming soon</div>
    )}
  </div>
);

const ResourcesPage = () => {
  // Add this page to the search index
  useSearchIndexing({
    path: '/resources',
    title: 'Resources',
    type: 'resource',
    content: [
      'A curated collection of resources for families supporting individuals with DS-ASD and PDA.',
      'Books & Publications: Recommended reading materials, research papers, and publications focused on DS-ASD and PDA.',
      'Organizations & Support Groups: Connect with organizations, foundations, and support groups specialized in DS-ASD and PDA support.',
      'Educational Resources: Materials for educators, homeschooling parents, and anyone supporting the educational needs of individuals with DS-ASD and PDA.',
      'Therapeutic Approaches: Information about therapeutic interventions, strategies, and approaches that may benefit individuals with DS-ASD and PDA.',
      'Visual Supports & Tools: Downloadable visual schedules, social stories, communication tools, and other practical resources.',
      'Research & Articles: Latest research findings, articles, and academic resources related to DS-ASD and PDA.'
    ]
  });

  return (
    <>
      
      
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
        <span className="text-primary">Resources:</span> Materials and Resources
      </h1>
      
       
        <p className="text-lg text-subtle-text text-text">
           This page features a curated collection of resources for families supporting individuals with DS-ASD and PDA. We're actively compiling high-quality, evidence-based resources for you.
           
        </p>
       
      
      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Pass the corresponding Icon component to each card */}
        <ResourceCard 
          title="Books & Publications"
          description="Recommended reading materials, research papers, and publications focused on DS-ASD and PDA."
          linkTo="/books"
          Icon={BookOpenIcon}
        />
        <ResourceCard 
          title="Organizations & Support Groups"
          description="Connect with organizations, foundations, and support groups specialized in DS-ASD and PDA support."
          Icon={BuildingLibraryIcon}
        />
        <ResourceCard 
          title="Educational Resources"
          description="Materials for educators, homeschooling parents, and anyone supporting the educational needs of individuals with DS-ASD and PDA."
          Icon={AcademicCapIcon}
        />
        <ResourceCard 
          title="Therapeutic Approaches"
          description="Information about therapeutic interventions, strategies, and approaches that may benefit individuals with DS-ASD and PDA."
          Icon={BeakerIcon}
        />
        <ResourceCard 
          title="Visual Supports & Tools"
          description="Downloadable visual schedules, social stories, communication tools, and other practical resources."
          Icon={TableCellsIcon}
        />
        <ResourceCard 
          title="Research & Articles"
          description="Latest research findings, articles, and academic resources related to DS-ASD and PDA."
          Icon={DocumentTextIcon}
        />
      </div>
      
      {/* Suggest Resource CTA */}
      <div className="mt-12 bg-primary text-white rounded-lg p-8 shadow-md text-center">
        <h2 className="text-xl font-semibold mb-3">Suggest a Resource</h2>
        <p className="mb-4 opacity-90">
          Do you know of a valuable resource that should be included here? We welcome your suggestions!
        </p>
        <p className="mb-6 opacity-90">
          Please use our contact form to submit resource recommendations.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
          Contact Us
        </a>
      </div>
    </>
  );
};

export default ResourcesPage; 