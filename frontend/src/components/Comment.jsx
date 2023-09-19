import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = () => {
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src="/zuck-avatar.png" size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              markzukerberg
            </Text>
          </Flex>
          <Text>Here some text</Text>
        </Flex>
      </Flex>
      {/* {!lastReply ? <Divider /> : null} */}
      <Divider />
    </>
  );
};

export default Comment;
