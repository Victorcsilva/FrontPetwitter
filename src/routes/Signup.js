import {
  Heading,
  Stack,
  Link,
  Button,
  Input,
  Flex,
  Box,
  Text,
  Image,
  useOutsideClick,
  // Alert,
  // AlertIcon,
} from "@chakra-ui/react";
import dogimage from "../images/dog1.png";
import patas from "../images/pets.png";
import symbol from "../images/symbol.png";
import patasblue from "../images/petsblue.png";
import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

function Signup() {
  const ref = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });
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
      reset();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);

  return (
    <Flex display={"flex"} direction={["column", "row"]}>
      <Flex align={"center"} justify="center">
        <Flex display="block" position="static">
          <Image
            src={dogimage}
            position="static"
            w={["100%", "768px"]}
            h={["100%", "720px"]}
          />
          <Image
            src={patas}
            left={[37, 179]}
            top={[67, 354]}
            position="absolute"
            w={["72px", "77px"]}
          />
          <Text
            fontSize={["0%", "51.5px"]}
            color={"#FFFFFF"}
            fontFamily={"Roboto"}
            fontWeight={"700"}
            left={289}
            top={[67, 354]}
            position={"absolute"}
          >
            {" PETWITTER "}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} align={"center"} marginLeft={"32px"}>
        <Stack spacing={4} w={"full"}>
          <Image src={symbol} w={["0%", "76px"]} />
          <Stack justifyContent={"center"} marginLeft={"32px"}>
            <Heading
              fontSize={"24px"}
              fontFamily={"Open Sans"}
              fontWeight={"600"}
              marginTop={"32px"}
            >
              {"Cadastro"}
            </Heading>
            <Flex as="form" mt="20px" onSubmit={handleSubmit(onSubmit)}>
              <Stack
                maxWidth={["300px", "100%"]}
                justifyContent={"center"}
                marginTop={"32px"}
              >
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
                <Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  focusBorderColor="#00ACC1"
                  {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}
                {isModalOpen ? (
                  <div ref={ref}>Cadastro feito com sucesso</div>
                ) : (
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
                      setError(
                        "name",
                        "email",
                        "password",
                        "username",
                        { type: "focus" },
                        { setIsModalOpen: true }
                      );
                    }}
                  >
                    {"Entrar "}
                  </Button>
                )}
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
                {"Faça Login "}
              </Link>
            </Heading>
          </Stack>
        </Stack>
      </Flex>
      <Box display={"flex"} justifyContent="center" marginTop={"50px"}>
        <Image src={patasblue} display="flex" w={["29px", "0%"]} />
        <Text
          fontSize={["21px", "0%"]}
          color={"#00ACC1"}
          fontFamily={"Roboto"}
          fontWeight={"700"}
          marginLeft={"21px"}
        >
          PETWITTER
        </Text>
      </Box>
    </Flex>
  );
}
export default Signup;
