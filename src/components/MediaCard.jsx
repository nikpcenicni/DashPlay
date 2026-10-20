import PropTypes from 'prop-types';
import { Settings, X } from 'lucide-react';
import { isSafeHttpUrl } from '../lib/safeUrl';

// Per-layout sizing; the list layout also switches the card to a horizontal row
const layoutStyles = {
  grid: {
    body: 'p-6 flex-col text-center space-y-4',
    logo: 'w-full h-32 p-4',
    name: 'text-xl mb-1',
    showDescription: true
  },
  compact: {
    body: 'p-3 flex-col text-center space-y-2',
    logo: 'w-full h-20 p-3',
    name: 'text-base',
    showDescription: false
  },
  list: {
    body: 'p-3 flex-row text-left space-x-4',
    logo: 'w-28 h-16 p-2 shrink-0',
    name: 'text-lg',
    showDescription: true
  }
};

export const MediaCard = ({ service, onEdit, onDelete, isManageMode, layout = 'grid' }) => {
  const styles = layoutStyles[layout] ?? layoutStyles.grid;
  const isList = layout === 'list';
  const isCompact = layout === 'compact';

  const handleClick = () => {
    if (!isManageMode && isSafeHttpUrl(service.link)) {
      window.location.href = service.link;
    }
  };

  const manageButtons = (
    <>
      <button
        onClick={onEdit}
        className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300"
        aria-label={`Edit ${service.name}`}
      >
        <Settings className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isCompact ? '' : 'mr-1'}`} />
        {!isCompact && 'Edit'}
      </button>
      <button
        onClick={onDelete}
        className="flex items-center px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
        aria-label={`Remove ${service.name}`}
      >
        <X className={`w-4 h-4 ${isCompact ? '' : 'mr-1'}`} />
        {!isCompact && 'Remove'}
      </button>
    </>
  );

  return (
    <div
      className={`w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow ${
        !isManageMode ? 'hover:ring-2 hover:ring-(--season-accent)' : ''
      } ${isList ? 'flex items-center' : ''}`}
    >
      {isManageMode && !isList && (
        <div className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          {manageButtons}
        </div>
      )}
      <div
        className={`w-full flex items-center ${styles.body} ${!isManageMode ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
      >
        <div className={`relative rounded-lg flex items-center justify-center ${styles.logo}`}>
          {/* Tint layer: service.color is a stored bg-* class, so opacity is applied here */}
          <div className={`absolute inset-0 rounded-lg ${service.color} opacity-5 dark:opacity-10`} />
          <img
            src={service.logo}
            alt={`${service.name} logo`}
            className="relative max-w-full max-h-full object-contain filter drop-shadow-md dark:brightness-90"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/api/placeholder/400/320';
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className={`font-semibold text-gray-800 dark:text-gray-100 ${styles.name}`}>
            {service.name}
          </h3>
          {styles.showDescription && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {service.description}
            </p>
          )}
        </div>
      </div>
      {isManageMode && isList && (
        <div className="flex shrink-0 space-x-2 pr-3">
          {manageButtons}
        </div>
      )}
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
  isManageMode: PropTypes.bool,
  layout: PropTypes.oneOf(['grid', 'compact', 'list'])
};
