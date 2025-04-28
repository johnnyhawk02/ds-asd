import { Link } from 'react-router-dom';
import ds001Image from '../assets/ds001.jpg';
import ds002Image from '../assets/ds002.jpg';
import ds003Image from '../assets/ds003.jpg';
import ds004Image from '../assets/ds004.jpg';
import logoUrl from '../assets/logo002.png';
import { 
  ArrowRightIcon, 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon, 
  HeartIcon,
  InformationCircleIcon, 
  PuzzlePieceIcon,
  UsersIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { useSearchIndexing } from '../hooks/useSearchIndexing';

const HomePage = () => {
  // Add this page to the search index
  useSearchIndexing({
    path: '/',
    title: 'DS-ASD Home',
    type: 'page',
    content: [
      'DS-ASD: Where Differences Unite, and Understanding Empowers',
      'A resource hub for families and caregivers',
      'DS-ASD Insights',
      'PDA Approaches',
      'Specialized Tools',
      'Community Support'
    ]
  });

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-left pt-8 md:pt-16 px-4">
        <div className="flex items-center justify-start space-x-4 mb-8">
          <span
            className="block h-16 w-16 bg-primary"
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
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight max-w-4xl">
          <span className="text-primary">DS-ASD:</span> Where Differences Unite, and Understanding Empowers
        </h1>
        <p className="text-lg text-subtle-text mb-8 max-w-2xl">
          A dedicated resource hub for families, caregivers, and professionals supporting individuals with Down Syndrome and Autism Spectrum Disorder.
        </p>
        <div className="flex flex-wrap justify-start gap-5 md:gap-6">
          <Link 
            to="/about" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Discover Our Mission
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/resources" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-lg border border-primary hover:bg-primary/5 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <BookOpenIcon className="mr-2 h-5 w-5" />
            Explore Resources
          </Link>
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="mb-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            How We Support You
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Linked to /about */}
          <Link to="/about" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={ds002Image} 
                  alt="DS-ASD Insights" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-white text-xl font-semibold text-center drop-shadow-lg">
                  DS-ASD Insights
                </div>
              </div>
              <div className="p-6 flex-grow flex items-center justify-center">
                <div className="flex items-center text-primary">
                  <InformationCircleIcon className="h-5 w-5 mr-2"/> 
                  <span className="font-medium">Learn More</span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Card 2: Linked to /understanding-pda */}
          <Link to="/understanding-pda" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={ds003Image} 
                  alt="PDA Approaches" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-white text-xl font-semibold text-center drop-shadow-lg">
                  PDA Approaches
                </div>
              </div>
              <div className="p-6 flex-grow flex items-center justify-center">
                <div className="flex items-center text-primary">
                  <PuzzlePieceIcon className="h-5 w-5 mr-2"/> 
                  <span className="font-medium">Learn More</span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Card 3: Linked to /adapted-edaq8 */}
          <Link to="/adapted-edaq8" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={ds004Image} 
                  alt="Specialized Tools" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-white text-xl font-semibold text-center drop-shadow-lg">
                  Specialized Tools
                </div>
              </div>
              <div className="p-6 flex-grow flex items-center justify-center">
                <div className="flex items-center text-primary">
                  <WrenchScrewdriverIcon className="h-5 w-5 mr-2"/> 
                  <span className="font-medium">Learn More</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4: Linked to /resources */}
          <Link to="/resources" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={ds001Image} 
                  alt="Community Support" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 text-white text-xl font-semibold text-center drop-shadow-lg">
                  Community Support
                </div>
              </div>
              <div className="p-6 flex-grow flex items-center justify-center">
                <div className="flex items-center text-primary">
                  <UsersIcon className="h-5 w-5 mr-2"/> 
                  <span className="font-medium">Learn More</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl py-16 px-8 md:px-12 mb-16 shadow-xl mx-4">
        <div className="max-w-3xl mx-auto text-center">
          <HeartIcon className="h-16 w-16 mx-auto mb-8 text-white/90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Connect with families and professionals who understand the unique challenges and joys of supporting individuals with DS-ASD.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
            Reach Out Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 