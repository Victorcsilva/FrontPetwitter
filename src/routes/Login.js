import { useLocation, useNavigate,} from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {Heading,
        Stack,
        Link,
        Button,
        Input,
        Flex,
        Text,
       } from '@chakra-ui/react';
 import { Link as ReachLink } from "react-router-dom"

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

    <Stack justifyContent={'center'} marginLeft={'32px'}>
        <Heading fontSize={['0%','36px']} color={'#00ACC1'} fontFamily= {'Open Sans'} >Comece agora.<p>Conecte-se já.</p></Heading>
        <Heading fontSize={'24px'}  fontFamily= {'Open Sans'} fontWeight={'600'} marginTop={'32px'}> Login </Heading>
    
          <Flex 
              as="form"
              mt="20px"
              onSubmit={handleSubmit}
              >
              <Stack 
                  maxWidth={['300px','100%']} 
                      justifyContent={'center'}
                      marginTop={'32px'}>
                        
                    <Text mb='8px'>E-mail:</Text>
                        <Input name="email" 
                                type="text"
                                placeholder="E-mail" 
                                focusBorderColor='#00ACC1'
                               />
              
                                <Text mb='8px'> Senha: </Text>
                                  <Input 
                                    name="password" 
                                    type="password" 
                                    placeholder="Senha"
                                    focusBorderColor='#00ACC1'/>

                                      <Button 
                                            type="submit"
                                            w={['296px','368px']}
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
                   <Heading fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} fontWeight={'400'}> Ainda não possui uma conta? 
                      <Link as={ReachLink} to= "/cadastro" fontColor={'#00ACC1'} > Cadastrar-se</Link> 
                  </Heading> 
 </Stack>
  );
}

export default Login;
