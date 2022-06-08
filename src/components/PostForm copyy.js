import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { posts } from "../services/auth";

const PostForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  return (
    <Box color="black" w={{ base: "full", md: 664 }}>
      <form
        id="form"
        onSubmit={handleSubmit((data) =>
          dispatch(
            posts({
              published: data.published,
            }),
            reset()
          )
        )}
      >
        <textarea
          placeholder="O que está acontecendo?"
          max="140"
          {...register("published")}
        ></textarea>{" "}
        <br />
        <button id="post" type="submit">
          Post It
        </button>
      </form>
      Posts
    </Box>
  );
};

export default PostForm;
