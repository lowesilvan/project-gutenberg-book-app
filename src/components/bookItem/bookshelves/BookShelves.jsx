import { AddIcon } from '@chakra-ui/icons';
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React from 'react'

export default function BookShelves({ element, setSearchInputValue }) {
  return (
    <button onClick={(e) => setSearchInputValue(element)}>
      <Tag
        variant="solid"
        _hover={{ backgroundColor: "green.700", transition: "0.5s" }}
      >
        <TagLeftIcon as={AddIcon} />
        <TagLabel>{element}</TagLabel>
      </Tag>
    </button>
  );
}
