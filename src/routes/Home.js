import { Container, Wrap, WrapItem, Center } from "@chakra-ui/react";
// import Menu from "../components/Menu";
// import PostForm from "../components/PostForm";
// import { Outlet } from "react-router-dom";
// import AuthStatus from "../components/AuthStatus";

function Home() {
  return (
    <Container bg="blue.600" centerContent>
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            {/* <PostForm /> */}
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
      </Wrap>
    </Container>
  );
}

export default Home;
