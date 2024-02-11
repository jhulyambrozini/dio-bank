import { ReactNode } from 'react';
import { Container, Box } from '@chakra-ui/react';

import { Header } from './Header';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => (
  <Container centerContent margin="0 auto">
    <Box
      backgroundColor="#454545"
      padding="25px"
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight="100vh"
      width="100vw"
    >
      <Header />
      {children}
    </Box>
  </Container>
);
