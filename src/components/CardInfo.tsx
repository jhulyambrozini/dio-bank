import { ReactNode } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

interface ICardInfo {
  mainContent: string;
  content: ReactNode;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => (
  <Box width={280} minHeight="120px" backgroundColor="white" borderRadius="5px">
    <Center display="grid" justifyItems="center" pt="16px">
      <Text fontSize="2xl" fontWeight="bold">
        {mainContent}
      </Text>
      <Text fontSize="xl">{content}</Text>
    </Center>
  </Box>
);
