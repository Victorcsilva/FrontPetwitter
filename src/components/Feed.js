import {
  Box,
  Flex,
  CircularProgress,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
  Center,
  Image,
} from "@chakra-ui/react";
import { allposts } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import Postcard from "./Postscard";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoAddCircleSharp } from "react-icons/io5";
import dog from "../images/1.gif";

function Feed() {
  const [data, setdata] = useState([]);
  const [skips, setskips] = useState(0);
  const [hasmore, sethasmore] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await allposts(skips);
        if (response.data.length < 10) sethasmore(false);
        skips === 0
          ? setdata(response.data)
          : setdata(data.concat(response.data));
      } catch (error) {
        console.log("esse e o feed");
      }
    };
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skips]);
  const fetchData = () => setskips(skips + 10);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box>
      <Flex w={["360px", "none"]} display={["block", "none"]}>
        <Center py={2}>
          <Flex>
            <InfiniteScroll
              dataLength={data.length}
              next={fetchData}
              hasMore={hasmore}
              loader={
                <CircularProgress
                  isIndeterminate
                  color="#00ACC1"
                  display={"flex"}
                  justifyContent={"center"}
                  py={"16px"}
                />
              }
              endMessage={
                <Flex justifyContent={"center"}>
                  <p
                    style={{
                      position: "absolute",
                      color: "#00ACC1",
                      textAlign: "center",
                    }}
                  >
                    <b>Ops!!! não tem mais posts </b>
                  </p>
                  <Image src={dog} w="300px" h="auto" />
                </Flex>
              }
            >
              {
                <Box
                  borderBlockStartWidth="1px"
                  w={["360px", "683px"]}
                  direction={{ base: "column", md: "row" }}
                >
                  {data.map((element) => (
                    <Postcard
                      key={element.id}
                      authorId={element.authorId}
                      createdAt={element.createdAt}
                      content={element.content}
                    />
                  ))}
                </Box>
              }
            </InfiniteScroll>
          </Flex>
        </Center>
      </Flex>
      <Flex
        position="fixed"
        top="420px"
        right="70px"
        justifyContent={"flex-end"}
      >
        <Button
          onClick={onOpen}
          as={IoAddCircleSharp}
          display={["32px", "none"]}
          color={"#00ACC1"}
          bg="transparent"
          w={"86px"}
          h={"86px"}
        ></Button>
      </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        display="flex"
        size={"xs"}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent alignItems={"center"}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <PostForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box w={["none", "683px"]} display={["none", "Block"]}>
        <PostForm />
        <Center py={2}>
          <Flex>
            <InfiniteScroll
              dataLength={data.length}
              next={fetchData}
              hasMore={hasmore}
              loader={
                <CircularProgress
                  isIndeterminate
                  color="#00ACC1"
                  display={"flex"}
                  justifyContent={"center"}
                  py={"16px"}
                />
              }
              endMessage={
                <Flex justifyContent={"center"}>
                  <p
                    style={{
                      position: "absolute",
                      color: "#00ACC1",
                      textAlign: "center",
                    }}
                  >
                    <b>Ops!!! não tem mais posts </b>
                  </p>
                  <Image src={dog} w="300px" h="auto" />
                </Flex>
              }
            >
              {
                <Box
                  borderBlockStartWidth="1px"
                  w={["360px", "683px"]}
                  direction={{ base: "column", md: "row" }}
                >
                  {data.map((element) => (
                    <Postcard
                      key={element.id}
                      authorId={element.authorId}
                      createdAt={element.createdAt}
                      content={element.content}
                    />
                  ))}
                </Box>
              }
            </InfiniteScroll>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}

export default Feed;
