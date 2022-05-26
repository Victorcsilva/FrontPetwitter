import {Heading,
        Stack,
        Link,
        Button,
        Input,
        Flex,
        Text,
       Image} from '@chakra-ui/react';
      import dogimage from '../images/dog1.png'
      import patas from '../images/pets.png'
      import symbol from '../images/symbol.png'
      import patasblue from '../images/petsblue.png'
import { Link as ReachLink } from "react-router-dom"


function Cadastro() {

  return (
<Flex display={'flex'} direction={['column', 'row']} >
     <Flex
           align={'center'} 
           justify='center'>
             <Flex>
                <Image src={dogimage}  
                        display='flex'  
                        w={['100%','767px']} 
                        h={['100%','720px']}/>

                    <Image src={patas}  
                            display='flex'    
                            left={[37,179]} 
                            top={[67,354]} 
                            position={'absolute'}
                            w={['72px','77px']}  />

                        <Text  fontSize={['0%','51.5px']} 
                              color={'#FFFFFF'} 
                              fontFamily= {'Roboto'}  
                              fontWeight={'700'}  
                              left={289} 
                              top={[67,354]} 
                              position={'absolute'} > PETWITTER</Text>
            </Flex>
      </Flex>
     <Flex  justifyContent={'center'} align={'center'} marginLeft={'32px'}>
        <Stack spacing={4} w={'full'} >
              <Image src={symbol} w={['0%','76px']} />


              <Stack justifyContent={'center'} marginLeft={'32px'}>
        <Heading fontSize={'24px'}  fontFamily= {'Open Sans'} fontWeight={'600'} marginTop={'32px'}> Cadastro </Heading>
    
          <Flex 
              as="form"
              mt="20px"
    
              >
              <Stack 
                  maxWidth={['300px','100%']} 
                      justifyContent={'center'}
                      marginTop={'32px'}>
                        
                        <Text mb='8px'>Nome:</Text>
                        <Input name="Nome" 
                                type="text"
                                placeholder="Nome" 
                                focusBorderColor='#00ACC1'
                               />

                    <Text mb='8px'>E-mail:</Text>
                        <Input name="email" 
                                type="text"
                                placeholder="E-mail" 
                                focusBorderColor='#00ACC1'
                               />
                               <Text mb='8px'>Nome de usuário:</Text>
                               <Input name="Nome de usuário" 
                                type="text"
                                placeholder="Nome de usuário" 
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
                <Text fontSize={'16px'} fontStyle={'normal'} fontFamily= {'Open Sans'} fontWeight={'400'}>Já Possui Cadastro? </Text>
                      <Link as={ReachLink} to= "/" Color={'#00ACC1'} >Faça Login</Link> 
                 
 </Stack>
          </Stack>
     </Flex>
     <Flex display={'flex'} justifyContent='center' marginTop={'50px'}>
                      <Image 
                           src={patasblue}  
                            display='flex'    
                            w={['29px','0%']} 
                            />

                        <Text  fontSize={['21px','0%']} 
                              color={'#00ACC1'} 
                              fontFamily= {'Roboto'}  
                              fontWeight={'700'}  
                              marginLeft={'21px'}> PETWITTER</Text>
                        </Flex>
</Flex>
 
  );
}

export default Cadastro;