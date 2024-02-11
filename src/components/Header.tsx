import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Spacer, Text } from '@chakra-ui/react';

import { Button } from './Button';

import { UserContext } from '../context/UserContext';

import { changeLocalStorage } from '../services/storage';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  function loggout() {
    setIsLoggedIn(false);
    changeLocalStorage({ login: false });
    navigate('/');
  }

  return (
    <Flex
      padding="8px"
      alignItems="center"
      width="600px"
      justifyContent="center"
    >
      <Text color="white" fontSize="3xl">
        DIO BANK
      </Text>
      {isLoggedIn && (
        <>
          <Spacer />

          <Button
            label="Sair"
            onClick={loggout}
            width="80px"
            marginRight={4}
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
          />
        </>
      )}
    </Flex>
  );
};
