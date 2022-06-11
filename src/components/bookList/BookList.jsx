import { Box, HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import BookItem from "../bookItem/BookItem";
import Pagination from "../pagination/Pagination";
import SearchInput from "../searchInput/SearchInput";

export default function BookList({ books, nextUrl, prevUrl, count }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Stack p={4} width="100%">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        borderBottomWidth="1px"
        flexDirection={{ base: "column", md: "row" }}
        marginBottom={{ base: "1rem", md: "0" }}
      >
        <Box width="100%">
          <SearchInput
            searchInputValue={searchTerm}
            setSearchInputValue={setSearchTerm}
          />
        </Box>
        <Box width="100%">
          <Pagination nextUrl={nextUrl} prevUrl={prevUrl} count={count} />
        </Box>
      </HStack>
      {/* filter by title, author and bookshelve */}
      {books.results
        .filter((book) => {
          const [agent] = book.agents;

          if (searchTerm === "") {
            return book;
          } else if (
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.person
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            book.bookshelves.some((key) =>
              key.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
          ) {
            return book;
          }
          return null;
        })
        .map((book) => {
          return (
            <BookItem
              key={book.id}
              book={book}
              setSearchInputValue={setSearchTerm}
            />
          );
        })}
    </Stack>
  );
}
