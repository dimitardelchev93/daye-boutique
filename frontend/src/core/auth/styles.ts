import Container from '@mui/material/Container/Container';
import styled from 'styled-components';

export const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LoginForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormField = styled('div')`
  width: 100%;
  margin-bottom: 16px;
`;
