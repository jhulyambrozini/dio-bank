import { Box, Center, Text } from '@chakra-ui/react';

import { Form } from '../components/Form';

const LoginPage = () => (
  <Box
    backgroundColor="#1f1f1f"
    borderRadius="5px"
    padding="15px"
    mt={6}
    display={'flex'}
    flexDir={'column'}
    gap={2}
    minW="320px"
  >
    <Center>
      <Text color="white" fontSize="xl">
        Faça o login
      </Text>
    </Center>
    <Form />
  </Box>
);

export default LoginPage;
