import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookItem from "../../components/bookItem/BookItem";
import { NavBar } from "../../components/header/navBar/NavBar";
import { emptyFavBooks } from "../../redux/BooksReducer/bookSlice";

export default function Favourites() {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.library);
  return (
    <Container maxW={1000}>
      <Stack p={4} w="100%">
        <NavBar />
        <Heading>List of Favorite Books</Heading>
        {favorites.length > 0 && <Box>
          <Button
          onClick={(e) => dispatch(emptyFavBooks())}
          >
            <Text>Clear Favorite List</Text>
          </Button>
        </Box>}
        {favorites &&
          favorites.map((book) => {
            return <BookItem key={book.id} book={book} />;
          })}
      </Stack>
    </Container>
  );
}
