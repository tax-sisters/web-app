'use client';
import { store } from '@/state/store';
import { Provider } from 'react-redux';

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

