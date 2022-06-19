import { Container, Wrap } from "@chakra-ui/react";
import Feed from "../components/Feed";
import React from "react";

function Home() {
  return (
    <Container
      display="flex"
      w="202"
      maxW="1280px"
      padding="0"
      borderBlockStartWidth="1px"
    >
      <Wrap flexDirection={"column"} display="block">
        <Feed />
        {/* <WrapItem>
          <Center w="50%" bg="tomato">
            Box 3
          </Center>
        </WrapItem> */}
      </Wrap>
    </Container>
  );
}

export default Home;
