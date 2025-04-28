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
    <div className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <div className="text-center pt-8 md:pt-16 px-4">
        <div className="flex justify-center space-x-4 mb-8">
         
          <div 
            className="h-20 w-20 bg-primary transform hover:scale-105 transition-transform duration-300 animate-spin-slow"
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
          ></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
          <span className="text-primary">DS-ASD:</span> Where Differences Unite, and Understanding Empowers
        </h1>
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text">
          How We Support You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Linked to /about */}
          <Link to="/about" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={ds002Image} 
                  alt="DS-ASD Insights" 
                  className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-2 text-center flex items-center justify-center">
                   <InformationCircleIcon className="h-5 w-5 mr-2 text-primary"/> 
                   DS-ASD Insights
                </h3>
              </div>
            </div>
          </Link>
          
          {/* Card 2: Linked to /understanding-pda */}
          <Link to="/understanding-pda" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={ds003Image} 
                  alt="PDA Approaches" 
                  className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-2 text-center flex items-center justify-center">
                   <PuzzlePieceIcon className="h-5 w-5 mr-2 text-primary"/> 
                   PDA Approaches
                </h3>
              </div>
            </div>
          </Link>
          
          {/* Card 3: Linked to /adapted-edaq8 */}
          <Link to="/adapted-edaq8" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={ds004Image} 
                  alt="Specialized Tools" 
                  className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-2 text-center flex items-center justify-center">
                   <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Specialized Tools
                </h3>
              </div>
            </div>
          </Link>

          {/* Card 4: Linked to /resources */}
          <Link to="/resources" className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-2 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={ds001Image} 
                  alt="Community Support" 
                  className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-2 text-center flex items-center justify-center">
                   <UsersIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Community Support
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl py-12 px-6 md:px-10 mb-16 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <HeartIcon className="h-12 w-12 mx-auto mb-6 text-white/90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Join Our Community</h2>
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