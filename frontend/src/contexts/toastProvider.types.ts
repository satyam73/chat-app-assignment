import React, { ReactNode } from 'react';
import { SnackbarOrigin } from '@mui/material';
export type ToastDetails = {
  isVisible: boolean;
  text: string;
  type: 'success' | 'info' | 'warning' | 'error';
  hideDuration: 3000;
  position: SnackbarOrigin;
};
export type DefaultToast = {
  toast: ToastDetails;
  showToast: () => void;
};
export type ToastContextProps = {
  toast: ToastDetails;
  showToast: React.Dispatch<React.SetStateAction<ToastDetails>>;
};
export type ToastProviderProps = { children: ReactNode };
