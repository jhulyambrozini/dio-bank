import { Box, Center, Input } from '@chakra-ui/react';
import { login } from '../services/login';
import { Button } from './Button';

interface ICard {
  title: string;
}

export const Card = ({ title }: ICard) => {
  return (
    <Box
      backgroundColor="#1f1f1f"
      borderRadius="25px"
      padding="15px"
      mt={6}
      display={'flex'}
      flexDir={'column'}
      gap={4}
      width="320px"
    >
      <Center>
        <h2 className="form-title">{title}</h2>
      </Center>
      <Input placeholder="email" color="white" />
      <Input placeholder="password" color="white" />
      <Button onClick={login} label="Login" />
    </Box>
  );
};
