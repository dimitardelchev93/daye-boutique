import React, { createContext, useContext } from 'react';

import { AlertColor } from '@mui/lab/Alert';

import AlertModal from '../components/AlertModal';
import { useBaseAlert } from '../hooks/useBaseAlert';

interface AlertOptions {
  open: boolean;
  severity: AlertColor;
  message: string;
  handleClose: () => void;
  baseAlert: (severity: AlertColor, message: string, duration?: number) => void;
}

const defaultAlertOptions: AlertOptions = {
  open: false,
  severity: 'success',
  message: '',
  handleClose: () => null,
  baseAlert: () => null,
};

const AlertContext = createContext<AlertOptions>(defaultAlertOptions);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const alert = useBaseAlert();

  return (
    <AlertContext.Provider value={alert}>
      {children}
      <AlertModal />
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
