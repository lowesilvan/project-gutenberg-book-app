import {
    Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <Box
        width="100%"
        maxW={500}
    >
      <InputGroup size="md" borderRadius={10}>
        <Input
          p={2}
          placeholder="Search..."
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          _focus={{ borderColor: "gba.yellow.600" }}
        />
        <InputRightElement>
          <Button
            mr={1}
            size="md"
            // bgColor="gba.yellow.500"
            // _hover={{ bgColor: "gba.yellow.400" }}
            // _active={{ bgColor: "gba.yellow.600" }}
            // _focus={{ border: 0 }}
            // color="white"
            leftIcon={<Icon ml={2} as={HiSearch} />}
            // onClick={() => searchForResult(searchInputValue)}
          ></Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
