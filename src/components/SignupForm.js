import {
  Heading,
  Stack,
  Link,
  Button,
  Input,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("Email obrigatório"),
    username: yup.string().required("Usarname é obrigatorio"),
    password: yup
      .string()
      .min(5, "Senha obrigatório")
      .required("Senha Inválida"),
  })
  .required();

function SignupForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log(notify);
      reset();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <Stack>
      <Flex as="form" mt="20px" onSubmit={handleSubmit(onSubmit)}>
        <Stack
          w={"full"}
          maxWidth={["300px", "100%"]}
          align={"flex-start"}
          p="4"
        >
          <Heading
            fontSize={"24px"}
            fontFamily={"Open Sans"}
            fontWeight={"600"}
            marginTop={"32px"}
          >
            {"Cadastro"}
          </Heading>
          <Text mb="8px" color="#424242">
            Nome:
          </Text>
          <Input
            name="Nome"
            type="text"
            placeholder="Nome"
            focusBorderColor="#00ACC1"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Text mb="8px">E-mail:</Text>
          <Input
            name="email"
            type="text"
            placeholder="E-mail"
            focusBorderColor="#00ACC1"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Text mb="8px">Nome de usuário:</Text>
          <Input
            name="username"
            type="text"
            placeholder="Ex.: @carlos1234"
            focusBorderColor="#00ACC1"
            {...register("username")}
          />
          {errors.username && <span>{errors.username.message}</span>}
          <Text mb="8px"> Senha: </Text>
          <InputGroup size="md">
            <Input
              name="password"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="senha"
              focusBorderColor="#00ACC1"
              {...register("password")}
            />{" "}
            {errors.password && <span>{errors.password.message}</span>}
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            type="submit"
            w={["296px", "368px"]}
            colorScheme={"#00ACC1"}
            bgColor={"#00ACC1"}
            color={"#FFFFFF"}
            variant={"solid"}
            border-radius={"4px"}
            fontFamily={"Open Sans"}
            onClick={() => {
              setError("name", "email", "password", "username", {
                type: "focus",
              });
            }}
          >
            Entrar
          </Button>

          <ToastContainer />
        </Stack>
      </Flex>
      <Heading
        fontSize={"16px"}
        fontStyle={"normal"}
        fontFamily={"Open Sans"}
        fontWeight={"400"}
      >
        Já Possui Cadastro?
        <Link as={ReachLink} to="/" color="#00ACC1" href="#">
          {"  Faça Login "}
        </Link>
      </Heading>
    </Stack>
  );
}

export default SignupForm;
