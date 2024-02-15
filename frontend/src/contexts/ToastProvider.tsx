import { createContext, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { ToastContextProps, ToastProviderProps } from './toastProvider.types';

const ToastContext = createContext<ToastContextProps | null>(null);

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toastDetails, setToastDetails] = useState({
    isVisible: false,
    text: '',
    type: 'info',
    hideDuration: 3000,
    position: { vertical: 'top', horizontal: 'right' },
  });

  const handleClose = () => {
    setToastDetails({ ...toastDetails, isVisible: false, text: '' });
  };

  return (
    <ToastContext.Provider
      value={{ toast: toastDetails, showToast: setToastDetails }}
    >
      <Snackbar
        open={toastDetails.isVisible}
        autoHideDuration={toastDetails.hideDuration}
        anchorOrigin={toastDetails.position}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={toastDetails.type}
          sx={{ width: '100%' }}
        >
          {toastDetails.text}
        </Alert>
      </Snackbar>
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => useContext(ToastContext);

export const useToastMethods = () => {
  const { toast, showToast } = useToast();

  function notifySuccess(text: string) {
    showToast({
      ...toast,
      text: text,
      type: 'success',
      isVisible: true,
    });
  }

  function notifyError(text: string) {
    showToast({
      ...toast,
      text: text,
      type: 'error',
      isVisible: true,
    });
  }
  function notifyInfo(text: string) {
    showToast({
      ...toast,
      text: text,
      type: 'info',
      isVisible: true,
    });
  }
  return { notifySuccess, notifyError, notifyInfo };
};
