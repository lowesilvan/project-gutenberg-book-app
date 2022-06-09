import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import BookItem from "../../components/bookItem/BookItem";

export default function Favourites() {
  const { favorites } = useSelector((state) => state.library);
  return (
    <Container maxW={1000}>
      <Stack p={4} w="100%">
        {favorites.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </Stack>
    </Container>
  );
}
