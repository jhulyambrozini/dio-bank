import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';

import { CardInfo } from '../components/CardInfo';
import { Button } from '../components/Button';

import { api } from '../services/api';

import { UserContext } from '../context/UserContext';

import { UserData } from '../types/userData';
import { getDate } from '../utils/getDate';

const HomePage = () => {
  const [userData, setUserData] = useState<null | UserData>(null);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const { uid } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api;
      setUserData(data);
    };
    getData();
  }, []);

  if (!isLoggedIn || userData === null) {
    navigate('/');
  }

  return (
    <Center>
      {userData ? (
        <Flex flexDir="column" gap={8}>
          <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            <CardInfo
              mainContent={`Bem vinda ${userData?.name}`}
              content={getDate()}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </SimpleGrid>
          <Center>
            <Button
              label="Informações de conta"
              onClick={() => navigate(`/account/${uid}/info`)}
              width="auto"
              fontSize="medium"
            />
          </Center>
        </Flex>
      ) : (
        <Center>
          <Spinner size="xl" color="white" />
        </Center>
      )}
    </Center>
  );
};

export default HomePage;
