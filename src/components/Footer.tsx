const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-6 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-subtle-text text-sm">
          &copy; {currentYear} DS-ASD Support. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 