import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to DS-ASD Support</h1>
        <p className="text-xl text-gray-600 mb-8">
          A resource for families and caregivers supporting individuals with Down syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/about" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </Link>
          <Link 
            to="/resources" 
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
          >
            View Resources
          </Link>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Understanding DS-ASD</h2>
          <p className="text-gray-600 mb-4">
            Learn about the unique challenges and strengths of individuals with co-occurring Down syndrome and Autism Spectrum Disorder.
          </p>
          <Link to="/about" className="text-blue-600 hover:text-blue-800 font-medium">
            Read more →
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Understanding PDA</h2>
          <p className="text-gray-600 mb-4">
            Explore Pathological Demand Avoidance, a profile within the autism spectrum characterized by high anxiety and resistance to demands.
          </p>
          <Link to="/understanding-pda" className="text-blue-600 hover:text-blue-800 font-medium">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 