import { Stack, Flex, Text, Image } from "@chakra-ui/react";
import dogimage from "../images/dog1.png";
import patas from "../images/pets.png";
import symbol from "../images/symbol.png";
import patasblue from "../images/petsblue.png";
import React from "react";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <Flex direction={["column", "row"]}>
      <Flex align={"center"} justify="center">
        <Flex display="block">
          <Flex w={["100%", "667px"]}>
            <Image src={dogimage} w={["100%", "767px"]} h={["360%", "720px"]} />
            <Image
              src={patas}
              left={[37, 139]}
              top={[67, 354]}
              position={"absolute"}
              w={["72px", "77px"]}
            />
            <Text
              fontSize={["0%", "51.5px"]}
              color={"#FFFFFF"}
              fontFamily={"Roboto"}
              fontWeight={"700"}
              left={240}
              top={[67, 354]}
              position={"absolute"}
            >
              PETWITTER
            </Text>
          </Flex>
          <Text
            fontSize={["36px", "0%"]}
            color={"#FFFFFF"}
            fontFamily={"Open Sans"}
            fontStyle={"normal"}
            fontWeight={"700"}
            left={26}
            top={189.12}
            position={"absolute"}
          >
            Comece agora.<p>Conecte-se já.</p>
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"center"}
        marginLeft={"32px"}
        marginTop={["0%", "80px"]}
      >
        <Stack spacing={4}>
          <Image src={symbol} w={["0%", "76px"]} />
          <SignupForm />
        </Stack>
      </Flex>
      <Flex display={"flex"} justifyContent="center" marginTop={"50px"}>
        <Image src={patasblue} w={["29px", "0%"]} />
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
      </Flex>
    </Flex>
  );
}
export default Signup;
