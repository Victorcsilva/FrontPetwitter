import {
  Flex,
  Stack,
  Image,
  Text
} from '@chakra-ui/react';
import dogimage from '../images/dog1.png'
import Login from './Login'
import patas from '../images/pets.png'
import symbol from '../images/symbol.png'

function Home() {
  return (
<Stack  display='flex'  direction={{ base: 'column', md:'row' }}>
     <Flex w={['360px','767px']} 
           h={['262px','720px']}
           flex={1} 
           backgroundImage = {dogimage} 
           backgroundRepeat ={'no-repeat'} 
           position={'stact'} 
           align={'center'} 
           justify='center'>
             <Image src={patas}  display='flex' left={179} position={'absolute'}/>
            <Text  fontSize={'51.5px'} color={'#FFFFFF'} fontFamily= {'Roboto'}  fontWeight={'700'}left={289} position={'absolute'} >PETWITTER</Text>
      </Flex>
      <Flex p={12} flex={1} align={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Flex flex={1} >
              <Image src={symbol}/>
          </Flex>
              <Login/>
        </Stack>
         </Flex>
      
</Stack>
  );
}
export default Home;