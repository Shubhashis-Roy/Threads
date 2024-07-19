import React, { useState } from "react";
import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import Proptypes from "prop-types";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = ({ reply, lastReply }) => {
  const [liked, setLiked] = useState();

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={"/zuck-avatar.png"} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              Mark
            </Text>

            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>Hey this looks great!</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"gray.light"}>
            {100 + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>

      <Divider my={4} />
    </>
  );
};

Comment.propTypes = {
  lastReply: Proptypes.string,
  reply: Proptypes.string,
};

export default Comment;
