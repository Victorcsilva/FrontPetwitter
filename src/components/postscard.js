import { Flex, Box, Image, Text } from "@chakra-ui/react";
import DogAvatar from "../images/Avatar.png";
import { getusers } from "../services/auth_posts";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

const Posts = (props) => {
  const { authorId, createdAt, content } = props;
  const [data, setdata] = useState();
  const location = useLocation();
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
  console.log(location);
  return (
    <Box w="360px">
      <Flex>
        <Image src={DogAvatar} display="flex" w={["56px", "56px"]} />
        <Link to={`${location.pathname === "/" ? "/perfil/" + authorId : "#"}`}>
          <Text
            as="i"
            fontSize={"15px"}
            color={"#000000"}
            fontFamily={"Roboto"}
            marginLeft={"21px"}
          >
            {data?.name ? data?.name : "Carregando..."}
          </Text>
        </Link>
        <Text as="i">@{data?.username ? data?.username : "Carregando..."}</Text>

        <Text as="i">
          .{<ReactTimeAgo date={Date.parse(createdAt)} locale="pt-BR" />}
        </Text>
      </Flex>
      <Text as="i"> {content}</Text>
    </Box>
  );
};

export default Posts;
