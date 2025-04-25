const AboutPage = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-10 text-center">About DS-ASD</h1>
      
      {/* Intro Box */}
      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-12 border border-gray-200">
        <p className="text-lg text-subtle-text text-center">
          DS-ASD refers to the co-occurrence of Down syndrome (DS) and Autism Spectrum Disorder (ASD). While these are distinct conditions, they can occur together, creating a unique profile of strengths and challenges.
        </p>
      </div>
      
      {/* Main Content using Prose for better typography */}
      <div className="prose prose-lg lg:prose-xl text-text max-w-none space-y-6">
        <h2 className="text-2xl font-semibold text-primary !mt-8 !mb-4">Understanding Down Syndrome</h2>
        <p>
          Down syndrome is a genetic condition caused by the presence of an extra copy of chromosome 21. It is associated with physical growth delays, mild to moderate intellectual disability, and characteristic facial features.
        </p>
        <p>
          People with Down syndrome often have strong visual learning skills, good social skills, and can lead fulfilling lives with appropriate support and accommodation.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4">Understanding Autism Spectrum Disorder</h2>
        <p>
          Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by challenges with social skills, repetitive behaviors, speech, and nonverbal communication. The effects and severity of symptoms can vary widely among individuals.
        </p>
        <p>
          Many people with autism have exceptional abilities in visual skills, music, math, and art. They may also have different sensory experiences compared to neurotypical individuals.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4">When Down Syndrome and Autism Co-occur</h2>
        <p>
          Research suggests that approximately 10-20% of individuals with Down syndrome also have Autism Spectrum Disorder. The co-occurrence can present unique challenges in diagnosis, communication, and support strategies.
        </p>
        <p>
          Children and adults with both conditions may require specialized approaches that address the specific combination of their needs, strengths, and challenges.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4">Support and Resources</h2>
        <p>
          Families supporting individuals with DS-ASD benefit from multidisciplinary approaches combining expertise in both conditions. Early intervention, specialized educational programs, and creating sensory-friendly environments are important components of support.
        </p>
        <p>
          This website aims to provide resources, information, and community for families navigating the unique journey of supporting loved ones with DS-ASD.
        </p>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white p-8 rounded-lg mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Need Further Information?</h3>
        <p className="mb-6 opacity-90">
          Our resources section contains additional materials, research, and support options for families and caregivers.
        </p>
        <a 
          href="/resources" 
          className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          Explore Resources
        </a>
      </div>
    </>
  );
};

export default AboutPage; 