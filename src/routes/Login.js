import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {Heading,Stack,Link,Button,Input,Flex,} from '@chakra-ui/react';


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (

    <Stack>
    <Heading fontSize={'36px'} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
    <Heading fontSize={'24px'} paddingTop={'24px'} fontFamily= {'Open Sans'}> Login </Heading>
    <Flex 
    as="form"
    mt="20px"
    onSubmit={handleSubmit} 
     ><Stack spacing='56px' maxWidth={['100%','300px']}>
          email: 
        <Input name="email" type="text" />
          senha: 
        <Input name="password" type="password" />
        <Button 
        type="submit"
         w='368px'
         colorScheme={'#00ACC1'}
          bgColor={'#00ACC1'} 
          color={'#FFFFFF'} 
          variant={'solid'}
          border-radius= {'4px'} 
          fontFamily= {'Open Sans'}>
           Entrar
        </Button>
      
      </Stack>
    </Flex>
    <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} > Ainda não possui uma conta? 
          <Link to = "/Cadastro"> Cadastrar-se</Link> 
    </Heading> 
 </Stack>
  );
}

export default Login;
