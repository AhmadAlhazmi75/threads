import { Flex, Image, useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <Image
        cursor={"pointer"}
        alt="logo"
        src={colorMode !== "dark" ? "/dark-logo.svg" : "/light-logo.svg"}
        onClick={toggleColorMode}
        w={6}
      />
    </Flex>
  );
}

export default Header;
