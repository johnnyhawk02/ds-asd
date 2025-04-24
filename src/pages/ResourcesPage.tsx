// Define the ResourceCard component outside the main component's return statement
const ResourceCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
    <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
    <p className="text-subtle-text mb-4 flex-grow">
      {description}
    </p>
    <div className="text-subtle-text/80 italic mt-auto">Coming soon</div>
  </div>
);

const ResourcesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">Resources</h1>
      
      {/* Intro Box */}
      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-10 border border-gray-200">
        <p className="text-lg text-subtle-text text-center">
           This page features a curated collection of resources for families supporting individuals with DS-ASD and PDA. We're actively compiling high-quality, evidence-based resources for you.
        </p>
      </div>
      
      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Use the defined ResourceCard component */}
        <ResourceCard 
          title="Books & Publications"
          description="Recommended reading materials, research papers, and publications focused on DS-ASD and PDA."
        />
        <ResourceCard 
          title="Organizations & Support Groups"
          description="Connect with organizations, foundations, and support groups specialized in DS-ASD and PDA support."
        />
        <ResourceCard 
          title="Educational Resources"
          description="Materials for educators, homeschooling parents, and anyone supporting the educational needs of individuals with DS-ASD and PDA."
        />
        <ResourceCard 
          title="Therapeutic Approaches"
          description="Information about therapeutic interventions, strategies, and approaches that may benefit individuals with DS-ASD and PDA."
        />
        <ResourceCard 
          title="Visual Supports & Tools"
          description="Downloadable visual schedules, social stories, communication tools, and other practical resources."
        />
        <ResourceCard 
          title="Research & Articles"
          description="Latest research findings, articles, and academic resources related to DS-ASD and PDA."
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
          className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ResourcesPage; 