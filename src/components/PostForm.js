import { Box, Textarea } from "@chakra-ui/react";
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
    onTextChange = useCallback((evt) => setCount(evt.target.value.length), []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await posts(data);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box color="black" w={{ base: "full", md: 664 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          placeholder="O que está acontecendo?"
          onChange={onTextChange}
          {...register("published")}
        />
        <div>{count}/400</div>

        {errors.published && <span>{errors.published.message}</span>}
        {/* <div>{count}/140</div> */}
        <button type="submit">Petwittar</button>
      </form>
    </Box>
  );
}

export default PostForm;
