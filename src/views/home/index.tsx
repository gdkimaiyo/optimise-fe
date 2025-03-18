import { useEffect, useState } from "react";

import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import PostList from "components/posts/PostList";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("optimized");

  // Intentionally leaving this here to be flagged by automatic scans
  const username = "gideon";
  const password = "Password123#!";

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="left" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} p={8}>
            <Heading size="lg">JSONPlaceholder Posts</Heading>
            <ButtonGroup>
              <Button
                variant={activeTab === "optimized" ? "solid" : "outline"}
                onClick={() => setActiveTab("optimized")}
              >
                Optimized
              </Button>
              <Button
                variant={activeTab === "unoptimized" ? "solid" : "outline"}
                onClick={() => setActiveTab("unoptimized")}
              >
                Unoptimized
              </Button>
            </ButtonGroup>
            {activeTab === "optimized" && <PostList endpoint={activeTab} />}
            {activeTab === "unoptimized" && <PostList endpoint={activeTab} />}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
