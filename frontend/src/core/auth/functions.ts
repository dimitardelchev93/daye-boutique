export const validateRegistrationForm = (
  usernameInput: string,
  passwordInput: string,
  repeatPasswordInput: string,
): string => {
  if (!usernameInput) {
    return 'Username is required';
  }

  if (usernameInput.length < 3) {
    return 'Username must be at least 3 characters';
  }

  if (!passwordInput) {
    return 'Password is required';
  }

  if (passwordInput.length < 6) {
    return 'Password must be at least 6 characters';
  }

  if (passwordInput !== repeatPasswordInput) {
    return "Passwords don't match";
  }

  return '';
};
