import {
  Box,
  Container,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { usePostsAPI } from "services/posts.service";

interface PostListProps {
  endpoint: string;
}

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = ({ endpoint }: PostListProps) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //   APIs
  const { getPosts } = usePostsAPI();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts(endpoint);
        setPosts(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  if (loading) {
    return (
      <Container maxW="container.lg">
        <Heading size="md" mb={4}>
          Posts
        </Heading>
        <VStack align="stretch" spacing={4}>
          {[...Array(5)].map((_, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" w="full">
              <Skeleton height="20px" mb={2} />
              <SkeletonText noOfLines={3} spacing={2} />
            </Box>
          ))}
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg">
      <Heading size="md" mb={4}>
        Posts
      </Heading>
      <VStack align="stretch" spacing={4}>
        {posts?.map((post: PostProps) => (
          <Box
            key={`${post.userId} - ${post.id}`}
            p={4}
            borderWidth={1}
            borderRadius="md"
            w="full"
          >
            <Heading size="sm" mb={2} textTransform={"capitalize"}>
              {post.title}
            </Heading>
            <Text>{post.body}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default PostList;
