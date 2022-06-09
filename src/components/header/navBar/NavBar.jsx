import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };
  return (
    <Flex>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "red.200" : "")}
        // style={{backgroundColor: "gray"}}
      >
        <Text fontWeight="semibold" _hover={{ color: "gray.500" }} marginX={5}>
          Home
        </Text>
      </NavLink>
      <NavLink
        to="/favorites"
        className={(navData) => (navData.isActive ? "red.200" : "")}
      >
        <Text fontWeight="semibold" _hover={{ color: "gray.500" }} marginX={5}>
          Favorites
        </Text>
      </NavLink>
    </Flex>
  );
};
