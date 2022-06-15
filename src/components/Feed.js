import { Box, Flex, CircularProgress, Center } from "@chakra-ui/react";
import { allposts } from "../services/auth_posts";
import React from "react";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import Postcard from "../routes/Postscard";
import InfiniteScroll from "react-infinite-scroll-component";

function Feed() {
  const [data, setdata] = useState([]);
  const [skips, setskips] = useState(0);
  const [hasmore, sethasmore] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await allposts(skips);
        if (response.data.length < 10) sethasmore(false);
        skips === 0
          ? setdata(response.data)
          : setdata(data.concat(response.data));
      } catch (error) {
        console.log("esse e o feed");
      }
    };
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skips]);
  const fetchData = () => setskips(skips + 10);
  console.log(data);

  return (
    <Box
      w={["360px", "683px"]}
      // height={["Hug (130px)", "230px"]}
    >
      <PostForm />
      <Center py={2}>
        <Flex>
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
              <p style={{ textAlign: "center" }}>
                <b>Ops não tem mais posts </b>
              </p>
            }
          >
            {
              <Box
                borderBlockStartWidth="1px"
                w={["360px", "683px"]}
                direction={{ base: "column", md: "row" }}
              >
                {data.map((element) => (
                  <Postcard
                    key={element.id}
                    authorId={element.authorId}
                    createdAt={element.createdAt}
                    content={element.content}
                  />
                ))}
              </Box>
            }
          </InfiniteScroll>
        </Flex>
      </Center>
    </Box>
  );
}

export default Feed;
