export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  secondaryBackground: string;
  text: string;
}

interface Sizes {
  xLarge: string;
  large: string;
  medium: string;
  small: string;
  xSmall: string;
}

export const theme = {
  name: 'default-theme',
  colors: {
    primary: '#cbe3c6',
    secondary: '#e1aa44',
    accent: '#cc6caa',
    background: '#fffbe7',
    secondaryBackground: '#e5f2e3',
    text: '#003b1b',
  },
  breakpoints: {
    xLarge: '1200px',
    large: '1024px',
    medium: '768px',
    small: '480px',
    xSmall: '320px',
  },
  gaps: {
    xLarge: '40px',
    large: '30px',
    medium: '15px',
    small: '5px',
    xSmall: '3px',
  },
  textSizes: {
    xLarge: '24px',
    large: '20px',
    medium: '16px',
    small: '14px',
    xSmall: '12px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
    breakpoints: Sizes;
    gaps: Sizes;
    textSizes: Sizes;
  }
}
