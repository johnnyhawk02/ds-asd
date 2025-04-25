import React from 'react';
import { booksData } from '../data/bookData'; // Import the data
import type { Book } from '../data/bookData'; // Import the Book type
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
// Interface is implicitly used via booksData, no need to import it directly unless used elsewhere

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

      {/* Cards View (Always visible, responsive grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {booksData.map((book: Book, index: number) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-200 flex flex-col">
            <h2 className="text-lg font-semibold text-primary mb-2">{book.title}</h2>
            <div className="mb-3 flex-grow">
              <p className="text-sm text-text mb-1">
                <span className="font-medium">Author(s):</span> {book.authors}
              </p>
              <p className="text-sm text-subtle-text mb-1">
                <span className="font-medium">Focus:</span> {book.focusArea}
              </p>
              <p className="text-sm text-subtle-text">
                <span className="font-medium">Audience:</span> {book.targetAudience}
              </p>
            </div>
            <p className="text-sm text-subtle-text border-t border-gray-200 pt-3">{book.summary}</p>
          </div>
        ))}
      </div>

      {/* Suggestion Box */}
      <div className="mt-12 bg-primary/10 text-primary border border-primary/20 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-3">Have a Suggestion?</h2>
        <p className="text-primary/80">
          Know a great book we missed? Let us know via the contact page!
        </p>
         <a 
          href="/contact" 
          className="mt-4 inline-flex items-center px-5 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
        >
          <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1.5" />
          Contact Us
        </a>
      </div>
    </>
  );
};

export default BooksPage; 