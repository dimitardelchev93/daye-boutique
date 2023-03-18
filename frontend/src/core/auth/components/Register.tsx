import React, { useCallback, useState } from 'react';

import { TextField, Typography, Box } from '@mui/material';

import BaseButton from 'core/layout/components/BaseButton';

import { useAuth } from '../contexts/AuthContext';
import { validateRegistrationForm } from '../functions';
import { login, register } from '../service';
import { FormContainer, LoginForm, FormField } from '../styles';

const Register: React.FC = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('');
  const [error, setError] = useState('');
  const { setToken, setUser } = useAuth();
  const handleRegister = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setError('');
      e.preventDefault();

      const validationError = validateRegistrationForm(
        usernameInput,
        passwordInput,
        repeatPasswordInput,
      );

      if (validationError) {
        setError(validationError);
        return;
      }

      const registrationSuccess = await register(usernameInput, passwordInput);

      if (!registrationSuccess) {
        setError('Registration failed');
      } else {
        await login(usernameInput, passwordInput, setToken, setUser);
      }
    },
    [usernameInput, passwordInput, repeatPasswordInput],
  );

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <LoginForm onSubmit={handleRegister}>
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
        <FormField>
          <TextField
            fullWidth
            label="Repeat Password"
            variant="outlined"
            type="password"
            value={repeatPasswordInput}
            onChange={(e) => setRepeatPasswordInput(e.target.value)}
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
          Register
        </BaseButton>
      </LoginForm>
    </FormContainer>
  );
};

export default Register;
