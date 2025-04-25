import { EnvelopeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-text mb-10 text-center">Contact Us</h1>
      
      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-12 border border-gray-200">
        <p className="text-lg text-subtle-text mb-8 text-center">
          We'd love to hear from you! Whether you have questions, suggestions, or want to share your experiences, please feel free to reach out.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Get in Touch Section */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Get in Touch</h2>
            <p className="text-text mb-1 flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-primary" /> 
              Email:
            </p>
            <a href="mailto:johnny.hawk@gmail.com" className="text-primary hover:underline break-all">
              johnny.hawk@gmail.com
            </a>
          </div>
          
          {/* Stay Connected Section */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Stay Connected</h2>
            <p className="text-subtle-text mb-4">
              Follow us on social media (links coming soon!).
            </p>
             {/* Placeholder Social Icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                FB
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                TW
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed">
                IG
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Placeholder */}
      <div className="bg-primary/10 text-primary border border-primary/20 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-3 flex items-center justify-center">
          <WrenchScrewdriverIcon className="h-5 w-5 mr-2"/>
          Contact Form Coming Soon
        </h2>
        <p className="text-primary/80">
          We're working on implementing a contact form. In the meantime, please use the email address provided above.
        </p>
      </div>
    </>
  );
};

export default ContactPage; 