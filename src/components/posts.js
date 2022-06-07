import { Textarea, Box, Avatar } from "@chakra-ui/react";
import { posts } from "../services/auth";
import React from "react";

function textarea() {
    const handleSubmit = async (event) ={
        try{event.preventDefault()}
    }
  return (
    <Box color="black" w={{ base: "full", md: 664 }}>

      <Textarea
        placeholder="O que está acontecendo?"
        Avatar="https://bit.ly/dan-abramov"
      >
        <Avatar
          size="2xs"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Textarea>
    </Box>
  );
}

export default textarea;
