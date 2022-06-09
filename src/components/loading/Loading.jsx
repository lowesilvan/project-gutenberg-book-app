import { Box, Spinner } from '@chakra-ui/react';
import React from 'react'

export const Loading = () => {
  return (
    <Box 
      marginTop="13%"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}
