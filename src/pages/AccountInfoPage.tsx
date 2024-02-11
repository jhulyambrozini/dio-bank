import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Text, Box } from '@chakra-ui/react';

import { UserContext } from '../context/UserContext';

export const AccountInfo = () => {
  const { isLoggedIn, userEmail, userName } = useContext(UserContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/');
  }

  return (
    <Box width="600px" bg="white" borderRadius="5px" p={4}>
      <Text fontSize="2xl">Informações da conta</Text>
      <Box>
        <Text>Nome: {userName}</Text>
        <Text>Email: {userEmail}</Text>
      </Box>

      <Box
        borderRadius="5px"
        bg="purple.600"
        width="150px"
        p={2}
        alignItems="center"
        marginTop="16px"
      >
        <Link to="/account/1">
          <Text textAlign="center" color="white">
            Voltar para conta
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
