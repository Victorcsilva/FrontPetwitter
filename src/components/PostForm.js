import { Box, Textarea, Button, Flex, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { posts } from "../services/auth_posts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";

const schema = yup.object({
  content: yup.string().max(140).required("Campo obrigatorio"),
});

function PostForm() {
  const toast = useToast();
  const [count, setCount] = useState(0);
  const onTextChange = (event) => {
    setCount(event.target.value.length);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [send, setSend] = useState(false);
  const onSubmit = async (data) => {
    try {
      setSend(true);
      const response = await posts(data);
      toast({
        position: "top-right",
        description: "🦄 Legal !! você fez um post",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setSend(false);
      console.log(response);
      reset();
    } catch (error) {}
  };

  return (
    <Box display={["block", "block"]}>
      <Flex>
        <form onSubmit={handleSubmit(onSubmit)} onChange={onTextChange}>
          <Textarea
            borderWidth="1px"
            w={{ sm: "100%", md: "540px" }}
            direction={{ base: "column", md: "row" }}
            padding={2}
            fontSize={["16px", "19px"]}
            placeholder="O que está acontecendo?"
            maxLength={"140"}
            {...register("content")}
          />
          <Flex
            // position="fixed"
            right={"199"}
            top="40px"
            justifyContent="flex-end"
            alignContent={"flex=end"}
          >
            {count}/<h>140</h>
            {errors.content && alert(errors.content.message)}
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
      </Flex>
    </Box>
  );
}

export default PostForm;
