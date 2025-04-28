import { 
  KeyIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  CheckBadgeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { useSearchIndexing } from '../hooks/useSearchIndexing';

const UnderstandingPDAPage = () => {
  // Add this page to the search index
  useSearchIndexing({
    path: '/understanding-pda',
    title: 'Understanding PDA',
    type: 'page',
    content: [
      'Pathological Demand Avoidance (PDA) is considered by many to be a profile within the autism spectrum.',
      'It is characterized by an extreme avoidance of everyday demands and expectations, driven by high levels of anxiety.',
      'The demand avoidance in PDA is not defiance. It stems from an anxiety-based need to control the environment.',
      'Demands can include direct requests, implied expectations, time pressures, transitions, and internal demands.',
      'Traditional parenting or teaching methods relying on clear boundaries, rewards, and consequences often fail for individuals with PDA.',
      'People with PDA typically respond better to flexible, collaborative approaches focused on reducing demands.',
      'Effective support involves understanding PDA as an anxiety-driven condition and adapting strategies accordingly.',
      'Support strategies include indirect language, offering choices, reducing demands, using humor, and prioritizing anxiety management.'
    ]
  });

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
        <span className="text-primary">PDA:</span> Understanding Pathological Demand Avoidance
      </h1>
      
      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-12 border border-gray-200">
        <p className="text-lg text-subtle-text text-center">
           Pathological Demand Avoidance (PDA) is considered by many to be a profile within the autism spectrum. It is characterized by an extreme avoidance of everyday demands and expectations, driven by high levels of anxiety.
        </p>
      </div>
      
      <div className="prose prose-lg lg:prose-xl text-text max-w-none space-y-6">
        <h2 className="text-2xl font-semibold text-primary !mt-8 !mb-4 flex items-center">
          <KeyIcon className="h-6 w-6 mr-2"/>
          Key Features of PDA
        </h2>
        <ul className="list-disc !pl-6 mb-6 space-y-2">
          <li>Resisting and avoiding ordinary demands of life</li>
          <li>Using social strategies as part of the avoidance (e.g., distractions, excuses)</li>
          <li>Appearing sociable on the surface but lacking deeper social understanding</li>
          <li>Experiencing excessive mood swings and impulsivity, often driven by anxiety</li>
          <li>Being comfortable in role play and pretend, sometimes excessively</li>
          <li>Potential for language delays, often caught up later</li>
          <li>Having obsessive behaviors, frequently focused on other people</li>
          <li>Displaying intense anxiety and a strong need for control</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4 flex items-center">
          <ExclamationTriangleIcon className="h-6 w-6 mr-2"/>
          Understanding Demand Avoidance
        </h2>
        <p>
          The demand avoidance in PDA is not defiance. It stems from an anxiety-based need to control the environment and an inability to cope with expectations, even simple ones. Demands can include:
        </p>
        <ul className="list-disc !pl-6 mb-6 space-y-2">
          <li>Direct requests or instructions</li>
          <li>Implied expectations (e.g., getting dressed, eating meals)</li>
          <li>Time pressures or scheduled transitions</li>
          <li>Internal demands (e.g., feeling hungry but resisting eating)</li>
          <li>Praise or positive comments (can feel like an expectation)</li>
        </ul>
        <p>
          For individuals with PDA, these demands can trigger intense anxiety, leading to avoidance strategies that appear manipulative but are survival mechanisms.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4 flex items-center">
          <QuestionMarkCircleIcon className="h-6 w-6 mr-2"/>
          PDA and Traditional Approaches
        </h2>
        <p>
          Traditional parenting or teaching methods relying on clear boundaries, rewards, and consequences often fail for individuals with PDA and can escalate anxiety and avoidance.
        </p>
        <p>
          People with PDA typically respond better to flexible, collaborative approaches focused on reducing demands and offering a sense of control and choice.
        </p>
        
        <h2 className="text-2xl font-semibold text-primary !mt-10 !mb-4 flex items-center">
          <CheckBadgeIcon className="h-6 w-6 mr-2"/>
          Supportive Strategies for PDA
        </h2>
        <p>
          Effective support involves understanding PDA as an anxiety-driven condition and adapting strategies accordingly:
        </p>
        <ul className="list-disc !pl-6 mb-6 space-y-2">
          <li>Use indirect language and phrasing requests as suggestions or questions</li>
          <li>Offer choices and negotiate</li>
          <li>Reduce unnecessary demands and pressures</li>
          <li>Use humor, novelty, and distraction</li>
          <li>Build trust through collaboration and understanding</li>
          <li>Prioritize managing anxiety over achieving compliance</li>
          <li>Focus on regulating emotions and co-regulation</li>
        </ul>
        
        <p>
          With the right, low-demand approaches, individuals with PDA can thrive, develop coping strategies, and engage more comfortably with the world.
        </p>
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 mt-12 mb-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Looking for Adapted Assessment Tools?</h3>
        <p className="mb-6 opacity-90">
          Explore our proposed adaptation of the EDA-Q8 assessment tool, designed with non-verbal children with Down Syndrome in mind.
        </p>
        <a 
          href="/adapted-edaq8" 
          className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          <DocumentTextIcon className="h-5 w-5 mr-2"/>
          View Proposed EDA-Q8
        </a>
      </div>
    </>
  );
};

export default UnderstandingPDAPage; 