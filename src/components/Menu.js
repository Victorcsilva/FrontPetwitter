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
  // Wrap,
  // WrapItem,
  // Center,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalCloseButton,
  // ModalBody,
} from "@chakra-ui/react";
import { FiMenu, FiUser, FiHome, FiLogOut } from "react-icons/fi";
import patasblue from "../images/petsblue.png";
import DogAvatar from "../images/Avatar.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import PostForm from "./PostForm";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Perfil", icon: FiUser },
  { name: "Sair", icon: FiLogOut },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
        <PostForm />
      </Box> */}
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onCloseModal } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
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

        <Text
          fontSize={["21px", "0%"]}
          color={"#00ACC1"}
          fontFamily={"Roboto"}
          fontWeight={"700"}
          marginLeft={"21px"}
        ></Text>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          justifyContent="flex-end"
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Button onClick={toggleColorMode} bg="transparent">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        justifyContent={"center"}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="10"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      {...rest}
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
      <Flex h="20" alignItems="center" justifyContent={"center"} mx="18">
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
    </Flex>
  );
};
