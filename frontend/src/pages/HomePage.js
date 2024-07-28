import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Link to={"/subha"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>profile page</Button>
      </Flex>
    </Link>
  );
};

export default HomePage;
