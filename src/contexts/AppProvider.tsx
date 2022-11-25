import { createContext, ReactNode } from 'react';

// @ts-ignore
export const AppContext = createContext();

type Props = {
  children: ReactNode;
};

function AppProvider({ children }: Props) {
  return <AppContext.Provider value={{ test: 'etstestst' }}>{children}</AppContext.Provider>;
}

export default AppProvider;
