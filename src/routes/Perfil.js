import { Box, Flex, Text, Image, CircularProgress } from "@chakra-ui/react";
import { allpostsid, getusers } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import Postcard from "../components/Postscard";
import DogAvatar from "../images/Avatar.png";
import { useAuth } from "../context/auth-context";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import dog from "../images/1.gif";

function Perfil() {
  const [data, setdata] = useState([]);
  const [userdata, setuser] = useState(false);
  const { user } = useAuth();
  const { user_id } = useParams();
  const [hasmore, sethasmore] = useState(true);
  const [skips, setskips] = useState(0);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await allpostsid(skips, user.id);

        if (response.data.length < 10) sethasmore(false);
        skips === 0
          ? setdata(response.data)
          : setdata(data.concat(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skips]);
  const fetchData = () => setskips(skips + 10);

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
      <Flex borderWidth="1px" w={["360px", "683px"]} padding={1}>
        <Flex flexDirection="column" marginLeft={"34px"}>
          <Image
            src={DogAvatar}
            w={["73px", "120px"]}
            height={["73px", "120px"]}
          />
          <Text
            fontSize={["16px", "18px"]}
            fontWeight="700"
            color="#000000"
            fontStyle="normal"
          >
            Petposts
          </Text>
          <Box w="91.79px" height="3px" bg="#00ACC1" />
        </Flex>

        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          marginLeft="16px"
        >
          <Text
            fontSize={["22px", "24px"]}
            fontWeight="700"
            justifyContent="center"
          >
            {userdata ? userdata.name : user.name}
          </Text>
          <Text fontWeight={600} color={"gray.500"}>
            {userdata ? userdata.username : user.username}
          </Text>
        </Flex>
      </Flex>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasmore}
        loader={
          <CircularProgress
            isIndeterminate
            color="#00ACC1"
            display={"flex"}
            justifyContent={"center"}
            py={"16px"}
          />
        }
        endMessage={
          <Flex justifyContent={"center"}>
            <p
              style={{
                position: "absolute",
                color: "#00ACC1",
                textAlign: "center",
              }}
            >
              <b>Ops!!! não tem mais posts </b>
            </p>
            <Image src={dog} w="300px" h="auto" />
          </Flex>
        }
      >
        {
          <Box
            w={["360px", "683px"]}
            // height={["Hug (130px)", "230px"]}
            padding={1}
          >
            {data.map((element) => (
              <Postcard
                key={element.user_id}
                authorId={element.authorId}
                createdAt={element.createdAt}
                content={element.content}
              />
            ))}
          </Box>
        }
      </InfiniteScroll>
    </Box>
  );
}

export default Perfil;
