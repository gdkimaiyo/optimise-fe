import { Button, Flex, Icon, Text } from "@chakra-ui/react";

import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  // Hook
  const navigate = useNavigate();

  // Handler
  function handleGoHome() {
    navigate("/");
  }

  return (
    <Flex
      h={"100vh"}
      w={"full"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"40px"}
      bg={"background"}
    >
      <Text
        fontSize={"14px"}
        color={"gray.500"}
        textAlign={"center"}
        maxW={"80%"}
      >
        Page not found!
      </Text>

      <Flex
        direction={"column"}
        textAlign={"center"}
        my={2}
        gap={2}
        align={"center"}
      >
        <Button
          bg={"gray.700"}
          color={"gray.50"}
          border={"none"}
          _hover={{ opacity: 0.9 }}
          borderRadius={"24px"}
          fontSize={"14px"}
          type="submit"
          w={"fit-content"}
          px={"20px"}
          py={2}
          leftIcon={<Icon as={GoHome as React.ElementType} />}
          onClick={handleGoHome}
        >
          Go to Homepage
        </Button>
      </Flex>
    </Flex>
  );
}
