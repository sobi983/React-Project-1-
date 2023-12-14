import React, { useState } from 'react'
import { Flex, Avatar, Box, Text, Image, Button } from '@chakra-ui/react'
import dp from '/public/zuck-avatar.png'
import verified from '/public/verified.png'
import { SlOptions } from "react-icons/sl";
import post1 from '/public/post1.png'
import Actions from '../components/Actions'
import Comments from '../components/Comments';
import Line from '../components/Line'


//Overhere the user post with the comments and other stats will be shown. For the comment purpose we will use the comment compoent.
const PostPage = () => {
  let [liked, setLiked] = useState(false)
  let [likedComments, setLikeComments] = useState([
    {
      url: 'https://bit.ly/dan-abramov',
      name: 'johndoe',
      comment: "Looks really good",
      likeStatus: false,
      likes: 48,
      days: '1d',
    },
    {
      url: 'https://bit.ly/ryan-florence',
      name: 'mJiudd',
      comment: "Amazing",
      likeStatus: false,
      likes: 634,
      days: '5d',
    },
    {
      url: 'https://bit.ly/prosper-baba',
      name: 'mKhalifa23',
      comment: "We can have a party then!",
      likeStatus: false,
      likes: 83,
      days: '17d',
    },
  ])

  let handleLikeButton = (id) => {
    setLikeComments(prev => {
      return prev.map((items, index) => {
        if (id === index) {
          return { ...items, likeStatus: !items.likeStatus }
        }
        else {
          return items
        }
      })
    })

  }

  return (
    <Box mb={80}>

      {/* Post component */}
      <Flex w={'full'} className='gap-4 mt-6'>

        <Flex flexDirection={'column'} gap={2}>

          <Flex justifyContent={'space-between'} w={'full'}>

            <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
              <Avatar src={dp} size={['md', 'lg']} />
              <Text className=' font-semibold' fontSize={['18px', '24px']}>markzuckerberg</Text>
              <Image src={verified} className='w-5 h-5 mt-1' />
            </Flex>

            <Flex className=' justify-center gap-4 items-center' >
              <Text color={'gray.light'}>1d</Text>
              <SlOptions className='mt-1' />
            </Flex>
          </Flex>

          <Flex flexDirection={'column'} gap={2} mt={2}>
            <Text fontSize={['16px', '20px']} >Lets talk about the Threads.</Text>
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

      {/* Get app like component */}
      <Box>
        <Line />
        <Flex justifyContent={'space-between'} alignItems={'center'} px={4}>
          <Box>
            <Text color={'gray.light'} fontSize={['14px', '18px']} pl>👋 Get the app to like, reply and post</Text>
          </Box>
          <Button>Get</Button>
        </Flex>
        <Line />
      </Box>

      {/* Comments component import */}
      {likedComments && <Comments info={likedComments} likeAction={handleLikeButton} />}
    </Box>
  )
}

export default PostPage