import { Flex } from "@chakra-ui/react";
// import Menu from "../components/Menu";
// import PostForm from "../components/PostForm";
// import { Outlet } from "react-router-dom";
// import AuthStatus from "../components/AuthStatus";
import Feed from "../components/Feed";

function Home() {
  return (
    <Flex direction={"column"} maxWidth="680px">
      <Feed />
    </Flex>
  );
}

export default Home;
