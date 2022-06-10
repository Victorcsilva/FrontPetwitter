import { VStack, StackDivider, Box, Flex, Image, Text } from "@chakra-ui/react";
import { allposts } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import DogAvatar from "../images/Avatar.png";
import PostForm from "./PostForm";
// import post
function Feed() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await allposts();
        setdata(response.data.userposts);
        console.log(response);
      } catch (error) {
        console.log("error no useEffects");
      }
    };
    request();
  }, []);
  return (
    <Box>
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
          <Box>
            <Flex>
              {/* {data.map((element) => (
                name = {element.name}
                username = {element.username}
                content=  {element.content}
              
            ))} */}
              <Image src={DogAvatar} display="flex" w={["56px", "56px"]} />
              <Text
                fontSize={"15PX"}
                color={"#000000"}
                fontFamily={"Roboto"}
                fontWeight={"700"}
                marginLeft={"21px"}
              >
                {" "}
                {/* {name} */}
              </Text>
              {/* <Text as="i">@{username}</Text> */}
              {/* <Text as="i">.{createdAt}</Text> */}
            </Flex>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Box>
          <Box>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Feed;
