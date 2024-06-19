import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { MainRouter } from './src/router';
import { theme } from './src/themes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
