// src/pages/LaunchPage.jsx
import { Play, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { company, nav } from '../config/branding';
import Footer from '../components/Footer';

export const LaunchPage = () => {
  const navigate = useNavigate();

  const handleLaunch = () => {
    window.location.href = nav.launch;
  };

  const handlePreview = () => {
    navigate('/apps');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="text-center space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{company.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{company.tagline}</p>
        </div>

        {/* Main Launch Button */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleLaunch}
            className="group relative flex items-center justify-center w-48 h-48"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-blue-500 rounded-full p-12 transform group-hover:scale-105 transition-transform duration-300">
                <Play className="w-16 h-16 text-white" fill="white" />
              </div>
            </div>
          </button>
          <span className="text-gray-900 dark:text-white text-xl font-semibold">Launch</span>
        </div>

        {/* Preview Button */}
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={handlePreview}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <Grid className="w-5 h-5" />
            <span>{nav.preview}</span>
          </button>
          <span className="text-gray-500 dark:text-gray-400 text-sm">{nav.previewSubtext}</span>
        </div>
      </div>

      <Footer company={company} />
    </div>
  );
};