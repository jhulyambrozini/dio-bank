import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Header } from './components/Header/Header';

import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight="100vh"
        backgroundColor="#454545"
        padding="25px"
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Container centerContent>
          <Header />
          <Card title="Faça o login" />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
