import { createContext, ReactNode, useReducer } from 'react';
import { toast } from 'react-toastify';
import { ToastAction, ToastContext } from '../../types';

interface ProviderProps {
  children: ReactNode;
}

const initialState: ToastContext = {
  message: '',
  dispatch: (action: ToastAction) => {},
};

function reducer(state: any, action: ToastAction) {
  switch (action.type) {
    case 'SUCCESS':
      toast.success(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    case 'ERROR':
      toast.error(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    case 'WARNING':
      toast.warning(action.payload.message, { ...action.payload.props });
      return { message: action.payload };
    default:
      return state;
  }
}

export const ToasterContext = createContext(initialState);

export const ToastProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { message: '' });
  return (
    <ToasterContext.Provider value={{ message: state.message, dispatch }}>
      {children}
    </ToasterContext.Provider>
  );
};
