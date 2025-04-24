import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <div className="text-center pt-8 md:pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
          Supporting the <span className="text-primary">Down Syndrome</span> & <span className="text-primary">Autism</span> Journey
        </h1>
        <p className="text-lg md:text-xl text-subtle-text max-w-3xl mx-auto mb-10 leading-relaxed">
          A comprehensive resource for families and caregivers navigating the unique path of individuals with Down syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          <Link 
            to="/about" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            Learn More
          </Link>
          <Link 
            to="/resources" 
            className="px-6 py-3 bg-white text-primary font-medium rounded-lg border border-primary hover:bg-primary/5 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            View Resources
          </Link>
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">
          Our Focus Areas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Understanding DS-ASD */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text mb-3 text-center">Understanding DS-ASD</h3>
            <p className="text-subtle-text mb-5 leading-relaxed text-center">
              Learn about the unique challenges and strengths of individuals with co-occurring Down syndrome and Autism Spectrum Disorder.
            </p>
            <div className="text-center mt-auto">
              <Link to="/about" className="text-primary hover:text-primary/80 font-medium inline-flex items-center group">
                Read more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Card 2: Understanding PDA */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
             <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text mb-3 text-center">Understanding PDA</h3>
            <p className="text-subtle-text mb-5 leading-relaxed text-center">
              Explore Pathological Demand Avoidance, a profile on the autism spectrum characterized by high anxiety and resistance to demands.
            </p>
            <div className="text-center mt-auto">
              <Link to="/understanding-pda" className="text-primary hover:text-primary/80 font-medium inline-flex items-center group">
                Read more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Card 3: Adapted Resources */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
             <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text mb-3 text-center">Adapted Resources</h3>
            <p className="text-subtle-text mb-5 leading-relaxed text-center">
              Access specialized tools and resources designed to support the unique needs of individuals with Down syndrome and autism.
            </p>
            <div className="text-center mt-auto">
              <Link to="/adapted-edaq8" className="text-primary hover:text-primary/80 font-medium inline-flex items-center group">
                Explore tools
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
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
            className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 