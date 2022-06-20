import { Flex, Image, Text, IconButton, Stack } from "@chakra-ui/react";
import DogAvatar from "../images/Avatar.png";
import { getusers } from "../services/auth_posts";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { IoPawSharp } from "react-icons/io5";

const Posts = (props) => {
  const { authorId, createdAt, content } = props;
  const [data, setdata] = useState();
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  function clickHandler() {
    setIsLiked(!isLiked);
  }

  const like = {
    backgroundColor: "pink",
  };
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getusers(authorId);
        setdata(response.data[0]);
      } catch (error) {
        console.log("error no useEffects");
      }
    };
    request();
  }, [authorId]);
  return (
    <Flex borderBlockStartWidth="1px">
      <Image
        marginLeft="10px"
        src={DogAvatar}
        w={["56px", "56px"]}
        h="full"
        marginTop="20px"
      />
      <Flex flexDirection="column" marginLeft="8px" marginTop="20px">
        <Flex marginLeft="16px">
          <Link
            to={`${location.pathname === "/" ? "/perfil/" + authorId : "#"}`}
          >
            <Text fontSize={["15px", "15px"]} fontWeight="700">
              {data?.name ? data?.name : "Carregando..."}
            </Text>
          </Link>
          <Text
            as="i"
            fontSize={["12px", "15px"]}
            color={"gray.500"}
            marginLeft="4px"
          >
            @ {data?.username ? data?.username : "Carregando..."}
          </Text>

          <Text
            as="i"
            fontSize={["12px", "15px"]}
            color={"gray.500"}
            marginLeft="13px"
          >
            .{<ReactTimeAgo date={Date.parse(createdAt)} locale="pt-BR" />}
          </Text>
        </Flex>
        <Text
          as="i"
          fontSize={["12px", "15px"]}
          color={"gray.500"}
          marginLeft="13px"
          marginBottom={"13px"}
        >
          {" "}
          {content}
        </Text>
        <Stack>
          <IconButton
            marginBottom={"13px"}
            marginLeft="13px"
            justifyContent={"flex-end"}
            onClick={clickHandler}
            style={isLiked ? like : null}
            align="center"
            role="group"
            size="20px"
            bg={"transparent"}
            cursor="pointer"
            _hover={{
              bg: "#00ACC1",
              color: "white",
            }}
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={IoPawSharp}
          ></IconButton>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Posts;
