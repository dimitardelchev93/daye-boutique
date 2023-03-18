import { useCallback, useState } from 'react';

import { AlertColor } from '@mui/lab/Alert';

export interface AlertOptions {
  open: boolean;
  severity: AlertColor;
  message: string;
  handleClose: () => void;
  baseAlert: (severity: AlertColor, message: string, duration?: number) => void;
}

export const useBaseAlert = (): AlertOptions => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [message, setMessage] = useState('');

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const baseAlert = (severity: AlertColor, message: string, duration = 3000) => {
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, duration);
  };

  return { open, severity, message, handleClose, baseAlert };
};
