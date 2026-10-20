// src/components/theme/SeasonPicker.jsx
import { useState, useEffect, useRef } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { seasonOptions } from '../../config/seasons';

export const SeasonPicker = () => {
  const { season, seasonPreference, setSeasonPreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e) => {
      if (!containerRef.current?.contains(e.target)) setIsOpen(false);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (value) => {
    setSeasonPreference(value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Seasonal theme"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {season ? (
          <span className="block w-5 h-5 text-base leading-5 text-center">{season.emoji}</span>
        ) : (
          <Sparkles className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-48 py-1 z-50 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-left"
          role="menu"
        >
          <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Seasonal theme
          </p>
          {seasonOptions.map(({ value, name, emoji }) => (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className="w-full flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitemradio"
              aria-checked={seasonPreference === value}
            >
              <span className="w-6">{emoji}</span>
              <span className="flex-1">{name}</span>
              {seasonPreference === value && <Check className="w-4 h-4 text-(--season-accent)" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
