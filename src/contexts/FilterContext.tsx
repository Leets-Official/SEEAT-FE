// src/contexts/FilterContext.tsx
import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
  isFiltered: boolean;
  setIsFiltered: (value: boolean) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <FilterContext.Provider value={{ isFiltered, setIsFiltered }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used within a FilterProvider');
  return context;
};
