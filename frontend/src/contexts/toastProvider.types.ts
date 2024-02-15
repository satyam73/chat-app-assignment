import { ReactNode } from 'react';
export type ToastContextProps = {
  toast: {
    isVisible: boolean;
    text: string;
    type: string;
    hideDuration: number;
    position: {
      vertical: string;
      horizontal: string;
    };
  };
  showToast: React.Dispatch<
    React.SetStateAction<{
      isVisible: boolean;
      text: string;
      type: string;
      hideDuration: number;
      position: {
        vertical: string;
        horizontal: string;
      };
    }>
  >;
};
export type ToastProviderProps = { children: ReactNode };
