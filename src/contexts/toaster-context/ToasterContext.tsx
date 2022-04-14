import { createContext, ReactNode } from 'react';

interface ToasterContextState {
  message: string;
}

interface ProviderProps {
  children: ReactNode;
}

const initialState: ToasterContextState = {
  message: '',
};

const ToastAction = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
};

export const ToasterContext = createContext(initialState);
