import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, InputGroup } from '@chakra-ui/react';

import { Button } from './Button';

import { UserContext } from '../context/UserContext';

import { login } from '../services/login';
import { changeLocalStorage } from '../services/storage';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event?.preventDefault();

    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('Email ou senha iválidos');
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate('/account/1');
  }

  return (
    <form onSubmit={handleLogin}>
      <InputGroup display="flex" gap={4} mb={2} flexDirection="column">
        <Input
          placeholder="Email"
          color="white"
          value={email}
          onChange={event => setEmail(event.target.value)}
          isRequired
          focusBorderColor="purple.500"
          variant="flushed"
        />
        <Input
          placeholder="Password"
          color="white"
          value={password}
          onChange={event => setPassword(event.target.value)}
          isRequired
          focusBorderColor="purple.500"
          variant="flushed"
        />
      </InputGroup>
      <Button type="submit" label="LOGIN" />
    </form>
  );
};
