import {
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";
import Feed from "../components/Feed";
import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
// import { PostForm } from "../components/PostForm";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Container display="flex" height="683px" maxW="1280px" padding="0">
      <Feed />
      <Button
        onClick={onOpen}
        as={IoAddCircleSharp}
        display={["32px", "none"]}
        color={"#00ACC1"}
        position="fixed"
        bg="transparent"
        width={"80px"}
        marginLeft="200px"
        top="400px"
      ></Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>{/* <PostForm /> */}</FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Home;
