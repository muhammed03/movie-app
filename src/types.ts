export interface Course {
  name: string;
}
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  score: number;
  courses: Course[];
}

type ToastActions = {
  SUCCESS: 'SUCCESS';
  WARNING: 'WARNING';
  ERROR: 'ERROR';
};

type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface ToastAction {
  type: keyof ToastActions;
  payload: {
    message: string;
    props?: {
      position?: ToastPosition;
      autoClose?: number;
      hideProgressBar?: boolean;
      closeOnClick?: boolean;
      pauseOnHover?: boolean;
      draggable?: boolean;
      progress?: number;
    };
  };
}

export interface ToastContext {
  message: string;
  dispatch: (action: ToastAction) => void;
}
