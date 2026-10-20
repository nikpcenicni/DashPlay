import { useState } from 'react';
import { layouts, defaultLayout } from '../config/layouts';

export const useLayout = () => {
  const [layout, setLayoutState] = useState(() => {
    const savedLayout = localStorage.getItem('layout');
    return layouts[savedLayout] ? savedLayout : defaultLayout;
  });

  const setLayout = (newLayout) => {
    if (!layouts[newLayout]) return;
    setLayoutState(newLayout);
    localStorage.setItem('layout', newLayout);
  };

  return { layout, setLayout };
};
