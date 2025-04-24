const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-500 text-sm">
          &copy; {currentYear} DS-ASD Support. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 