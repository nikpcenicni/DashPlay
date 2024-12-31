import { Grid, ArrowLeft, Plus, Settings, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { titles, nav, buttons } from '../config/branding';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

const Header = ({ isManageMode, onManageToggle, onReset, onAdd }) => {
  const navigate = useNavigate();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleReset = () => {
    setIsResetModalOpen(true);
  };

  const confirmReset = () => {
    onReset();
    setIsResetModalOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label={nav.back}
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex items-center space-x-2">
              <Grid className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{titles.apps}</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <AlertDialog open={isResetModalOpen} onOpenChange={setIsResetModalOpen}>
              <AlertDialogTrigger asChild>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  aria-label={buttons.reset}
                >
                  <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset Confirmation</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to reset? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={confirmReset}>Reset</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <button
              onClick={onManageToggle}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                isManageMode
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              aria-label="Toggle manage mode"
            >
              <Settings className="w-5 h-5 mr-1" />
              {isManageMode ? buttons.manage.exit : buttons.manage.enter}
            </button>
            <button
              onClick={onAdd}
              className="flex items-center px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              aria-label={buttons.add}
            >
              <Plus className="w-5 h-5 mr-1" />
              {buttons.add}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isManageMode: PropTypes.bool.isRequired,
  onManageToggle: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export { Header };