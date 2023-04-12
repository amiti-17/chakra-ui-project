import React from 'react';
import {
  ChakraProvider,
  theme, extendTheme
} from '@chakra-ui/react';
import { Header } from './components/Header';
import { Pricing } from './components/Pricing';
import { Features } from './components/Features';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          textAlign: 'center',
          maxWidth: '1440px',
          margin: 'auto',
        }
      }
    }


  });
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Pricing />
      <Features></Features>
    </ChakraProvider>

  );
}

export default App;
