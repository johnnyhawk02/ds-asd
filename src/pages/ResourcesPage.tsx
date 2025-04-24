const ResourcesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Resources</h1>
      
      <div className="bg-background rounded-xl p-8 mb-10 shadow-sm">
        <p className="text-lg text-gray-700">
          This page features a curated collection of resources for families supporting individuals with DS-ASD and PDA. We're in the process of compiling high-quality, evidence-based resources for you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Books & Publications</h2>
          <p className="text-gray-600 mb-4">
            We'll be listing recommended reading materials, research papers, and publications focused on DS-ASD and PDA.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Organizations & Support Groups</h2>
          <p className="text-gray-600 mb-4">
            Connect with organizations, foundations, and support groups specialized in DS-ASD and PDA support.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Educational Resources</h2>
          <p className="text-gray-600 mb-4">
            Materials for educators, homeschooling parents, and anyone supporting the educational needs of individuals with DS-ASD and PDA.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Therapeutic Approaches</h2>
          <p className="text-gray-600 mb-4">
            Information about therapeutic interventions, strategies, and approaches that may benefit individuals with DS-ASD and PDA.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Visual Supports & Tools</h2>
          <p className="text-gray-600 mb-4">
            Downloadable visual schedules, social stories, communication tools, and other practical resources.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Research & Articles</h2>
          <p className="text-gray-600 mb-4">
            Latest research findings, articles, and academic resources related to DS-ASD and PDA.
          </p>
          <div className="text-gray-500 italic">Coming soon</div>
        </div>
      </div>
      
      <div className="mt-12 bg-secondary text-white rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-semibold mb-3">Suggest a Resource</h2>
        <p className="mb-4">
          Do you know of a valuable resource that should be included here? We welcome your suggestions and contributions to make this resource library as helpful as possible.
        </p>
        <p className="mb-4">
          Please use our contact form to submit resource recommendations.
        </p>
        <a href="/contact" className="inline-block px-6 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-gray-50 transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ResourcesPage; 