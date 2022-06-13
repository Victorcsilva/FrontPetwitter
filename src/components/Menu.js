import {
  IconButton,
  Box,
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

  return (
    //     <Box width={"700px"}>
    //       <SidebarContent
    //         onClose={() => onClose}
    //         display={{ base: "none", md: "block" }}
    //       />
    //       <Drawer
    //         autoFocus={false}
    //         isOpen={isOpen}
    //         placement="left"
    //         onClose={onClose}
    //         returnFocusOnClose={false}
    //         onOverlayClick={onClose}
    //         size="full"
    //       >
    //         <DrawerContent>
    //           <SidebarContent onClose={onClose} />
    //         </DrawerContent>
    //       </Drawer>

    //       <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    //       {/* <Box
    //         // width="630px"
    //         // height={"full"}
    //         ml={{ base: 0, md: 60 }}
    //         p="4"
    //         bgColor={"white"}
    //       ></Box> */}
    //       <Box borderBlockEnd={"12px"}></Box>
    //     </Box>
    //   );
    // }

    // const SidebarContent = ({ onClose, ...rest }) => {
    //   return (
    //     <Box
    //       bg={useColorModeValue("white", "gray.900")}
    //       borderRight="1px"
    //       borderRightColor={useColorModeValue("gray.200", "gray.700")}
    //       w={{ base: "full", md: 60 }}
    //       pos="fixed"
    //       h="full"
    //       {...rest}
    //     >
    //       <Flex
    //         h="20"
    //         alignItems="center"
    //         mx="8"
    //         justifyContent="center"
    //         display={"flex"}
    //       >
    //         <Image src={DogAvatar} display="flex" w={["56px", "0%"]} />
    //         <Image src={patasblue} display="flex" w={["0%", "29px"]} />
    //         <Text
    //           fontSize={["0%", "27px"]}
    //           color={"#00ACC1"}
    //           fontFamily={"Roboto"}
    //           fontWeight={"700"}
    //           marginLeft={"11px"}
    //         >
    //           {"PETWITTER"}
    //         </Text>

    //         <Text
    //           fontSize={["21px", "0%"]}
    //           color={"#00ACC1"}
    //           fontFamily={"Roboto"}
    //           fontWeight={"700"}
    //           marginLeft={"21px"}
    //         ></Text>
    //         <CloseButton
    //           display={{ base: "flex", md: "none" }}
    //           justifyContent="flex-end"
    //           onClick={onClose}
    //         />
    //       </Flex>
    //       <NavItem />
    //     </Box>
    <Flex direction={["column", "row"]}>
      <Flex
        border={"1px solid red"}
        justifyContent={"space-around"}
        width={"100%"}
        display={["flex", "none"]}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
          color={"#00ACC1"}
          border="ffffff"
          justifyContent={"flex-start"}
        />
        <Flex alignItems="center" mx="18">
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
          // size="full"
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Image src={DogAvatar} display="flex" w={["56px", "0%"]} />
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
                onClick={onClose}
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
                onClick={onClose}
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
              <Button variant="link" onClick={modalOnOpen}>
                Sair
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Stack
        direction="column"
        spacing={4}
        border="1px solid red"
        display={["none", "flex"]}
      >
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
        <Button variant="link" onClick={modalOnOpen}>
          Sair
        </Button>

        {/* <Button onClick={toggleColorMode} bg="transparent">
          {colorMode === "light" ? <MoonIcon color="#00ACC1" /> : <SunIcon />}
        </Button> */}
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

  // const NavItem = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { signout } = useAuth();
  //   return (
  //     <Flex direction={"column"}>
  //       <Stack direction="column" spacing={4}>
  //         <Link
  //           to="/"
  //           border={"0"}
  //           justifyContent={"center"}
  //           align="center"
  //           role="group"
  //           p="4"
  //           mx="2"
  //           cursor="pointer"
  //           _hover={{
  //             bg: "#00ACC1",
  //             color: "white",
  //           }}
  //         >
  //           <Icon
  //             mr="4"
  //             fontSize="16"
  //             _groupHover={{
  //               color: "white",
  //             }}
  //             as={FiHome}
  //           />
  //           Home
  //         </Link>
  //         <Link
  //           href="/perfil"
  //           border={"0"}
  //           justifyContent={"center"}
  //           align="center"
  //           role="group"
  //           p="4"
  //           mx="2"
  //           cursor="pointer"
  //           _hover={{
  //             bg: "#00ACC1",
  //             color: "white",
  //           }}
  //         >
  //           <Icon
  //             mr="4"
  //             fontSize="16"
  //             _groupHover={{
  //               color: "white",
  //             }}
  //             as={FiUser}
  //           />
  //           Perfil
  //         </Link>
  //         <Link
  //           onClick={onOpen}
  //           border={"0"}
  //           justifyContent={"center"}
  //           align="center"
  //           role="group"
  //           p="4"
  //           mx="2"
  //           cursor="pointer"
  //           _hover={{
  //             bg: "#00ACC1",
  //             color: "white",
  //           }}
  //         >
  //           <Icon
  //             mr="4"
  //             fontSize="16"
  //             color="#00ACC1"
  //             _groupHover={{
  //               color: "white",
  //             }}
  //             as={FiLogOut}
  //           />
  //           {/* <Modal isOpen={isOpen} onClose={onClose}>
  //             <ModalOverlay />
  //             <ModalContent>
  //               <ModalHeader>Sair desta conta?</ModalHeader>
  //               <ModalBody>Deseja realmente sair desta conta?</ModalBody>
  //               <ModalFooter>
  //                 <Button
  //                   variant="ghost"
  //                   mr={3}
  //                   color="#00ACC1"
  //                   _hover={{
  //                     bg: "#00ACC1",
  //                     color: "white",
  //                   }}
  //                   onClick={() => signout()}
  //                 >
  //                   Sair
  //                 </Button>
  //                 <Button
  //                   border={"0"}
  //                   justifyContent={"center"}
  //                   align="center"
  //                   role="group"
  //                   p="4"
  //                   mx="2"
  //                   color="#00ACC1"
  //                   _hover={{
  //                     bg: "#00ACC1",
  //                     color: "white",
  //                   }}
  //                   onClick={onClose}
  //                 >
  //                   Cancelar
  //                 </Button>
  //               </ModalFooter>
  //             </ModalContent>
  //           </Modal> */}
  //           Sair
  //         </Link>
  //         <Button onClick={toggleColorMode} bg="transparent">
  //           {colorMode === "light" ? <MoonIcon color="#00ACC1" /> : <SunIcon />}
  //         </Button>
  //       </Stack>
  //       <Outlet />
  //     </Flex>
  //   );
  // };

  // const MobileNav = ({ onOpen, ...rest }) => {
  //   return (
  //     <Flex
  //       ml={{ base: 0, md: 60 }}
  //       px={{ base: 4, md: 4 }}
  //       height="10"
  //       alignItems="center"
  //       bg={useColorModeValue("white", "gray.900")}
  //       borderBottomWidth="1px"
  //       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
  //       display="flex"
  //       {...rest}
  //     >
  //       <IconButton
  //         variant="outline"
  //         onClick={onOpen}
  //         aria-label="open menu"
  //         icon={<FiMenu />}
  //         color={"#00ACC1"}
  //         border="ffffff"
  //         justifyContent={"flex-start"}
  //       />
  //       <Flex h="20" alignItems="center" justifyContent={"center"} mx="18">
  //         <Image src={patasblue} w={["29px", "0%"]} />
  //         <Text
  //           fontSize={["14px", "0%"]}
  //           color={"#00ACC1"}
  //           fontFamily={"Roboto"}
  //           fontWeight={"700"}
  //           marginLeft={"11px"}
  //         >
  //           {"PETWITTER"}
  //         </Text>
  //       </Flex>
  //     </Flex>
  //   );
}
