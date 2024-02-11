import { ButtonProps, Button as ButtonUI } from '@chakra-ui/react';

interface IButton extends ButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: IButton) => (
  <ButtonUI
    colorScheme="purple"
    size="sm"
    width="100%"
    marginTop="5px"
    {...rest}
  >
    {label}
  </ButtonUI>
);
