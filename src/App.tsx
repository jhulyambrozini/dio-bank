import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from './components/Layout';

import { UserContextProvider } from './context/UserContext';

import { createLocalStorage, getAllLocalStorage } from './services/storage';

import MainRoutes from './routes';

function App() {
  if (!getAllLocalStorage()) {
    createLocalStorage();
  }
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
