import { Textarea, Box } from "@chakra-ui/react";
function Feed() {
  return (
    <Box color="black" w={{ base: "full", md: 664 }}>
      <Textarea placeholder="O que está acontecendo?"></Textarea>
      Posts
    </Box>
  );
}

export default Feed;
