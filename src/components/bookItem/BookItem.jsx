import { Box, Button, Flex, Heading, VStack, Icon, Image, Tag, TagLabel, TagLeftIcon, Wrap, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ReadOutline from "../icons/ReadOutline"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favBooks } from "../../redux/BooksReducer/bookSlice";

export default function BookItem({ book }) {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const [isFavourite, setIsFavourite] = useState(false)

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
    >
      <Flex spacing={1}>
        <Box minWidth={70} mr={6}>
          {coverImg[0] && <Image alt={`${book.id}`} src={coverImg[0]?.uri} />}
        </Box>

        <Box>
          <Box>{book.agents.map((element) => element.person)}</Box>

          <Heading size="md" my="2">
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
            {book.bookshelves.map((element, index) => {
              return (
                <Tag key={index} variant="solid">
                  <TagLeftIcon as={AddIcon} _hover={{ cursor: "pointer" }} />
                  <TagLabel>{element}</TagLabel>
                </Tag>
              );
            })}
          </Wrap>
        </Box>
      </Flex>
      <VStack direction="column" align="center" spacing="4">
        <Button
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
          variant="ghost"
          onClick={() => {
            dispatch(favBooks({book, isFavourite: !isFavourite}))
            setIsFavourite((p) => !p);
            // console.log("dispatch runs")
          }}
        >
          <Text>Favorites </Text>
          <Icon
            fontSize={28}
            _hover={{ cursor: "pointer" }}
            as={isFavourite ? MdFavorite : MdFavoriteBorder}
            color={isFavourite ? "red" : "black"}
          />
        </Button>
      </VStack>
    </Flex>
  );
}
