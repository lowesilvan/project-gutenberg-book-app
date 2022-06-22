import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  Icon,
  Image,
  Tag,
  TagLabel,
  Wrap,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ReadOutline from "../icons/ReadOutline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favBooks } from "../../redux/BooksReducer/bookSlice";
import { AddIcon } from "@chakra-ui/icons";
import BookShelves from "../bookshelves/BookShelves";

export default function BookItem({ book, setSearchInputValue }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(book.isFavourite);
  }, [book.isFavourite]);

  // get cover img url
  const coverImg = book.resources.filter(
    (element) => element.type === "image/jpeg" && element.uri?.includes("small")
  );

  return (
    <Flex
      p={4}
      borderWidth={2}
      align="center"
      justify="space-between"
      textAlign="left"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex spacing={1}>
        <Box minWidth={70} mr={6}>
          {coverImg[0] && <Image alt={book.title} src={coverImg[0]?.uri} />}
        </Box>

        <Box>
          <Box>{book.agents.map((element) => element.person)}</Box>

          <Heading
            size="md"
            my="2"
            _hover={{
              textDecoration: "underline",
            }}
          >
            <Link to={`/reading/${book.title}`} state={book}>
              {book.title}
            </Link>

            {book.languages.map((text) => (
              <Tag key={text} variant="solid" bgColor="black" marginX={2}>
                <TagLabel>{text.toUpperCase()}</TagLabel>
              </Tag>
            ))}
          </Heading>

          <Box fontSize={12}>{book.downloads} downloads</Box>

          <Wrap mt={4} spacing={2}>
            {book.bookshelves &&
              book.bookshelves.map((element, index) => {
                return (
                  <BookShelves
                    key={index}
                    element={element}
                    setSearchInputValue={setSearchInputValue}
                    icon={AddIcon}
                  />
                );
              })}
          </Wrap>
        </Box>
      </Flex>
      <VStack
        flexDirection={{ base: "row", md: "column" }}
        alignItems="center"
        marginY={{ base: "1rem", md: "auto" }}
      >
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, green.400, green.600)"
          color="white"
          variant="solid"
          onClick={(e) => {
            Navigate(`/reading/${book.title}`, { state: book });
          }}
        >
          <HStack>
            <Text> Read </Text>
            <Icon
              as={ReadOutline}
              fontSize={28}
              _hover={{ cursor: "pointer" }}
            />
          </HStack>
        </Button>

        <Button
          variant="solid"
          onClick={() => {
            dispatch(favBooks({ book, isFavourite: !isFavourite }));
            setIsFavourite((p) => !p);
          }}
        >
          <Text>Favorites </Text>
          <Icon
            fontSize={28}
            _hover={{ cursor: "pointer" }}
            as={isFavourite ? MdFavorite : MdFavoriteBorder}
            color={isFavourite ? "red" : "black"}
            marginX="1"
          />
        </Button>
      </VStack>
    </Flex>
  );
}
