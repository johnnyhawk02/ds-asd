import React from 'react';

// Define the structure for a book
interface Book {
  title: string;
  authors: string;
  focusArea: string;
  targetAudience: string;
}

// Array of book data
const booksData: Book[] = [
  { title: "Gross Motor Skills in Children with Down Syndrome", authors: "Patricia C. Winders", focusArea: "Gross motor development in DS", targetAudience: "Parents, caregivers" },
  { title: "Fine Motor Skills for Children with Down Syndrome", authors: "Maryanne Bruni", focusArea: "Fine motor skills in DS", targetAudience: "Parents, caregivers" },
  { title: "Early Communication Skills for Children with Down Syndrome", authors: "Libby Kumin", focusArea: "Communication strategies for DS", targetAudience: "Parents, caregivers" },
  { title: "Uniquely Human: A Different Way of Seeing Autism", authors: "Barry M. Prizant", focusArea: "Understanding and supporting ASD", targetAudience: "Parents, professionals" },
  { title: "The Reason I Jump", authors: "Naoki Higashida", focusArea: "Personal insights into ASD", targetAudience: "Parents, general readers" },
  { title: "Ten Things Every Child with Autism Wishes You Knew", authors: "Ellen Notbohm", focusArea: "Key needs of children with ASD", targetAudience: "Parents" },
  { title: "When Down Syndrome and Autism Intersect: A Guide to DS-ASD for Parents and Professionals", authors: "Margaret Froehlke, Robin Sattel", focusArea: "Dual diagnosis of DS and ASD", targetAudience: "Parents, professionals" },
  { title: "Understanding Pathological Demand Avoidance Syndrome in Children", authors: "Phil Christie et al.", focusArea: "Managing PDA, part of ASD", targetAudience: "Parents, teachers, professionals" },
  { title: "The Family Experience of PDA: An Illustrated Guide to Pathological Demand Avoidance", authors: "Eliza Fricker", focusArea: "Family perspective on PDA", targetAudience: "Parents, caregivers" },
];

const BooksPage: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-10 text-center">
        Books & Publications
      </h1>

      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-12 border border-gray-200">
        <p className="text-lg text-subtle-text text-center">
          A curated list of recommended books covering Down Syndrome, Autism Spectrum Disorder, the DS-ASD intersection, and Pathological Demand Avoidance (PDA).
        </p>
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-primary/10 text-text uppercase tracking-wider font-semibold">
            <tr>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Author(s)</th>
              <th scope="col" className="px-6 py-3">Focus Area</th>
              <th scope="col" className="px-6 py-3">Target Audience</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {booksData.map((book, index) => (
              <tr key={index} className="hover:bg-background transition-colors duration-150">
                <td className="px-6 py-4 font-medium text-text whitespace-normal">{book.title}</td>
                <td className="px-6 py-4 text-subtle-text whitespace-nowrap">{book.authors}</td>
                <td className="px-6 py-4 text-subtle-text whitespace-normal">{book.focusArea}</td>
                <td className="px-6 py-4 text-subtle-text whitespace-normal">{book.targetAudience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suggestion Box */}
      <div className="mt-12 bg-primary/10 text-primary border border-primary/20 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-3">Have a Suggestion?</h2>
        <p className="text-primary/80">
          Know a great book we missed? Let us know via the contact page!
        </p>
         <a 
          href="/contact" 
          className="mt-4 inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default BooksPage; 