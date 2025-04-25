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
  InformationCircleIcon, 
  PuzzlePieceIcon,
  UsersIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-center pt-8 md:pt-16">
        <span
          className="block h-16 w-16 bg-primary mx-auto mb-6"
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
          Supporting the <span className="text-primary">Down Syndrome</span> & <span className="text-primary">Autism</span> Journey
        </h1>
        <p className="text-lg md:text-xl text-subtle-text max-w-3xl mx-auto mb-4 leading-relaxed">
          A comprehensive resource for families and caregivers navigating the unique path of individuals with Down syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance.
        </p>
        <p className="text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto mb-10 leading-relaxed">
          Support you don't have to fight for
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          <Link 
            to="/about" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            Learn More
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/resources" 
            className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg border border-primary hover:bg-primary/5 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            <BookOpenIcon className="mr-2 h-5 w-5" />
            View Resources
          </Link>
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">
          Our Focus Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Linked to /about */}
          <Link to="/about" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1 flex flex-col h-full">
              <img 
                src={ds002Image} 
                alt="Understanding the DS-ASD Journey" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-3 text-center flex items-center justify-center">
                   <InformationCircleIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Understanding DS-ASD
                </h3>
                <p className="text-subtle-text leading-relaxed text-center">
                  Exploring the unique intersection.
                </p>
              </div>
            </div>
          </Link>
          
          {/* Card 2: Linked to /understanding-pda */}
          <Link to="/understanding-pda" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1 flex flex-col h-full">
              <img 
                src={ds003Image} 
                alt="Understanding PDA Strategies" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-3 text-center flex items-center justify-center">
                   <PuzzlePieceIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Understanding PDA
                </h3>
                <p className="text-subtle-text leading-relaxed text-center">
                  Strategies and insights.
                </p>
              </div>
            </div>
          </Link>
          
          {/* Card 3: Linked to /adapted-edaq8 */}
          <Link to="/adapted-edaq8" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1 flex flex-col h-full">
              <img 
                src={ds004Image} 
                alt="Adapted Resources and Tools" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-3 text-center flex items-center justify-center">
                   <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Adapted Resources
                </h3>
                <p className="text-subtle-text leading-relaxed text-center">
                  Tools tailored for unique needs.
                </p>
              </div>
            </div>
          </Link>

          {/* Card 4: Linked to /resources */}
          <Link to="/resources" className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1 flex flex-col h-full">
              <img 
                src={ds001Image} 
                alt="Supporting Down Syndrome and Autism Journey" 
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-text mb-3 text-center flex items-center justify-center">
                   <UsersIcon className="h-5 w-5 mr-2 text-primary"/> 
                   Community & Support
                </h3>
                <p className="text-subtle-text leading-relaxed text-center">
                  Visualizing the journey together.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-primary text-white rounded-2xl py-12 px-6 md:px-8 mb-20 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Supportive Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Connect with other families, share experiences, and access specialized resources to support your loved ones.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 