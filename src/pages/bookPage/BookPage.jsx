import { Center } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

export default function BookPage() {
  const location = useLocation();
  const { title, resources } = location.state;
  const [value, setvalue] = useState("");

  const FilterUri = useCallback(() => {
    const Uri = resources.filter((resource) => resource.uri.includes("h.htm"));
    // console.log(Uri)
    setvalue(Uri[0].uri);
  }, [resources, setvalue]);

  useEffect(() => {
    FilterUri();
  }, [FilterUri]);

  return (
    <Center w="full" h="100vh">
      <iframe
        title={title}
        src={value}
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
    </Center>
  );
}
