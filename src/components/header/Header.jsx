import React from "react";
import {
  Text,
  useColorModeValue,
  Box,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import SearchInput from "../searchInput/SearchInput";
import { NavBar } from "./navBar/NavBar";

export const Header = () => {
  return (
    <Box
      height="150px"
      alignItems="center"
      width="100%"
      maxW={1000}
      margin="auto"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="center"
      textAlign="center"
    >
      <VStack spacing={{ base: "0", md: "2" }}>
        <Box marginY={3}>
          <Heading as="h2" size="lg">
            Project Gutenberg Library
          </Heading>
          <Text>Find and read any book from our library</Text>
        </Box>
        <HStack justifyContent="space-between" width="95%" alignItems="center">
          <Box>
            <SearchInput />
          </Box>
          <Box>
            <NavBar />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};
