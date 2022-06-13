import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { allpost, getusers } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import Postcard from "../components/Postscard";
import DogAvatar from "../images/Avatar.png";
import { useAuth } from "../context/auth-context";
import { useParams } from "react-router-dom";

function Perfil() {
  const [data, setdata] = useState([]);
  const [userdata, setuser] = useState(false);
  const { user } = useAuth();
  const { user_id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const response = await allpost(user_id ? user_id : user.id);
        setdata(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, [user.id, user_id]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getusers(user_id);
        setuser(response.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (user_id) request();
  }, [user_id]);

  return (
    <Box>
      <Flex border={"1px solid red"}>
        <Image src={DogAvatar} display="flex" w={["56px", "0%"]} />
        <Flex>
          <Text>{userdata ? userdata.name : user.name}</Text>
          <Text>@{userdata ? userdata.username : user.username}</Text>
        </Flex>
      </Flex>
      <Flex direction={"column"}>
        {data.map((element) => (
          <Postcard
            key={element.id}
            authorId={element.authorId}
            createdAt={element.createdAt}
            content={element.content}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default Perfil;
