import { AlertColor } from '@mui/lab/Alert';

import { useAlertContext } from '../contexts/AlertContext';

interface AlertOptions {
  severity: AlertColor;
  message: string;
  duration?: number;
  callback?: () => void;
}

export const useAlert = () => {
  const { baseAlert } = useAlertContext();

  return (options: AlertOptions) => {
    baseAlert(options.severity, options.message, options?.duration);

    const duration = options?.duration || 3000;

    if (options.callback) {
      setTimeout(options.callback, duration);
    }
  };
};
