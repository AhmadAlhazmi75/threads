import {
  Flex,
  Avatar,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";
function PostPage() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w="full" alignItems="center" gap={3}>
          <Avatar src="/zuck-avatar.png" size="md" name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize="sm" fontWeight="bold">
              markzukerberg
            </Text>
            <Image src="/verified.png" w="4" h="4" ml="4" />
          </Flex>
        </Flex>
        <Flex gap="4" alignItems="center">
          <Text fontSize="sm" color="gray.light">
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my="3">Lets Talk about threads</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w="full" />
      </Box>
      <Flex gap="3" my="3">
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap="2" alignItems="center">
        <Text color="gray.light" fontSize="sm">
          1.2k likes
        </Text>
        <Box w="1" h="1" bg="gray.light" borderRadius="full"></Box>
        <Text color="gray.light" fontSize="sm">
          322 replies
        </Text>
      </Flex>
      <Divider my="4" />
      <Flex justifyContent="space-between">
        <Flex gap="2" alignItems="center">
          <Text fontSize="2xl">👋</Text>
          <Text color="gray.light">Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my="4" />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  );
}

export default PostPage;
