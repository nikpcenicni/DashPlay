// src/config/layouts.js
import { LayoutGrid, Grid3x3, List } from 'lucide-react';

export const layouts = {
  grid: {
    id: 'grid',
    name: 'Grid',
    icon: LayoutGrid,
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
  },
  compact: {
    id: 'compact',
    name: 'Compact',
    icon: Grid3x3,
    container: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
  },
  list: {
    id: 'list',
    name: 'List',
    icon: List,
    container: 'flex flex-col gap-3 max-w-3xl mx-auto'
  }
};

export const defaultLayout = 'grid';
