import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import patasblue from "../images/petsblue.png";
import DogAvatar from "../images/Avatar.png";

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
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
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
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
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={DogAvatar} display="flex" w={["56px", "0%"]} />
        <Image src={patasblue} display="flex" w={["0%", "29px"]} />
        <Text
          fontSize={["21px", "0%"]}
          color={"#00ACC1"}
          fontFamily={"Roboto"}
          fontWeight={"700"}
          marginLeft={"21px"}
        >
          {" "}
          PETWITTER
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="10"
      width="360px"
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
