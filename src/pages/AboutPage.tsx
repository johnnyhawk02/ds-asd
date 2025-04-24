const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About DS-ASD</h1>
      
      <div className="bg-background rounded-xl p-8 mb-10 shadow-sm">
        <p className="text-lg text-gray-700">
          DS-ASD refers to the co-occurrence of Down syndrome (DS) and Autism Spectrum Disorder (ASD). While these are distinct conditions, they can occur together in the same individual, creating a unique profile of strengths and challenges.
        </p>
      </div>
      
      <div className="prose lg:prose-lg text-gray-700 max-w-none">
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Understanding Down Syndrome</h2>
        <p className="mb-4">
          Down syndrome is a genetic condition caused by the presence of an extra copy of chromosome 21. It is associated with physical growth delays, mild to moderate intellectual disability, and characteristic facial features.
        </p>
        <p className="mb-4">
          People with Down syndrome often have strong visual learning skills, good social skills, and can lead fulfilling lives with appropriate support and accommodation.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Understanding Autism Spectrum Disorder</h2>
        <p className="mb-4">
          Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by challenges with social skills, repetitive behaviors, speech, and nonverbal communication. The effects and severity of symptoms can vary widely among individuals.
        </p>
        <p className="mb-4">
          Many people with autism have exceptional abilities in visual skills, music, math, and art. They may also have different sensory experiences compared to neurotypical individuals.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">When Down Syndrome and Autism Co-occur</h2>
        <p className="mb-4">
          Research suggests that approximately 10-20% of individuals with Down syndrome also have Autism Spectrum Disorder. The co-occurrence can present unique challenges in diagnosis, communication, and support strategies.
        </p>
        <p className="mb-4">
          Children and adults with both conditions may require specialized approaches that address the specific combination of their needs, strengths, and challenges.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Support and Resources</h2>
        <p className="mb-4">
          Families supporting individuals with DS-ASD benefit from multidisciplinary approaches combining expertise in both conditions. Early intervention, specialized educational programs, and creating sensory-friendly environments are important components of support.
        </p>
        <p className="mb-4">
          This website aims to provide resources, information, and community for families navigating the unique journey of supporting loved ones with DS-ASD.
        </p>
      </div>
      
      <div className="bg-secondary text-white p-8 rounded-xl mt-12">
        <h3 className="text-xl font-semibold mb-4">Need Further Information?</h3>
        <p className="mb-4">
          Our resources section contains additional materials, research, and support options for families and caregivers.
        </p>
        <a href="/resources" className="inline-block px-6 py-3 bg-white text-secondary font-medium rounded-lg hover:bg-gray-50 transition duration-300">
          Explore Resources
        </a>
      </div>
    </div>
  );
};

export default AboutPage; 