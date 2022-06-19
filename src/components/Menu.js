import {
  IconButton,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  Link,
  Icon,
  useColorMode,
  useColorModeValue,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  DrawerCloseButton,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import { FiMenu, FiUser, FiHome, FiLogOut } from "react-icons/fi";
import { Outlet, Link as routerLink } from "react-router-dom";
import patasblue from "../images/petsblue.png";
import DogAvatar from "../images/Avatar.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/auth-context";

export default function Sidebar() {
  const { signout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction={["column", "row"]}>
      <Box display={["flex", "none"]}>
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
          color={"#00ACC1"}
          border="ffffff"
        />
        <Flex alignItems="center" mx="20">
          <Image src={patasblue} w={["29px", "0%"]} />
          <Text
            fontSize={["14px", "0%"]}
            color={"#00ACC1"}
            fontFamily={"Roboto"}
            fontWeight={"700"}
            marginLeft={"11px"}
          >
            {"PETWITTER"}
          </Text>
        </Flex>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Flex flexDirection={"column"} justifyContent="center">
                <Stack alignItems={"center"} p="4">
                  <Image src={DogAvatar} w={["56px", "0%"]} />
                </Stack>

                <Link
                  as={routerLink}
                  to="/"
                  border="0"
                  justifyContent="center"
                  align="center"
                  role="group"
                  p="4"
                  mx="2"
                  cursor="pointer"
                  _hover={{
                    bg: "#00ACC1",
                    color: "white",
                  }}
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  as={routerLink}
                  to="/perfil"
                  border={"0"}
                  justifyContent={"center"}
                  align="center"
                  role="group"
                  p="4"
                  mx="2"
                  cursor="pointer"
                  _hover={{
                    bg: "#00ACC1",
                    color: "white",
                  }}
                  onClick={onClose}
                >
                  Perfil
                </Link>
                <Link
                  variant="link"
                  onClick={modalOnOpen}
                  align="center"
                  role="group"
                  p="4"
                  mx="2"
                  cursor="pointer"
                  _hover={{
                    bg: "#00ACC1",
                    color: "white",
                  }}
                >
                  {" "}
                  <Icon
                    mr="4"
                    fontSize="16"
                    color="#00ACC1"
                    _groupHover={{
                      color: "white",
                    }}
                    as={FiLogOut}
                  />
                  Sair
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Stack
        className="desktop stack"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        h="full"
        direction="column"
        spacing={4}
        display={["none", "flex"]}
        maxW="600px"
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="center"
          display={"flex"}
        >
          <Image src={DogAvatar} display="flex" w={["56px", "0%"]} />
          <Image src={patasblue} display="flex" w={["0%", "29px"]} />
          <Text
            fontSize={["0%", "27px"]}
            color={"#00ACC1"}
            fontFamily={"Roboto"}
            fontWeight={"700"}
            marginLeft={"11px"}
          >
            {"PETWITTER"}
          </Text>

          <CloseButton
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
            onClick={onClose}
          />
        </Flex>
        <Link
          as={routerLink}
          to="/"
          border={"0"}
          justifyContent={"center"}
          align="center"
          role="group"
          p="4"
          mx="2"
          cursor="pointer"
          _hover={{
            bg: "#00ACC1",
            color: "white",
          }}
        >
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={FiHome}
          />
          Home
        </Link>
        <Link
          as={routerLink}
          to="/perfil"
          border={"0"}
          justifyContent={"center"}
          align="center"
          role="group"
          p="4"
          mx="2"
          cursor="pointer"
          _hover={{
            bg: "#00ACC1",
            color: "white",
          }}
        >
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={FiUser}
          />
          Perfil
        </Link>
        <Link
          variant="link"
          onClick={modalOnOpen}
          align="center"
          role="group"
          p="4"
          mx="2"
          cursor="pointer"
          _hover={{
            bg: "#00ACC1",
            color: "white",
          }}
        >
          {" "}
          <Icon
            mr="4"
            fontSize="16"
            color="#00ACC1"
            _groupHover={{
              color: "white",
            }}
            as={FiLogOut}
          />
          Sair
        </Link>
        <Button onClick={toggleColorMode} bg="transparent">
          {colorMode === "light" ? <MoonIcon color="#00ACC1" /> : <SunIcon />}
        </Button>
      </Stack>

      <Modal isOpen={modalIsOpen} onClose={modalOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sair desta conta?</ModalHeader>
          <ModalBody>Deseja realmente sair desta conta?</ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              color="#00ACC1"
              _hover={{
                bg: "#00ACC1",
                color: "white",
              }}
              onClick={() => signout()}
            >
              Sair
            </Button>
            <Button
              border={"0"}
              justifyContent={"center"}
              align="center"
              role="group"
              p="4"
              mx="2"
              color="#00ACC1"
              _hover={{
                bg: "#00ACC1",
                color: "white",
              }}
              onClick={() => {
                modalOnClose();
                onClose();
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Outlet />
    </Flex>
  );
}
