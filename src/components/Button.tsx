import { Button as ButtonUI } from '@chakra-ui/react';

interface IButton {
  onClick: () => void;
  label: string;
}

export const Button = ({ onClick, label }: IButton) => (
  <ButtonUI
    onClick={onClick}
    colorScheme="purple"
    size="sm"
    width="100%"
    marginTop="5px"
  >
    {label}
  </ButtonUI>
);
