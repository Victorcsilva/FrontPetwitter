import { Box, Textarea, Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { posts } from "../services/auth_posts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useCallback, useState } from "react";

const schema = yup
  .object({
    published: yup.string().max(140),
  })
  .required();

function PostForm() {
  const [count, setCount] = useState(0),
    onTextChange = useCallback(
      (event) => setCount(event.target.value.length),
      []
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [send, setSend] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);

    try {
      setSend(true);
      const response = await posts(data);
      setSend(false);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display="flex"
      color="black"
      w={{ base: "full", md: 164 }}
      alignItems={"end"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          width="620px"
          placeholder="O que está acontecendo?"
          onChange={onTextChange}
          {...register("content")}
        />
        <Flex justifyContent={"end"}>
          {count}/140
          {errors.published && <span>{errors.content.message}</span>}
          <Button
            type="submit"
            bg="#00ACC1"
            color={"#FFFFFF"}
            opacity={0.4}
            border={"5"}
            justifyContent={"center"}
            align="center"
            role="group"
            p="4"
            mx="2"
            cursor="pointer"
            isLoading={send}
            _hover={{
              bg: "#00ACC1",
              color: "white",
            }}
          >
            Petwittar
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default PostForm;
