import PropTypes from 'prop-types';
import { layouts } from '../config/layouts';

export const LayoutToggle = ({ layout, onChange }) => {
  return (
    <div
      className="flex items-center p-1 rounded-full bg-gray-100 dark:bg-gray-700"
      role="radiogroup"
      aria-label="Layout"
    >
      {Object.values(layouts).map(({ id, name, icon: Icon }) => {
        const isActive = layout === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`p-1.5 rounded-full transition-colors duration-200 ${
              isActive
                ? 'bg-white dark:bg-gray-800 shadow-xs text-(--season-accent)'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
            role="radio"
            aria-checked={isActive}
            aria-label={`${name} layout`}
            title={name}
          >
            <Icon className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
};

LayoutToggle.propTypes = {
  layout: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
