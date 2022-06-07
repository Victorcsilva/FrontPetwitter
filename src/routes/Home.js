import { Container, Wrap, WrapItem, Center } from "@chakra-ui/react";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import { Outlet } from "react-router-dom";
import AuthStatus from "../components/AuthStatus";

function Layout() {
  return (
    <Container bg="blue.600" centerContent>
      <AuthStatus />
      <Wrap>
        <Menu />
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            <Feed />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
      </Wrap>
      <Outlet />
    </Container>
  );
}

export default Layout;
