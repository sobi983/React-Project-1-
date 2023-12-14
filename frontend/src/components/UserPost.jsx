import React, { useState } from 'react'
import { Stack, Flex, Avatar, Box, Text, Image, VStack } from '@chakra-ui/react'
import dp from '/public/zuck-avatar.png'
import verified from '/public/verified.png'
import post1 from '/public/post1.png'
import { SlOptions } from "react-icons/sl";
import Actions from './Actions'


//This is the post page where user's posts and and interaction will be shown 
const UserPost = () => {
  let [liked, setLiked] = useState(false)
  return (
    <>
      <Flex w={'full'} className='gap-4 mt-6'>

        <Flex flexDirection={'column'} className=' items-center'>
          <Avatar src={dp} className='w-4 object-cover' />
          <Box h={'full'} w={'1px'} bg={'gray.light'} mt={1}></Box>
          <Box position={'relative'}>
            <Avatar src='https://bit.ly/prosper-baba' position={'absolute'} size={'xs'} right={'-3'} bottom={'-12'} />
            <Avatar src='https://bit.ly/code-beast' position={'absolute'} size={'xs'} />
            <Avatar src='https://bit.ly/sage-adebayo' position={'absolute'} size={'xs'} left={'-7'} />
          </Box>
        </Flex>


        <Flex flexDirection={'column'} gap={2}>

          <Flex justifyContent={'space-between'} w={'full'}>

            <Flex justifyContent={'center'} gap={1}>
              <Text className=' font-semibold'>markzuckerberg</Text>
              <Image src={verified} className='w-5 h-5 mt-1' />
            </Flex>

            <Flex className=' justify-center gap-4' >
              <Text color={'gray.light'}>1d</Text>
              <SlOptions className='mt-1' />
            </Flex>
          </Flex>

          <Flex flexDirection={'column'} gap={2}>
            <Text fontSize={'sm'}>Lets talk about the Threads.</Text>
            <Image src={post1} className=' rounded-md' />
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} className=' items-center'>
            <Text color={'gray.light'} fontSize={'sm'}>139 replies</Text>
            <Box className='rounded-full' w={0.5} h={0.5} bg={'gray.light'}></Box>
            <Text color={'gray.light'} fontSize={'sm'}>456 likes</Text>
          </Flex>

        </Flex>




      </Flex>
    </>
  )
}

export default UserPost