import PropTypes from 'prop-types';
import { Settings, X } from 'lucide-react';

export const MediaCard = ({ service, onEdit, onDelete, isManageMode }) => {
  const handleClick = () => {
    if (!isManageMode) {
      window.location.href = `https://youtube.com/redirect?q=${service.link}`;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {isManageMode && (
        <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <button
            onClick={onEdit}
            className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300"
            aria-label={`Edit ${service.name}`}
          >
            <Settings className="w-4 h-4 mr-1 text-gray-600 dark:text-gray-400" />
            Edit
          </button>
          <button
            onClick={onDelete}
            className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
            aria-label={`Remove ${service.name}`}
          >
            <X className="w-4 h-4 mr-1" />
            Remove
          </button>
        </div>
      )}
      <div
        className={`w-full p-6 ${!isManageMode ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`w-full h-32 relative ${service.color} bg-opacity-5 dark:bg-opacity-10 rounded-lg flex items-center justify-center p-4`}>
            <img
              src={service.logo}
              alt={`${service.name} logo`}
              className="max-w-full max-h-full object-contain filter drop-shadow-md dark:brightness-90"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/api/placeholder/400/320';
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
              {service.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isManageMode: PropTypes.bool
};