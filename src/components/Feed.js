import { VStack, StackDivider, Box, Flex } from "@chakra-ui/react";
import { allposts } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import Postcard from "./Postscard";

function Feed() {
  const [data, setdata] = useState([]);
  const [skips, setskips] = useState(0);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await allposts(skips);
        setdata(response.data);
      } catch (error) {
        console.log("esse e o feed");
      }
    };
    request();
  }, [skips]);
  return (
    <Box
      border={"1px solid red"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <StackDivider>
        <PostForm />
      </StackDivider>
      <Flex>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={2}
          align="stretch"
          display={"inline-block"}
        >
          <Box border={"1px solid red"}>
            {data.map((element) => (
              <Postcard
                key={element.id}
                authorId={element.authorId}
                createdAt={element.createdAt}
                content={element.content}
              />
            ))}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Feed;
