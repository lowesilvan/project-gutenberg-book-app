import { Box, Progress } from '@chakra-ui/react';
import React from 'react'

export const Loading = () => {
  return (
    <Box>
      <Progress colorScheme="gray" size="sm" value={90}  />
    </Box>
  );
}
