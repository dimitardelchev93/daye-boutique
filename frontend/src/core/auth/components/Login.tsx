import React, { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { TextField, Typography, Box } from '@mui/material';

import BaseButton from 'core/layout/components/BaseButton';

import { useAuth } from '../contexts/AuthContext';

import { login } from '../service';
import { FormContainer, LoginForm, FormField } from '../styles';

const Login: React.FC = () => {
  const { setToken, setUser } = useAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setError('');
      e.preventDefault();

      const userData = await login(usernameInput, passwordInput, setToken, setUser);

      if (!userData) {
        setError('Please enter correct credentials');
      } else {
        navigate('/');
      }
    },
    [usernameInput, passwordInput],
  );

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>
        Log In
      </Typography>
      <LoginForm onSubmit={handleLogin}>
        <FormField>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </FormField>
        <FormField>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </FormField>
        {error && (
          <Box marginBottom={2}>
            <Typography variant="subtitle1" color="error">
              {error}
            </Typography>
          </Box>
        )}
        <BaseButton type="submit" variant="contained" color="primary">
          Log In
        </BaseButton>
      </LoginForm>
    </FormContainer>
  );
};

export default Login;
