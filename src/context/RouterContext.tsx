import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Route } from '../types';

interface RouterContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

/* eslint-disable react-refresh/only-export-components */
export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>('inicio');

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
