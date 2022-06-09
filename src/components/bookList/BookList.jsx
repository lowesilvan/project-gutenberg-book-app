import { Stack } from "@chakra-ui/react";
import React from "react";
import BookItem from "../bookItem/BookItem";

export default function BookList({ books }) {
  return (
    <Stack p={4} w="100%">
      <h1>Pagination</h1>
      {books.results.map((book) => {
        return <BookItem key={book.id} book={book} />;
      })}
    </Stack>
  );
}