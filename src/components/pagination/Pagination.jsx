import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNext, getPageNum } from "../../redux/BooksReducer/bookSlice";

export default function Pagination({ prevUrl, nextUrl, count }) {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1)

  // set page url
    const url = `https://gnikdroy.pythonanywhere.com/api/book/?page=${pageNum}`

  useEffect(() => {
    dispatch(getPageNum(url));
  }, [url, dispatch])

  return (
    <Flex textAlign="right" width="[100% 80%]" marginBottom={{base: "5px", md: "0"}} paddingLeft={{base: "0", md: "1rem"}}>
      {prevUrl && (
        <Button
          onClick={() => {
            dispatch(getNext(prevUrl));
            setPageNum((p) => Number(p - 1));
          }}
        >
          <ChevronLeftIcon />
          <Text>Previous</Text>
        </Button>
      )}
      
      <Flex alignItems="center" margin="auto 1rem">
        <Text margin="auto 0.5rem">Page</Text>
        <Input
          w="20"
          value={pageNum}
          onChange={(e) => {
            setPageNum(e.target.value);
          }}
        />
        {count && <Text margin="auto 0.5rem">of {count}</Text>}
      </Flex>

      {nextUrl && (
        <Button
          onClick={() => {
            dispatch(getNext(nextUrl));
            setPageNum((p) => Number(p + 1));
          }}
        >
          <Text>Next</Text>
          <ChevronRightIcon />
        </Button>
      )}
    </Flex>
  );
}
