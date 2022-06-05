import { Flex, Stack, Image, Text } from "@chakra-ui/react";
import dogimage from "../images/dog1.png";
import Login from "./Login";
import patas from "../images/pets.png";
import symbol from "../images/symbol.png";
import patasblue from "../images/petsblue.png";

function Home() {
  return (
    <Flex display={"flex"} direction={["column", "row"]}>
      <Flex align={"center"} justify="center">
        <Flex>
          <Image
            src={dogimage}
            display="block"
            w={["100%", "767px"]}
            h={["100%", "720px"]}
          />
          <Image
            src={patas}
            display="flex"
            left={[37, 179]}
            top={[67, 354]}
            position={"absolute"}
            w={["72px", "77px"]}
          />
          <Text
            fontSize={["0%", "51.5px"]}
            color={"#FFFFFF"}
            fontFamily={"Roboto"}
            fontWeight={"700"}
            left={289}
            top={[67, 354]}
            position={"absolute"}
          >
            {" "}
            PETWITTER
          </Text>
          <Text
            fontSize={["36px", "0%"]}
            color={"#FFFFFF"}
            fontFamily={"Open Sans"}
            fontStyle={"normal"}
            fontWeight={"700"}
            left={26}
            top={139.12}
            position={"absolute"}
          >
            Comece agora.<p>Conecte-se já.</p>
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} align={"center"} marginLeft={"32px"}>
        <Stack spacing={4} w={"full"}>
          <Image src={symbol} w={["0%", "76px"]} />
          <Login />
        </Stack>
      </Flex>
      <Flex display={"flex"} justifyContent="center" marginTop={"50px"}>
        <Image src={patasblue} display="flex" w={["29px", "0%"]} />
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
export default Home;
