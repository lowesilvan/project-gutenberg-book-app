import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

export default function ConnectionError({ error }) {
    return (
      <Box margin="auto" maxWidth="600px" borderRadius="5%">
        <Alert
          status="warning"
          alignItems="center"
          justifyContent="center"
          variant="subtle"
        >
          <AlertIcon />
          <AlertTitle> Unable to Load Book List</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Box>
    );
}
