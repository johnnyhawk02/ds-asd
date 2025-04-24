import React from 'react'

const AdaptedEDAQ8Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
        Proposed EDA-Q8 Adaptation (Non-Verbal Children with Down Syndrome)
      </h1>
      
      {/* Disclaimer Box */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-10 shadow-sm" role="alert">
        <p className="font-bold mb-1">Disclaimer</p>
        <p>
          This is a <strong className="font-semibold">proposed adaptation</strong> of the EDA-Q8 assessment tool and has <strong className="font-semibold">not</strong> been officially implemented or validated. It is intended for discussion and informational purposes only.
        </p>
      </div>
      
      {/* Introduction Text */}
      <div className="prose prose-lg lg:prose-xl text-text max-w-none space-y-6 mb-12">
        <p>
          The Extreme Demand Avoidance Questionnaire (EDA-Q8) is useful for identifying demand avoidance behaviors. However, the standard version relies on verbal expressions unsuitable for many non-verbal children with Down Syndrome.
        </p>
        <p>
          This proposed adaptation modifies item descriptions to focus on <strong className="font-semibold">observable, non-verbal behaviors</strong> relevant for children with Down Syndrome who have limited or no verbal communication, while preserving the core assessment areas.
        </p>
        <p>
          Adapting the assessment this way may help caregivers and professionals better identify demand avoidance patterns, potentially leading to more appropriate support strategies.
        </p>
      </div>
      
      {/* Comparison Table */}
      <div className="mb-12 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-primary mb-4">Original vs. Proposed Adapted Items</h2>
        <table className="w-full border-collapse text-sm md:text-base shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary/10">
              <th className="border border-gray-300 p-3 text-left text-text font-semibold">Original EDA-Q8 Item</th>
              <th className="border border-gray-300 p-3 text-left text-text font-semibold">Proposed Adaptation (Non-Verbal Focus)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[ // Array of item pairs for easier mapping
              {
                original: "Obsessively resists and avoids ordinary demands and requests.",
                adapted: "Strongly resists everyday requests through non-verbal actions (e.g., physically turning away, pushing items away, dropping to the floor, running off)."
              },
              {
                original: "Is driven by the need to be in charge.",
                adapted: "Insists on controlling routines or interactions; becomes distressed if others change their preferred order or try to lead (e.g., physically resisting, vocalizing distress)."
              },
              {
                original: "Tells other children how they should behave, but does not feel these rules apply to him/herself.",
                adapted: "Directs others' actions non-verbally (e.g., pushing, pulling, pointing) but resists being directed or corrected themselves (e.g., ignoring, moving away)."
              },
              {
                original: "Has difficulty complying with demands unless they are carefully presented.",
                adapted: "Only follows requests if presented indirectly or as a choice (e.g., cooperates during play, responds to gentle guidance but resists direct instruction)."
              },
              {
                original: "Seems unaware of the differences between him/herself and authority figures (e.g., parents, teachers, police).",
                adapted: "Treats adults like peers without typical deference (e.g., pulling adults' hands forcefully, climbing on them without invitation, expecting immediate compliance)."
              },
              {
                original: "Mood changes very rapidly (e.g., switches from affectionate to angry in an instant).",
                adapted: "Shows sudden, intense mood shifts (e.g., from calm to distressed or angry) when faced with perceived demands or changes in routine."
              },
              {
                original: "Uses outrageous or shocking behaviour to get out of doing something.",
                adapted: "Uses dramatic physical behaviors to avoid tasks (e.g., loud screaming/vocalizations, falling to the floor, throwing objects) when asked to do something."
              },
              {
                original: "Has bouts of extreme emotional responses to small events (e.g., crying/giggling, becoming furious).",
                adapted: "Displays intense emotional reactions (e.g., loud crying, distressed vocalizations, excessive giggling, physical outburst) to minor events or disruptions."
              }
            ].map((item, index) => (
              <tr key={index} className={`${index % 2 !== 0 ? 'bg-background' : ''}`}>
                <td className="border border-gray-300 p-3 align-top text-subtle-text">{item.original}</td>
                <td className="border border-gray-300 p-3 align-top text-text">{item.adapted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes for Use Section */}
      <div className="bg-white border border-gray-300 p-6 rounded-lg mb-12 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-primary">Notes for Use (Proposed)</h2>
        <ul className="list-disc ml-5 space-y-2 text-subtle-text">
          <li><strong className="font-semibold text-text">Purpose:</strong> Designed for caregivers/professionals to assess <strong className="font-semibold text-text">observable, non-verbal behaviors</strong> in children with Down Syndrome.</li>
          <li><strong className="font-semibold text-text">Administration:</strong> Rate based on frequency/intensity (e.g., Never, Sometimes, Often, Always) within the child's typical context.</li>
          <li><strong className="font-semibold text-text">Interpretation:</strong> Higher scores suggest potential demand avoidance patterns warranting further discussion.</li>
          <li><strong className="font-semibold text-text">Follow-Up:</strong> Use insights to inform discussions with healthcare providers/educators for tailored support strategies. <strong className="font-semibold text-text">Not a diagnostic tool.</strong></li>
        </ul>
      </div>

       {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Benefits of This Proposed Adaptation</h2>
        <ul className="list-disc ml-5 space-y-2 text-subtle-text">
          <li>Specifically considers non-verbal communication styles</li>
          <li>Focuses on observable behaviors</li>
          <li>Provides concrete examples relevant to Down Syndrome context</li>
          <li>Aids in identifying patterns possibly related to demand avoidance</li>
          <li>May facilitate more tailored assessment for non-verbal children</li>
        </ul>
      </div>
      
       {/* Final Note */}
      <div className="mt-10 p-4 border-t border-gray-200 text-center">
        <p className="text-subtle-text italic text-sm">
          This proposal requires proper review, validation, and approval by qualified professionals before any clinical or educational implementation.
        </p>
      </div>
    </div>
  )
}

export default AdaptedEDAQ8Page 