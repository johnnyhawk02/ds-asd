import React from 'react'

const AdaptedEDAQ8Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Improved EDA-Q8 Adapted for Non-Verbal Children with Down Syndrome
      </h1>
      
      <div className="bg-white border-2 border-primary p-6 rounded-lg mb-8 text-center shadow-md">
        <p className="font-bold text-xl text-text mb-2">
          DISCLAIMER
        </p>
        <p className="font-medium text-text">
          This is a proposed adaptation of the EDA-Q8 assessment tool and has not been officially implemented or validated.
        </p>
      </div>
      
      <div className="mb-8">
        <p className="mb-3">
          The Extreme Demand Avoidance Questionnaire (EDA-Q8) is a valuable tool for identifying demand avoidance behaviors in children. 
          However, the standard version relies on verbal expressions and behaviors that may not apply to non-verbal children with Down Syndrome.
        </p>
        
        <p className="mb-3">
          This proposed adaptation maintains the core assessment areas while modifying the descriptions to focus on observable, non-verbal 
          behaviors that are more relevant for children with Down Syndrome who have limited or no verbal communication.
        </p>
        
        <p>
          By adapting the assessment in this way, caregivers and professionals may be better able to identify and understand 
          demand avoidance patterns in non-verbal children, potentially leading to more appropriate support strategies.
        </p>
      </div>
      
      <div className="mb-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-background">
              <th className="border border-gray-300 p-3 text-left">Original EDA-Q8 Item</th>
              <th className="border border-gray-300 p-3 text-left">Adapted Version (Non-Verbal Focused)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Obsessively resists and avoids ordinary demands and requests.</td>
              <td className="border border-gray-300 p-3">Strongly resists everyday requests through non-verbal actions (e.g., flopping to the ground, turning away, covering face, or running off).</td>
            </tr>
            <tr className="bg-background bg-opacity-50">
              <td className="border border-gray-300 p-3">Is driven by the need to be in charge.</td>
              <td className="border border-gray-300 p-3">Insists on controlling routines or interactions (e.g., gets upset if others change their preferred order of activities or try to lead).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Tells other children how they should behave, but does not feel these rules apply to him/herself.</td>
              <td className="border border-gray-300 p-3">Directs others' actions using gestures (e.g., pushing, pulling, or pointing) but resists being directed or corrected themselves.</td>
            </tr>
            <tr className="bg-background bg-opacity-50">
              <td className="border border-gray-300 p-3">Has difficulty complying with demands unless they are carefully presented.</td>
              <td className="border border-gray-300 p-3">Only follows requests if presented in a specific way (e.g., during play, as a choice, or when they initiate the task).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Seems unaware of the differences between him/herself and authority figures (e.g., parents, teachers, police).</td>
              <td className="border border-gray-300 p-3">Treats adults like peers (e.g., pulls adults' hands, climbs on them, or expects them to follow their lead without delay).</td>
            </tr>
            <tr className="bg-background bg-opacity-50">
              <td className="border border-gray-300 p-3">Mood changes very rapidly (e.g., switches from affectionate to angry in an instant).</td>
              <td className="border border-gray-300 p-3">Shows sudden mood shifts (e.g., from calm to distressed or angry) when faced with requests or changes in routine.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Uses outrageous or shocking behaviour to get out of doing something.</td>
              <td className="border border-gray-300 p-3">Uses dramatic behaviors to avoid tasks (e.g., screaming, falling to the floor, or throwing objects) when asked to do something.</td>
            </tr>
            <tr className="bg-background bg-opacity-50">
              <td className="border border-gray-300 p-3">Has bouts of extreme emotional responses to small events (e.g., crying/giggling, becoming furious).</td>
              <td className="border border-gray-300 p-3">Displays intense emotional reactions (e.g., loud crying, screaming, excessive giggling, or anger) to minor events or disruptions in routine.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-300 p-6 rounded-lg mb-10 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-black">Notes for Use (Proposed)</h2>
        <ul className="list-disc ml-6 space-y-2 text-black">
          <li><strong>Purpose:</strong> This adapted questionnaire is designed for caregivers and professionals to assess behaviors in non-verbal children with Down Syndrome, focusing on observable, non-verbal expressions.</li>
          <li><strong>Administration:</strong> Rate each item based on frequency and intensity of the behavior (e.g., Never, Sometimes, Often, Always).</li>
          <li><strong>Context:</strong> Consider the child's typical environment (home, school, therapy) when evaluating behaviors.</li>
          <li><strong>Follow-Up:</strong> Use responses to guide discussions with healthcare providers or educators to develop tailored support strategies.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3 text-primary">Benefits of the Proposed Adapted Questionnaire</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Specifically designed for non-verbal children with Down Syndrome</li>
          <li>Focuses on observable behaviors rather than verbal expressions</li>
          <li>Provides concrete examples relevant to the target population</li>
          <li>Helps identify patterns that may indicate underlying demand avoidance</li>
          <li>Facilitates more accurate assessment for children who cannot verbally express themselves</li>
        </ul>
      </div>
      
      <div className="mt-10 p-4 border-t border-gray-200">
        <p className="text-gray-600 italic">
          This proposal is intended for discussion purposes and would require proper review, validation, and approval by qualified professionals before implementation in clinical or educational settings.
        </p>
      </div>
    </div>
  )
}

export default AdaptedEDAQ8Page 