import { ReactNode, createContext, useReducer } from 'react';
import { Student } from '../../types';

interface ProviderProps {
  children: ReactNode;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: { students: Student[]; message: string } = {
  students: [],
  message: '',
};

export const StudentContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});

function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'GET_STUDENTS':
      return { ...state, students: action.payload, message: '' };
    case 'CREATE_STUDENT':
      return {
        ...state,
        message: action.payload,
      };
    case 'EDIT_STUDENT':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

export const StudentProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StudentContext.Provider value={{ state, dispatch }}>{children}</StudentContext.Provider>;
};
