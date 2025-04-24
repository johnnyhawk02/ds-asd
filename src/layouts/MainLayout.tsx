import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 