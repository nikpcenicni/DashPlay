// src/config/seasons.js
// Colours live in index.css under [data-season='<id>']; this file holds the
// per-season content (labels, decorations) and the date ranges used by "auto".

export const seasons = {
  halloween: {
    id: 'halloween',
    name: 'Halloween',
    emoji: '🎃',
    greeting: 'Happy Halloween',
    particles: ['🎃', '🦇', '👻', '🕸️'],
    motion: 'rise'
  },
  holidays: {
    id: 'holidays',
    name: 'Holidays',
    emoji: '🎄',
    greeting: 'Happy Holidays',
    particles: ['❄️', '🎄', '⭐', '🎁'],
    motion: 'fall'
  },
  winter: {
    id: 'winter',
    name: 'Winter',
    emoji: '❄️',
    greeting: 'Stay cozy',
    particles: ['❄️', '❅', '❆'],
    motion: 'fall'
  },
  spring: {
    id: 'spring',
    name: 'Spring',
    emoji: '🌸',
    greeting: 'Spring is here',
    particles: ['🌸', '🌷', '🦋'],
    motion: 'fall'
  },
  summer: {
    id: 'summer',
    name: 'Summer',
    emoji: '☀️',
    greeting: 'Enjoy the sunshine',
    particles: ['☀️', '🌴', '🍉', '🏖️'],
    motion: 'rise'
  },
  autumn: {
    id: 'autumn',
    name: 'Autumn',
    emoji: '🍂',
    greeting: 'Hello, autumn',
    particles: ['🍂', '🍁', '🍄'],
    motion: 'fall'
  }
};

// Index = month (0 = January)
const seasonByMonth = [
  'winter', 'winter',
  'spring', 'spring', 'spring',
  'summer', 'summer', 'summer',
  'autumn', 'halloween', 'autumn',
  'holidays'
];

export const getSeasonForDate = (date = new Date()) => seasons[seasonByMonth[date.getMonth()]];

// Preference values: 'auto', 'off', or a season id
export const seasonOptions = [
  { value: 'auto', name: 'Auto', emoji: '📅' },
  { value: 'off', name: 'Off', emoji: '🚫' },
  ...Object.values(seasons).map(({ id, name, emoji }) => ({ value: id, name, emoji }))
];

export const resolveSeason = (preference) => {
  if (preference === 'off') return null;
  if (preference === 'auto') return getSeasonForDate();
  return seasons[preference] ?? null;
};
