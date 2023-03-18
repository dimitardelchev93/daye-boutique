import React from 'react';

import Alert from '@mui/lab/Alert';
import { Dialog, DialogContent } from '@mui/material';
import styled from 'styled-components';

import { useAlertContext } from '../contexts/AlertContext';

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    position: absolute;
    top: 100px;
    background-color: transparent !important;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  background-color: transparent !important;
  padding: 0 !important;
`;

const StyledMessage = styled.div``;

const AlertModal: React.FC = () => {
  const { open, severity, message, handleClose } = useAlertContext();

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogContent>
        <Alert severity={severity} variant="filled">
          <StyledMessage>{message}</StyledMessage>
        </Alert>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default AlertModal;
