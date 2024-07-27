import React, { useState } from "react";
import {
  Avatar,
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState();
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar size="md" name="Mark Zuckerberge" src="/zuck-avatar.png" />

          <Flex w={"full"} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Mark Zuckerberge
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={1} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            2 day ago
          </Text>

          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>In publishing and graphic design</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid   "}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}> 👋 </Text>
          <Text color={"gray.light"}>Get the app to like.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        userAvatar={"/zuck-avatar.png"}
        createdAt="2d"
        comment="comment 1"
        username="Name 1"
        likes={12}
      />
      <Comment
        userAvatar="https://bit.ly/ryan-florence"
        createdAt="2d"
        comment="comment 1"
        username="Name 1"
        likes={12}
      />
      <Comment
        userAvatar="https://bit.ly/prosper-baba"
        createdAt="2d"
        comment="comment 1"
        username="Name 1"
        likes={12}
      />
    </>
  );
};

export default PostPage;
