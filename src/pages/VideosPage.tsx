import { intersectionResources } from '../data/resources';
import { PlayIcon } from '@heroicons/react/24/outline';
import { useSearchIndexing } from '../hooks/useSearchIndexing';

const VideosPage = () => {
  // Add this page to the search index
  useSearchIndexing({
    path: '/videos',
    title: 'Educational Videos',
    type: 'resource',
    content: [
      'A curated collection of informative videos on Down Syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance.',
      'Educational resources providing valuable insights and practical guidance for parents, caregivers, and professionals.',
      'Video content from experts in the fields of DS, ASD, and PDA research and support.',
      'Visual learning resources to better understand behaviors, strategies, and interventions.',
      'Content includes demonstrations of therapeutic approaches, educational methods, and practical strategies.'
    ]
  });

  const getVideoId = (url: string): string | null => {
    // Extract video ID from YouTube links
    const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(ytRegex);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (videoId: string | null): string => {
    if (!videoId) return '/placeholder-video.jpg'; // Fallback image
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Educational Videos</h1>
      <p className="text-subtle-text mb-12 text-lg max-w-3xl">
        A curated collection of informative videos on Down Syndrome, Autism Spectrum Disorder, and Pathological Demand Avoidance. These resources provide valuable insights and practical guidance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {intersectionResources.map((resource, index) => {
          const videoId = getVideoId(resource.link);
          const thumbnailUrl = getThumbnailUrl(videoId);
          
          return (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full">
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="relative">
                  <img 
                    src={thumbnailUrl} 
                    alt={resource.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <PlayIcon className="h-8 w-8 text-white" />
                    </span>
                  </div>
                </div>
              </a>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-subtle-text leading-relaxed mb-4">
                    {resource.description}
                  </p>
                </div>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors"
                >
                  Watch Video
                  <PlayIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideosPage; 