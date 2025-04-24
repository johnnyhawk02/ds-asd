const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <p className="text-lg text-gray-600 mb-6">
          We'd love to hear from you. Whether you have questions, suggestions, or would like to share your experiences, please feel free to reach out.
        </p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-2">
            Email: <span className="text-primary">contact@ds-asd-support.org</span>
          </p>
          <p className="text-gray-500 text-sm italic">
            (This is a placeholder email address for demonstration purposes)
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">Stay Connected</h2>
          <p className="text-gray-600 mb-4">
            Follow us on social media for updates, resources, and community discussions.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary hover:bg-opacity-80 cursor-pointer transition-all">
              FB
            </div>
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary hover:bg-opacity-80 cursor-pointer transition-all">
              TW
            </div>
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary hover:bg-opacity-80 cursor-pointer transition-all">
              IG
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary text-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Contact Form Coming Soon</h2>
        <p>
          We're working on implementing a contact form to make it easier for you to reach out. In the meantime, please use the email address provided above.
        </p>
      </div>
    </div>
  );
};

export default ContactPage; 